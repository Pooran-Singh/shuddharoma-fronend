import type { Product, Review } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Sandal Dusk Diffuser',
    price: 2499,
    subtitle: 'Warm sandalwood and amber',
    description: 'An elegant reed diffuser crafted for quiet evenings and intimate spaces.',
    ingredients: ['Sandalwood oil', 'Amber accord', 'Vetiver extract'],
    usage: 'Place reeds in bottle and rotate weekly for stronger scent diffusion.',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1512777576243-939fa9e83240?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1512777576243-939fa9e83240?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1616628188540-384224f5b4ad?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=900&q=80'
    ],
    category: 'Diffusers'
  },
  {
    id: '2',
    name: 'Monsoon Cedar Candle',
    price: 1899,
    subtitle: 'Rain-kissed cedar and moss',
    description: 'A hand-poured soy wax candle inspired by monsoon forests and earthy calm.',
    ingredients: ['Soy wax', 'Cedarwood essence', 'Oakmoss'],
    usage: 'Burn for 2-3 hours on first use to form an even melt pool.',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1602872030094-33f283f9fce3?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1602872030094-33f283f9fce3?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1608181831718-8ef80f4c4d7b?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?auto=format&fit=crop&w=900&q=80'
    ],
    category: 'Candles'
  },
  {
    id: '3',
    name: 'Temple Garden Mist',
    price: 1499,
    subtitle: 'Jasmine petals and green fig',
    description: 'A refined room mist that refreshes your surroundings with serene floral depth.',
    ingredients: ['Jasmine absolute', 'Green fig', 'Distilled aqua base'],
    usage: 'Spray 2-3 pumps in open space or on linens from a safe distance.',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1614036417651-efe5912149d8?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1614036417651-efe5912149d8?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1608571423539-e951a95f65f0?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&w=900&q=80'
    ],
    category: 'Room Mists'
  },
  {
    id: '4',
    name: 'Neroli Aura Set',
    price: 3299,
    subtitle: 'Limited edition gift box',
    description: 'A premium curated ritual set with candle, diffuser, and aroma card.',
    ingredients: ['Neroli blossom', 'White tea accord', 'Citrus peel oils'],
    usage: 'Layer all products across your home for a complete scent story.',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1523293915678-d126868e96e4?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1523293915678-d126868e96e4?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1608023136037-626dad6c6188?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1626957341926-98752fc2ba66?auto=format&fit=crop&w=900&q=80'
    ],
    category: 'Gift Sets'
  }
];

export const reviews: Review[] = [
  { id: 'r1', productId: '1', author: 'Ananya R.', message: 'Sophisticated and long lasting scent profile.', rating: 5 },
  { id: 'r2', productId: '2', author: 'Kabir M.', message: 'Transforms my living room into a boutique retreat.', rating: 5 },
  { id: 'r3', productId: '3', author: 'Ira S.', message: 'Fresh, green, and never overpowering.', rating: 4 }
];
