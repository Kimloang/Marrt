
export interface Product {
  id: string;
  name: string;
  price: number;
  weight: string;
  imageUrl: string;
  category: string;
  isNew?: boolean;
  isLimited?: boolean;
  description?: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export type View = 'home' | 'catalog' | 'cart' | 'saved' | 'profile';
