# Shopping Cart App (React)

ATU React project — shopping cart application built with Vite + React.

## What's in this slice (requirement 1)

- Product catalogue with **9 products** across **3 categories** (Electronics, Furniture, Books)
- Each product shows **name, image, price, category**, and an **Add to Cart** button
- Products live in an array of objects in `src/data/products.js`
- Component tree matches the brief: `App` → `ProductList` → `Product`, plus `Cart` and `Statistics` placeholders

## Run locally

```bash
cd my-react-app
npm install
npm run dev -- --host 127.0.0.1 --port 3847
```

Open the URL Vite prints (default here: `http://127.0.0.1:3847`).

## Project layout

```
src/
  data/products.js      # catalogue data (+ id tip from the brief)
  components/
    ProductList.jsx     # map() over products
    Product.jsx         # one card via props
    Cart.jsx            # placeholder (req 3)
    Statistics.jsx      # placeholder (req 4)
  App.jsx
```

## Coming next

2. Search with `useState` + `filter()`
3. Cart add/remove + `CartContext`
4. Statistics with `filter()` / `reduce()` + `useEffect` title/popup
