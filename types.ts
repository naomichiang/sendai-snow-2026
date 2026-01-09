
export type Category = '食物' | '活動' | '購物' | '景點' | '飯店' | '交通';

export interface Spot {
  time?: string;
  category: Category;
  name: string;
  desc: string;
  tags?: string[];
  mapUrl?: string;
  imageUrl?: string;
  emoji?: string;
  highlightText?: string;
}

export interface DayPlan {
  day: number;
  date: string;
  location: string;
  spots: Spot[];
  clothingAdvice: string;
  snowTip: string;
}

export interface WeatherDay {
  date: string;
  temp: string;
  snowChance: string;
  realFeel: string;
  snowDepth: string;
  clothing: string;
  location: string;
}

export interface PackingItem {
  id: string;
  name: string;
  quantity: number;
  completed: boolean;
  category: '隨身背包' | '手提行李' | '托運行李' | '購物清單';
}
