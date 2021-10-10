import { Product } from './core/product';
import { Size } from './core/size';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Coffee',
    imageUrls: ['../assets/vanillaLatte.jpeg', '../assets/mocaccino.jpeg', '../assets/cappuccino.jpeg'],
    price: 10,
    flavors: [
      { name: 'vanillaLatte', color: '#ffe94b' },
      { name: 'mocaccino', color: '#a05641' },
      { name: 'cappuccino', color: '#d98851' },
    ],
    sizes: [Size.SMALL, Size.MEDIUM, Size.LARGE],
  },
  {
    id: 2,
    name: 'Beverages',
    imageUrls: ['../assets/fruitJuices.jpeg', '../assets/water.jpeg', '../assets/lemonade.jpeg'],
    price: 15,
    flavors: [
      { name: 'fruitJuices', color: '#ff8f4d' },
      { name: 'water', color: '#08baff' },
      { name: 'lemonade', color: '#cfde46' },
    ],
    sizes: [Size.SMALL, Size.MEDIUM, Size.LARGE],
  },
  {
    id: 3,
    name: 'Facturas',
    imageUrls: ['../assets/medialunas.jpeg', '../assets/cañoncitos.jpeg', '../assets/vigilante.jpeg'],
    price: 8,
    flavors: [
      { name: 'medialunas', color: '#00CACA' },
      { name: 'cañoncitos', color: '#80DC0B' },
      { name: 'vigilante', color: '#E91E63' },
    ],
    sizes: [Size.SMALL, Size.LARGE],
  },
  {
    id: 4,
    name: 'Sandwiches',
    imageUrls: ['../assets/cheese.jpeg', '../assets/salami.jpeg', '../assets/ham.jpeg'],
    price: 20,
    flavors: [
      { name: 'cheese', color: '#00CACA' },
      { name: 'salami', color: '#80DC0B' },
      { name: 'ham', color: '#E91E63' },
    ],
    sizes: [Size.SMALL, Size.LARGE],
  },
];