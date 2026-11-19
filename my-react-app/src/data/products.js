// Product catalogue — array of objects (requirement 1).
// Tip from the brief: `{ name, price, category }` is incomplete.
// Every list item needs a stable unique `id` (used as the React `key`
// and later when adding/removing cart items).
export const products = [
  {
    id: 1,
    name: 'Laptop',
    price: 899,
    category: 'Electronics',
    image: '/images/laptop.svg',
  },
  {
    id: 2,
    name: 'Phone',
    price: 699,
    category: 'Electronics',
    image: '/images/phone.svg',
  },
  {
    id: 3,
    name: 'Headphones',
    price: 129,
    category: 'Electronics',
    image: '/images/headphones.svg',
  },
  {
    id: 4,
    name: 'Desk',
    price: 199,
    category: 'Furniture',
    image: '/images/desk.svg',
  },
  {
    id: 5,
    name: 'Chair',
    price: 149,
    category: 'Furniture',
    image: '/images/chair.svg',
  },
  {
    id: 6,
    name: 'Bookshelf',
    price: 89,
    category: 'Furniture',
    image: '/images/bookshelf.svg',
  },
  {
    id: 7,
    name: 'Novel',
    price: 14,
    category: 'Books',
    image: '/images/novel.svg',
  },
  {
    id: 8,
    name: 'Cookbook',
    price: 24,
    category: 'Books',
    image: '/images/cookbook.svg',
  },
  {
    id: 9,
    name: 'Textbook',
    price: 59,
    category: 'Books',
    image: '/images/textbook.svg',
  },
]
