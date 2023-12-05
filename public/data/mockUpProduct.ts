import { ProductType } from "../../src/types/ProductType";

export const mockUpProduct: ProductType[] = [
  // Food Category
  {
    id: 1,
    name: "Deluxe Chocolate Cake",
    price: 29.99,
    category: "food",
    image_url: "https://example.com/food/chocolate-cake.jpg",
    shipping_cost: 5.99,
    description: "Indulge in the richness of this deluxe chocolate cake.",
    alt_description: "A delicious chocolate cake",
  },
  {
    id: 2,
    name: "Gourmet Pizza",
    price: 19.99,
    category: "food",
    image_url: "https://example.com/food/gourmet-pizza.jpg",
    shipping_cost: 3.49,
    description: "Savor the flavors of this gourmet pizza with premium toppings.",
    alt_description: "A mouth-watering gourmet pizza",
  },
  // ... Repeat the pattern for 8 more food items

  // Stationery Category
  {
    id: 11,
    name: "Luxury Fountain Pen",
    price: 49.99,
    category: "stationery",
    image_url: "https://example.com/stationery/fountain-pen.jpg",
    shipping_cost: 5.99,
    description: "Write in style with this luxury fountain pen.",
    alt_description: "A high-quality fountain pen",
  },
  {
    id: 12,
    name: "Designer Notebook Set",
    price: 29.99,
    category: "stationery",
    image_url: "https://example.com/stationery/designer-notebooks.jpg",
    shipping_cost: 4.99,
    description: "Record your thoughts in these beautifully designed notebooks.",
    alt_description: "A set of designer notebooks",
  },

  // Clothes Category
  {
    id: 21,
    name: "Casual Cotton T-Shirt",
    price: 24.99,
    category: "clothes",
    image_url: "https://example.com/clothes/cotton-tshirt.jpg",
    shipping_cost: 4.99,
    description: "Stay comfortable in this casual cotton t-shirt.",
    alt_description: "A comfortable cotton t-shirt",
  },
  {
    id: 22,
    name: "Formal Men's Suit",
    price: 149.99,
    category: "clothes",
    image_url: "https://example.com/clothes/formal-suit.jpg",
    shipping_cost: 12.99,
    description: "Look sharp in this elegant formal men's suit.",
    alt_description: "A sophisticated formal suit",
  },

  {
    id: 31,
    name: "Classic Chess Set",
    price: 34.99,
    category: "board games",
    image_url: "https://example.com/boardgames/chess-set.jpg",
    shipping_cost: 7.99,
    description: "Engage in a timeless game of strategy with this classic chess set.",
    alt_description: "A classic chess set",
  },
  {
    id: 32,
    name: "Adventure Board Game",
    price: 44.99,
    category: "board games",
    image_url: "https://example.com/boardgames/adventure-game.jpg",
    shipping_cost: 9.99,
    description: "Embark on an exciting adventure with this thrilling board game.",
    alt_description: "An adventurous board game",
  }
];