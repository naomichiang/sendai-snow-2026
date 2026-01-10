import React from 'react';
import { Flight } from '../types';

interface FlightCardProps {
  flight: Flight;
}

const FlightCard: React.FC<FlightCardProps> = ({ flight }) => {
  return (
    <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-white/20 mb-3 overflow-hidden relative">
      {/* Header */}
      <div className="flex items-center mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-[#F5EFEF] rounded-xl flex items-center justify-center text-xl shadow-inner">
            ✈️
          </div>
          <div>
            <h3 className="text-lg font-black text-[#3E2723]">{flight.type} <span className="ml-2 text-lg text-[#9E9E9E] font-medium">{flight.date}</span></h3>
          </div>
        </div>
      </div>

      {/* Flight Times - Above Animation */}
      <div className="flex items-center justify-between mb-4">
        <div className="text-center">
          <p className="text-2xl font-bold text-[#3E2723]">{flight.departureTime}</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-[#3E2723]">{flight.arrivalTime}</p>
        </div>
      </div>

      {/* Flight Animation - Top Position */}
      <div className="relative mb-6 -mt-2">
        {/* Simple Flight Route Animation */}
        <div className="flex items-center justify-between relative">
          {/* Departure Point */}
          <div className="flex flex-col items-center">
            <div className="departure-dot"></div>
            <div className="mt-2 text-center">
              <p className="text-lg font-bold text-[#3E2723]">{flight.departure}</p>
            </div>
          </div>

          {/* Animated Dashed Line */}
          <div className="flex-1 mx-4 relative">
            <div className="dashed-line"></div>
            <div className="plane-icon">
              <span className="text-xl">✈️</span>
            </div>
          </div>

          {/* Arrival Point */}
          <div className="flex flex-col items-center">
            <div className="arrival-dot"></div>
            <div className="mt-2 text-center">
              <p className="text-lg font-bold text-[#3E2723]">{flight.arrival}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Flight Details */}
      <div className="bg-[#F8dd28]/20 rounded-xl p-3">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-[#9E9E9E] font-bold uppercase tracking-wider">飛行時間</p>
            <p className="text-xl font-bold text-[#3E2723]">{flight.duration} 🍱</p>
          </div>
          <div>
            <p className="text-sm text-[#9E9E9E] font-bold uppercase tracking-wider">機型</p>
            <p className="text-lg font-bold text-[#3E2723]">{flight.aircraft}</p>
          </div>
        </div>
      </div>

      {/* Custom CSS Animation */}
      <style jsx>{`
        /* Departure and Arrival dots */
        .departure-dot, .arrival-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #8D7B77;
          border: 2px solid #D7CCC8;
          animation: pulse 2s ease-in-out infinite;
        }

        .arrival-dot {
          animation-delay: 2s;
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.4);
            opacity: 0.7;
          }
          75% {
            transform: scale(1.8);
            opacity: 0.3;
          }
          90% {
            transform: scale(1.2);
            opacity: 0.1;
          }
        }

        /* Animated dashed line */
        .dashed-line {
          height: 2px;
          background: repeating-linear-gradient(
            90deg,
            #D7CCC8,
            #D7CCC8 4px,
            transparent 4px,
            transparent 8px
          );
          position: relative;
          top: -12px;
          animation: dashFlow 3s linear infinite;
        }

        @keyframes dashFlow {
          0% { background-position: 0 0; }
          100% { background-position: 24px 0; }
        }

        /* Plane icon animation */
        .plane-icon {
          position: absolute;
          top: calc(50% - 12px);
          left: 0;
          transform: translateY(-50%);
          animation: planeFly 4s ease-in-out infinite;
          z-index: 10;
        }

        @keyframes planeFly {
          0% {
            left: -10px;
            transform: translateY(-50%) scale(0.8);
            opacity: 0;
          }
          10% {
            opacity: 1;
            transform: translateY(-50%) scale(1);
          }
          90% {
            opacity: 1;
            transform: translateY(-50%) scale(1.2);
          }
          100% {
            left: calc(100% + 10px);
            transform: translateY(-50%) scale(0.8);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default FlightCard;
