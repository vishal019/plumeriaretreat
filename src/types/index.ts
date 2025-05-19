export interface NavItem {
  label: string;
  path: string;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  image: string;
  rating: number;
  text: string;
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: 'nature' | 'accommodation';
  width: number;
  height: number;
}

export interface Accommodation {
  id: number;
  type: string;
  title: string;
  description: string;
  price: number;
  capacity: number;
  features: string[];
  image: string;
  hasAC: boolean;
  hasAttachedBath: boolean;
}

export interface MealPlan {
  id: number;
  type: string;
  title: string;
  description: string;
  price: number;
  includes: string[];
}

export interface Activity {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  duration: string;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}