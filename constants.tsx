
import React from 'react';

export const COLORS = {
  snow: '#F8F9FA',
  cocoa: '#3E2723',
  beige: '#D7CCC8',
  warmGray: '#9E9E9E',
  accent: '#A1887F'
};

export const CATEGORY_COLORS: Record<string, string> = {
  '食物': 'bg-orange-100 text-orange-700',
  '活動': 'bg-blue-100 text-blue-700',
  '購物': 'bg-pink-100 text-pink-700',
  '景點': 'bg-green-100 text-green-700',
  '飯店': 'bg-purple-100 text-purple-700',
  '交通': 'bg-sky-100 text-sky-700',
  '航班': 'bg-sky-100 text-gray-600',
};

export const TAG_COLORS: Record<string, string> = {
  '必吃': 'bg-rose-500 text-white',
  '必買': 'bg-amber-500 text-white',
  '必拍': 'bg-cyan-500 text-white',
};

export const Icons = {
  Itinerary: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="3" x2="21" y1="10"/><line x1="7" x2="7.01" y1="14"/><line x1="11" x2="11.01" y1="14"/><line x1="15" x2="15.01" y1="14"/><line x1="7" x2="7.01" y1="18"/><line x1="11" x2="11.01" y1="18"/><line x1="15" x2="15.01" y1="18"/></svg>
  ),
  Guide: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
  ),
  Weather: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19a3.5 3.5 0 1 1-5.83-2.65 4.82 4.82 0 1 1 8.28-4.48 3.1 3.1 0 0 1 1.05 2.13A3.5 3.5 0 0 1 17.5 19Z"/><path d="M12 2v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="M2 12h2"/><path d="m4.93 19.07 1.41-1.41"/><path d="M12 20v2"/><path d="m19.07 19.07-1.41-1.41"/><path d="M20 12h2"/><path d="m19.07 4.93-1.41 1.41"/></svg>
  ),
  Map: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" x2="9" y1="3" y2="18"/><line x1="15" x2="15" y1="6" y2="21"/></svg>
  )
};
