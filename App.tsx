
import React, { useState } from 'react';
import { ITINERARY_DATA, WEATHER_DATA } from './data';
import { CATEGORY_COLORS, TAG_COLORS, Icons } from './constants';
import PackingList from './components/PackingList';
import FlightCard from './components/FlightCard';

const App: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<number | 'packing'>(0);

  const isPackingView = selectedDay === 'packing';
  const currentDay = typeof selectedDay === 'number' ? ITINERARY_DATA[selectedDay] : null;
  const currentDayWeather = typeof selectedDay === 'number' ? WEATHER_DATA[selectedDay] : null;

  return (
    <div className="max-w-md mx-auto bg-[#8D7B77]/70 min-h-screen relative pb-32 transition-colors duration-500 overflow-x-hidden">
      {/* Header - Tightened */}
      <header className="px-5 py-5 pt-10 bg-[#3E2723]/80 text-[#F8F9FA] rounded-b-[2rem] shadow-xl border-b border-black/10">
        <div className="flex justify-between items-end">
          <div>
            <p className="text-[12px] opacity-60 mb-2 tracking-[0.3em] font-black text-[#D7CCC8]">SENDAI WINTER 2026</p>
            <h1 className="text-2xl font-black tracking-tight leading-snug">仙 台 雪 季 旅 程</h1>
          </div>
          <div className="text-right">
            <p className="text-base font-black text-[#D7CCC8]">01.16 - 01.22</p>
          </div>
        </div>
      </header>

      <main className="px-3 py-3 animate-in fade-in duration-500">
        {isPackingView ? (
          <PackingList />
        ) : currentDay && currentDayWeather ? (
          <>
            {/* Weather Card - Static & Compact */}
            <div className="bg-white rounded-[1.5rem] p-5 shadow-md border border-white/40 mb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 bg-[#F5EFEF] rounded-xl flex items-center justify-center text-2xl shadow-inner">❄️</div>
                  <div>
                    <h2 className="text-xl font-black text-[#3E2723] tracking-wide leading-none">{currentDay.location}</h2>
                    <div className="flex gap-1.5 mt-1.5">
                      <span className="text-[12px] bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded-md font-bold">雪 {currentDayWeather.snowChance}</span>
                      <span className="text-[12px] bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded-md font-bold">深 {currentDayWeather.snowDepth}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-black text-[#3E2723]">{currentDayWeather.temp}</p>
                  <p className="text-[12px] text-[#9E9E9E] font-bold">體感 {currentDayWeather.realFeel}</p>
                </div>
              </div>
            </div>

            {/* Flight Cards */}
            {currentDay.flights && currentDay.flights.map((flight, i) => (
              <FlightCard key={i} flight={flight} />
            ))}

            {/* Spot & Transport List - Clean Layout without Left Margin */}
            <div className="space-y-3">
              {currentDay.spots.map((spot, i) => (
                <div key={i} className={`bg-white rounded-[2rem] p-5 shadow-sm border border-white/20 transition-all active:scale-[0.99] ${spot.category === '交通' ? 'bg-[#FDFCFB]' : ''}`}>
                  
                  {/* Header Row: Combined Time, Tags and Nav Button */}
                  <div className="flex items-start justify-between mb-3 gap-2">
                    <div className="flex flex-wrap gap-3 items-center">
                      {/* Time Badge - Moved here to eliminate left column */}
                      <span className={`text-[16px] font-black h-8 min-w-[64px] flex items-center justify-center px-2 rounded-2xl shadow-sm ${spot.category === '交通' ? 'bg-[#3E2723] text-white' : 'bg-[#EFEBE9] text-[#5D4037]'}`}>
                        {spot.time || "--:--"}
                      </span>
                      
                      <span className={`text-[14px] h-7 px-2.5 flex items-center justify-center rounded-lg font-black tracking-widest shadow-sm ${CATEGORY_COLORS[spot.category]}`}>
                        {spot.category}
                      </span>
                      
                      {spot.tags && spot.tags.map(tag => (
                        <span key={tag} className={`text-[12px] h-7 px-2.5 flex items-center justify-center rounded-lg font-black uppercase tracking-tight shadow-sm ${TAG_COLORS[tag]}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {spot.mapUrl && (
                      <a 
                        href={spot.mapUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-shrink-0 w-14 h-14 bg-red-800 text-white flex items-center justify-center rounded-2xl shadow-lg active:shadow-sm transition-all hover:bg-[#4E342E]"
                        aria-label="導航"
                      >
                      <div className="transform scale-125">
                        <Icons.Map />
                      </div> 
                      </a>
                    )}
                  </div>
                  
                  {/* Content Area - Now Full Width */}
                  <div className="w-full">
                    {/* Title */}
                    <h3 className="font-semibold text-xl tracking-widest leading-tight mb-2 text-[#3E2723]/90">
                      {spot.name}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-[15px] text-[#616161] leading-relaxed font-medium mb-4">
                      {spot.desc}
                    </p>

                    {/* Highlight Row */}
                    {spot.emoji && spot.highlightText && (
                      <div className="flex items-center gap-3 px-3 py-1.5 bg-[#FDF1EE] border border-[#F5E6E2] rounded-xl w-fit">
                        <span className="text-base leading-none">{spot.emoji}</span>
                        <span className="text-[14px] font-semibold text-[#8D7B77] uppercase tracking-widest">
                          {spot.highlightText}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Tips - Compact */}
            <div className="mt-6 grid grid-cols-2 gap-3 pb-2">
               <div className="bg-white/95 rounded-[1.5rem] p-4 shadow-md border border-white/40">
                  <div className="text-4xl mb-3 text-[#3E2723]">🧣</div>
                  <h4 className="text-[13px] font-black text-[#A1887F] uppercase tracking-widest mb-2">建議穿著</h4>
                  <p className="text-lg font-bold text-[#3E2723] leading-snug">{currentDay.clothingAdvice}</p>
               </div>
               <div className="bg-white/95 rounded-[1.5rem] p-4 shadow-md border border-white/40">
                  <div className="text-4xl mb-3 text-[#3E2723]">🏔️</div>
                  <h4 className="text-[13px] font-black text-[#A1887F] uppercase tracking-widest mb-2">雪況提示</h4>
                  <p className="text-lg font-bold text-[#3E2723] leading-snug">{currentDay.snowTip}</p>
               </div>
            </div>
          </>
        ) : null}
      </main>

      {/* Day Selector Navigation - More Compact */}
      <div className="fixed bottom-6 left-0 w-full px-3 z-50">
        <div className="max-w-md mx-auto">
          <div className="bg-[#3E2723]/95 backdrop-blur-xl rounded-[1.8rem] p-2 shadow-2xl border border-white/10">
            <div className="flex overflow-x-auto gap-3 no-scrollbar px-0.5 py-1 items-center justify-between">
              {ITINERARY_DATA.map((d, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedDay(idx)}
                  className={`flex-shrink-0 w-14 h-14 rounded-2xl flex flex-col items-center justify-center transition-all duration-300 ${
                    selectedDay === idx 
                      ? 'bg-white text-[#3E2723] shadow-inner transform scale-105' 
                      : 'bg-transparent text-white/40 hover:text-white/80'
                  }`}
                >
                  <span className="text-[14px] font-black tracking-tighter">D{d.day}</span>
                  <span className="text-md font-black leading-none">{d.date.slice(-2)}</span>
                </button>
              ))}
              <button
                onClick={() => setSelectedDay('packing')}
                className={`flex-shrink-0 w-14 h-14 rounded-2xl flex flex-col items-center justify-center transition-all duration-300 ${
                  selectedDay === 'packing'
                    ? 'bg-white text-[#3E2723] shadow-inner transform scale-105' 
                    : 'bg-transparent text-white/40 hover:text-white/80'
                }`}
              >
                <span className="text-2xl leading-none">🧳</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
