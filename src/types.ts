export interface Dish {
  id: string;
  name: string;
  price: number;
  rating: number;
  image: string;
  category: 'pizza' | 'pasta' | 'burger' | 'dessert' | 'salad' | 'specials';
  description: string;
  tags?: string[];
  isRecommended?: boolean;
  isTodaySpecial?: boolean;
}

export interface Chef {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  socials: {
    instagram?: string;
    twitter?: string;
    facebook?: string;
  };
}

export interface Reservation {
  id: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  tableNumber: number;
  status: 'pending' | 'confirmed';
}

export interface Table {
  id: number;
  capacity: number;
  isReserved: boolean;
  x: number; // position on map
  y: number;
}
