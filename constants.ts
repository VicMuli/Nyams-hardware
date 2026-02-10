import { Product, Testimonial } from './types';

export const PRODUCTS: Product[] = [
  // Plumbing (5 products)
  { 
    id: 'p1', 
    name: 'Wall Mounted Chrome Mixer', 
    category: 'Plumbing', 
    price: 4800, 
    rating: 5, 
    // Matching the wall-mounted swan neck mixer with cross handles
    image: 'https://drive.google.com/thumbnail?id=1Xrn8PfpQHmkqFKmbXfWarqiMYtNv4oXc&sz=w1000'


  },
  { 
    id: 'p2', 
    name: 'Modern Ceramic Wash Basin', 
    category: 'Plumbing', 
    price: 8500, 
    rating: 4, 
    // Matching the white pedestal sink
    image: 'https://drive.google.com/thumbnail?id=1vSNbUnWN9dwMmfcr6wvUyog0LSK2POKS&sz=w1000'

  },
  { 
    id: 'p3', 
    name: 'A PVC pipe 4 inch', 
    category: 'Plumbing', 
    price: 1200, 
    rating: 4, 
    // Matching the grey PVC pipes
    image: 'https://drive.google.com/thumbnail?id=1Fd1A8d97678hm-MGRAFoZQdoZ52WlrIZ&sz=w1000'

  },
  { 
    id: 'p4', 
    name: 'Square Stainless Rain Shower', 
    category: 'Plumbing', 
    price: 3200, 
    rating: 5, 
    // Matching the square shower head
    image: 'https://drive.google.com/thumbnail?id=1JeejpV7uYCxz1zzoIpe9P5ig3Ac88JCP&sz=w1000'
  },
  { 
    id: 'p5', 
    name: 'Ceramic Close-Coupled Toilet', 
    category: 'Plumbing', 
    price: 16500, 
    rating: 5, 
    // Matching the full toilet suite
    image: 'https://drive.google.com/thumbnail?id=1xOa0pzBwI_2yo0Pt_Rz39a2_JrUWGM8d&sz=w1000'
  },

  // Electrical (5 products)
  { id: 'e1', name: 'Schneider 3-Gang Switch', category: 'Electrical', price: 850, rating: 5, image: 'https://drive.google.com/thumbnail?id=17dR9co4irXmkKnhWpQhvTCnLBK1uGIER&sz=w1000' },
  { id: 'e2', name: 'LED Bulb 15W (Pack of 4)', category: 'Electrical', price: 1200, rating: 4, image: 'https://drive.google.com/thumbnail?id=17bXdWypzzfkryiV4vqMB-9oayFMcbdMq&sz=w1000' },
  { id: 'e3', name: 'Extension Cable Reel 25m', category: 'Electrical', price: 4500, rating: 5, image: 'https://drive.google.com/thumbnail?id=1R59IKSvT6yFkWS6ono7kG5NMPx86YEGE&sz=w1000' },
  { id: 'e4', name: 'Circuit Breaker 32A', category: 'Electrical', price: 600, rating: 4, image: 'https://drive.google.com/thumbnail?id=1kXTub7o1a9n6s-BAG3ceW23YVd5vT0R4&sz=w1000' },
  { id: 'e5', name: 'Ceiling Fan Modern', category: 'Electrical', price: 8900, rating: 5, image: 'https://drive.google.com/thumbnail?id=1UL2eE9bnUndLWl2HvC87ZAm9gV5RQIML&sz=w1000' },

  // Paints (5 products)
  { id: 'pa1', name: 'Duracoat Emulsion White', category: 'Paints', price: 3200, rating: 5, image: 'https://drive.google.com/thumbnail?id=1rKWp__Fj-viBdmecLAdhLptF-9oAAgU7&sz=w1000' },
  { id: 'pa2', name: 'Crown Gloss Red 4L', category: 'Paints', price: 4100, rating: 4, image: 'https://drive.google.com/thumbnail?id=1VbcnTmiXUg4mC4X7g21YEGxNdTeY3kWq&sz=w1000' },
  { id: 'pa3', name: 'Paint Roller Set', category: 'Paints', price: 850, rating: 4, image: 'https://drive.google.com/thumbnail?id=1m05yzHHJxD91gUfuMcw00dXW_Mo-Yy8B&sz=w1000' },
  { id: 'pa4', name: 'Masking Tape (3 Pack)', category: 'Paints', price: 300, rating: 3, image: 'https://drive.google.com/thumbnail?id=1xy33X1JwlYWoNBTMFr_awnc5Y2lEXG-u&sz=w1000' },
  { id: 'pa5', name: 'Paint Thinner 5L', category: 'Paints', price: 1200, rating: 4, image: 'https://drive.google.com/thumbnail?id=1VBNDIEIA9IyiGtlxzjgBJlrr8ZtlqRwC&sz=w1000' },
];
export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Kamau',
    role: 'Interior Designer',
    content: 'Nyams Hardware has been my go-to for all plumbing fixtures. The brass mixer taps transformed my client\'s kitchen completely!',
    avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=200',
    stars: 5
  },
  {
    id: 't2',
    name: 'David Ochieng',
    role: 'Contractor',
    content: 'Reliable delivery and genuine electrical parts. I never have to worry about counterfeits when buying from Nyams.',
    avatar: 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&q=80&w=200',
    stars: 5
  },
  {
    id: 't3',
    name: 'Lucy Wanjiku',
    role: 'DIY Enthusiast',
    content: 'The staff helped me pick the perfect paint shade for my living room. Excellent customer service and great prices.',
    avatar: 'https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?auto=format&fit=crop&q=80&w=200',
    stars: 4
  }
];