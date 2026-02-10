export interface Product {
  id: string;
  name: string;
  category: 'Plumbing' | 'Electrical' | 'Paints';
  price: number;
  image: string;
  rating: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
  stars: number;
}

export interface CategoryCard {
  title: string;
  subtitle: string;
  image: string;
  tag: string;
  size: 'large' | 'small';
}