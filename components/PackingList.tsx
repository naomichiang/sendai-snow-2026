import React, { useState, useEffect } from 'react';
import { PackingItem } from '../types';

const PackingList: React.FC = () => {
  const [items, setItems] = useState<PackingItem[]>(() => {
    const saved = localStorage.getItem('sendai_packing');
    if (saved) return JSON.parse(saved);
    return [
      { id: '1', name: '護照/機票', quantity: 1, completed: false, category: '隨身背包' },
      { id: '2', name: '行動電源', quantity: 1, completed: false, category: '隨身背包' },
      { id: '3', name: '錢包/日幣', quantity: 1, completed: false, category: '隨身背包' },
      { id: '4', name: '發熱衣', quantity: 3, completed: false, category: '托運' },
      { id: '5', name: '暖暖包', quantity: 10, completed: false, category: '托運' },
      { id: '6', name: '滑雪手套', quantity: 1, completed: false, category: '托運' },
      { id: '7', name: '羽絨外套', quantity: 1, completed: false, category: '托運' },
      { id: '8', name: '保溫瓶', quantity: 1, completed: false, category: '手提' },
      { id: '9', name: '相機', quantity: 1, completed: false, category: '手提' },
    ];
  });

  const [newItemName, setNewItemName] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<PackingItem['category']>('隨身背包');

  useEffect(() => {
    localStorage.setItem('sendai_packing', JSON.stringify(items));
  }, [items]);

  const toggleItem = (id: string) => {
    setItems(items.map(item => item.id === id ? { ...item, completed: !item.completed } : item));
  };

  const deleteItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  const addItem = () => {
    if (!newItemName.trim()) return;
    const newItem: PackingItem = {
      id: Date.now().toString(),
      name: newItemName,
      quantity: 1,
      completed: false,
      category: selectedCategory,
    };
    setItems([...items, newItem]);
    setNewItemName('');
  };

  const categories: PackingItem['category'][] = ['隨身背包', '托運行李', '購物清單'];

  const categoryEmojis = {
    '隨身背包': '🎒',
    '托運行李': '🧳',
    '購物清單': '🛒',
  };

  return (
    <div className="space-y-3">
      {/* 新增項目區 */}
      <div className="bg-white rounded-[1.5rem] p-4 shadow-md border border-white/40">
        <h3 className="text-lg font-black text-[#3E2723] mb-3 tracking-tight">行李清單</h3>
        <div className="flex flex-wrap gap-2 mb-3">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-[12px] h-8 px-3 flex items-center justify-center rounded-lg font-semibold tracking-tight shadow-sm transition-all ${
                selectedCategory === cat 
                  ? 'bg-[#3E2723] text-white' 
                  : 'bg-[#EFEBE9] text-[#5D4037]'
              }`}
            >
              {categoryEmojis[cat]} {cat}
            </button>
          ))}
        </div>
        <div className="flex gap-2 items-center"> {/* 💡 增加 items-center 確保高度對齊 */} 
          <input
            type="text"
            value={newItemName}
            onChange={(e) => setNewItemName(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addItem()}
            placeholder="自行新增項目..."
            className="flex-1 min-w-0 bg-[#F5EFEF] border border-[#E0E0E0] rounded-xl px-4 h-14 text-base text-[#3E2723] placeholder-[#9E9E9E] focus:outline-none focus:ring-2 focus:ring-[#A1887F] font-semibold"
          />
          <button
            onClick={addItem}
            className="flex-shrink-0 bg-[#3E2723] text-white w-14 h-14 rounded-xl flex items-center justify-center font-black text-md shadow-lg active:scale-95 transition-all"
          >
            +
          </button>
        </div>  
      </div>

      {/* 分類清單 */}
      {categories.map(cat => {
        const catItems = items.filter(i => i.category === cat);
        if (catItems.length === 0) return null;
        
        const completedCount = catItems.filter(i => i.completed).length;
        const totalCount = catItems.length;
        
        return (
          <div key={cat} className="bg-white rounded-[2rem] p-5 shadow-sm border border-white/20">
            {/* 分類標題 */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="text-xl">{categoryEmojis[cat]}</span>
                <h4 className="font-black text-lg text-[#3E2723] tracking-tight">{cat}</h4>
              </div>
              <span className="text-[11px] font-black text-[#A1887F] bg-[#F5EFEF] px-2.5 py-1 rounded-lg">
                {completedCount}/{totalCount}
              </span>
            </div>
            
            {/* 項目列表 */}
            <div className="space-y-2">
              {catItems.map(item => (
                <div 
                  key={item.id} 
                  className={`flex items-center gap-3 p-3 rounded-[1.2rem] border transition-all ${
                    item.completed 
                      ? 'bg-[#F5EFEF] border-[#E0E0E0]' 
                      : 'bg-white border-[#E0E0E0]'
                  }`}
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all flex-shrink-0 ${
                      item.completed 
                        ? 'bg-[#3E2723] border-[#3E2723]' 
                        : 'bg-white border-[#BDBDBD]'
                    }`}
                  >
                    {item.completed && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    )}
                  </button>
                  <span className={`flex-1 text-[15px] font-medium ${
                    item.completed 
                      ? 'line-through text-[#9E9E9E]' 
                      : 'text-[#3E2723]'
                  }`}>
                    {item.name}
                  </span>
                  {item.quantity > 1 && (
                    <span className="text-[11px] font-black text-[#A1887F] bg-[#FDF1EE] px-2 py-0.5 rounded-md">
                      ×{item.quantity}
                    </span>
                  )}
                  <button
                    onClick={() => deleteItem(item.id)}
                    className="text-[#9E9E9E] hover:text-[#5D4037] transition-colors p-1.5 rounded-lg hover:bg-[#F5EFEF]"
                    aria-label="刪除"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 6h18"/>
                      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
                      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PackingList;
