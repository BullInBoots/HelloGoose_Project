import { ProductType } from "../../src/types/ProductType";

export const mockUpProduct: ProductType[] = [
  // Food Category
  {
    id: 2,
    name: "Pad Krapow Gai",
    price: 45,
    category: "food",
    image_url: "/images/2_food.jpeg",
    shipping_cost: 0,
    description:
      "Stir-fried chicken, basil leaves, garlic, chili, soy sauce, and served over steamed jasmine rice.",
    alt_description: "Include soy sauce, and fish sauce ",
  },
  {
    id: 3,
    name: "Pad Thai",
    price: 50,
    category: "food",
    image_url: "/images/3_food.jpeg",
    shipping_cost: 10,
    description:
      "Stir-fried rice noodles with tofu, shrimp, eggs, bean sprouts, peanuts, and a tamarind-based sauce.",
    alt_description: "Include peanuts, shellfish, shrimp, and eggs.",
  },
  {
    id: 4,
    name: "Macarons",
    price: 50,
    category: "food",
    image_url: "/images/4_food.jpeg",
    shipping_cost: 20,
    description:
      "Colorful sandwich cookies made with almond flour, egg whites, and filled with ganache, buttercream, or jam.",
    alt_description:
      "Include nuts (almond flour), eggs, and dairy in the filling.",
  },
  {
    id: 5,
    name: "Banoffee Pie",
    price: 30,
    category: "food",
    image_url: "/images/5_food.jpeg",
    shipping_cost: 5,
    description:
      "A pie with a biscuit base, layers of caramel, sliced bananas, whipped cream, and chocolate shavings.",
    alt_description: "Include wheat, whipped cream, and nuts.",
  },
  {
    id: 6,
    name: "Shoyu Ramen",
    price: 70,
    category: "food",
    image_url: "/images/6_food.jpeg",
    shipping_cost: 4,
    description:
      "A Japanese noodle soup featuring soy sauce-infused broth with wheat noodles and various toppings.",
    alt_description:
      "Include wheat in noodles and soy in the soy sauce-based broth.",
  },
  {
    id: 7,
    name: "Shrimp Fried Rice",
    price: 60,
    category: "food",
    image_url: "/images/7_food.jpeg",
    shipping_cost: 5,
    description:
      "Stir-fried rice cooked with shrimp, vegetables, and seasonings. ",
    alt_description:
      "Include shellfish (shrimp) and potential allergens in the soy sauce.",
  },
  {
    id: 8,
    name: "Nam Tok Noodles",
    price: 20,
    category: "food",
    image_url: "/images/8_food.jpeg",
    shipping_cost: 4,
    description:
      "A flavorful noodle soup with pork or beef, often served with bean sprouts, herbs, and spices.",
    alt_description:
      "Include gluten in noodles and potential allergens in seasonings.",
  },

  // Stationery Category
  {
    id: 11,
    name: "ZENITH Desk staplers 500 – Black",
    price: 369,
    category: "stationery",
    image_url: "/images/11_stationery.jpeg",
    shipping_cost: 0,
    description: "Metal base and body with rubberized anti-scratch feet",
  },
  {
    id: 12,
    name: "Neo Calculator 2218T-12 Silver",
    price: 149,
    category: "stationery",
    image_url: "/images/12_stationery.jpeg",
    shipping_cost: 0,
    description: "Big 12 digits LCD displaying screen",
  },
  {
    id: 13,
    name: "STAEDTLER Pastel Color Highlighter",
    price: 20,
    category: "stationery",
    image_url: "/images/13_stationery.jpeg",
    shipping_cost: 0,
    description: "10 different color",
  },
  {
    id: 14,
    name: "Faber-Castell Colours Pencil",
    price: 489,
    category: "stationery",
    image_url: "/images/14_stationery.jpeg",
    shipping_cost: 4,
    description:
      "48 Colour Grip colour pencils, 1 brush, 1 Grip graphite pencil, 1 sharpener",
  },
  {
    id: 15,
    name: "Pentel Eraser",
    price: 14,
    category: "stationery",
    image_url: "/images/15_stationery.jpeg",
    shipping_cost: 5,
    description:
      "Delivering practically clean, residue-free erasing and leaving no stain on paper.",
  },
  {
    id: 16,
    name: "Hello Kitty Scheduling Memo Pad Set",
    price: 259,
    category: "stationery",
    image_url: "/images/16_stationery.jpeg",
    shipping_cost: 5,
    description:
      "With various sections for notes, lists, or even drawings, it’s easy to stay inspired and stay on task!",
  },
  {
    id: 17,
    name: "Dual-Zippered Pencil Case",
    price: 29,
    category: "stationery",
    image_url: "/images/17_stationery.jpeg",
    shipping_cost: 4,
    description:
      "Discover the perfect blend of style and organization with the Classic Dual-Zippered Pencil Case.",
  },
  {
    id: 18,
    name: "ONE Sticky Note",
    price: 29,
    category: "stationery",
    image_url: "/images/18_stationery.jpeg",
    shipping_cost: 2,
    description: "Neon colours paper memo pads",
  },
  // Clothes Category
  {
    id: 21,
    name: "RALPH LAUREN - Jersey Crewneck T-Shirt (All Fits)",
    price: 1990.0,
    category: "clothes",
    image_url:
      "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-1279326_lifestyle?$rl_df_zoom_lif$",
    shipping_cost: 27.0,
    description:
      "Washed for a perfectly broken-in look and feel, this cotton T-shirt is a Polo essential you’ll reach for again and again.",
    alt_description: "100% cotton. Machine washable. Imported. t-shirt",
  },
  {
    id: 22,
    name: "RALPH LAUREN - The Iconic Mesh Polo Shirt (All Fits)",
    price: 3890.0,
    category: "clothes",
    image_url:
      "https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-1266689_lifestyle?$rl_df_zoom_lif$",
    shipping_cost: 27.0,
    description:
      "An American style standard since 1972, the Polo shirt has been imitated but never matched. Over the decades, Ralph Lauren has reimagined his signature style in a wide array of colors and fits, yet all retain the quality and attention to detail of the iconic original. This relaxed version is made with our highly breathable cotton mesh, which offers a textured look and a soft feel.",
    alt_description: "100% cotton. Machine washable. Imported.",
  },
  {
    id: 23,
    name: "STÜSSY - Small Stock Tee Pigment Dyed",
    price: 1590.0,
    category: "clothes",
    image_url:
      "https://www.stussy.com/cdn/shop/products/1904993_BLAC_1_fd184b49-e292-4482-9bab-39894678af17.jpg?v=1698331659",
    shipping_cost: 27.0,
    description:
      "Shortsleeve pigment dyed tee. This garment has been individually dyed, producing a one-of-a-kind result. Color may fade or bleed after wash.",
    alt_description: "Oversized fit. 100% cotton. Imported.",
  },
  {
    id: 24,
    name: "STÜSSY - BASIC STÜSSY TEE",
    price: 1590.0,
    category: "clothes",
    image_url:
      "https://www.stussy.com/cdn/shop/products/1904870_WHIT_1_a6bca6f7-2702-40e9-b074-1ce8055413f8.jpg?v=1698331630",
    shipping_cost: 27.0,
    description:
      "Shortsleeve crewneck tee. This garment has been individually dyed, producing a one-of-a-kind result. Color may fade or bleed after wash.",
    alt_description: "Oversized fit. 100% cotton. Imported.",
  },
  {
    id: 25,
    name: "ESSENTIALS - Essentials Tee",
    price: 1590.0,
    category: "clothes",
    image_url:
      "https://fearofgod.com/cdn/shop/files/125BT232002F_ESSENTIALS_TEE_SILVER_CLOUD_1_1920x.jpg?v=1696878298",
    shipping_cost: 25.0,
    description:
      "The Essentials tee shirt returns to a classic crew neckline while maintaining the relaxed proportions in the body and sleeves. The Essentials Fear of God logo is sized subtly in a rubberized soft-touch applique. A Fear of God rubberized label is at the back collar.",
    alt_description: "ALL SALES OF THIS ITEM ARE FINAL.",
  },
  {
    id: 26,
    name: "ESSENTIALS - Essentials Crewneck",
    price: 3190.0,
    category: "clothes",
    image_url:
      "https://fearofgod.com/cdn/shop/files/192BT232042F_ESSENTIALS_CREWNECK_SILVER_CLOUD_1_1920x.jpg?v=1697130554",
    shipping_cost: 25.0,
    description:
      "The Essentials crewneck returns to a classic crew neckline while maintaining the relaxed proportions in the body and sleeves. Side seam pockets offer functionality. The Essentials Fear of God logo is sized subtly at the center front in a rubberized soft-touch applique. A Fear of God rubberized label is at the back collar.",
    alt_description: "ALL SALES OF THIS ITEM ARE FINAL.",
  },
  {
    id: 27,
    name: "ESSENTIALS - Essentials Hoodie",
    price: 3290.0,
    category: "clothes",
    image_url:
      "https://fearofgod.com/cdn/shop/files/hh85rplvchmdq39yrllp_1920x.jpg?v=1696549350",
    shipping_cost: 25.0,
    description:
      "The Essentials hoodie provides volume in the body and sleeves with the intent of creating a soft, round, cropped silhouette. A mock neckline and side seam pockets to provide functionality. The Essentials Fear of God logo is sized subtly at the center front in a rubberized soft-touch applique, and a Fear of God rubberized label is on the hood.",
    alt_description: "ALL SALES OF THIS ITEM ARE FINAL.",
  },
  {
    id: 28,
    name: "ESSENTIALS - Cable Knit Hoodie",
    price: 5690.0,
    category: "clothes",
    image_url:
      "https://fearofgod.com/cdn/shop/files/voxappusmuxpnsftzywv_1920x.jpg?v=1696615118",
    shipping_cost: 25.0,
    description:
      "The Essentials hoodie is elevated in a cable knit to provide appealing softness, body, and texture. A double-layered hood and knitted cuffs frame the piece. A Fear of God rubberized label is on the center of the hood.",
    alt_description: "ALL SALES OF THIS ITEM ARE FINAL.",
  },

  //Boardgames Category
  {
    id: 31,
    name: "HEROQUEST FROZEN HORROR EXPANSION",
    price: 1090.0,
    category: "boardgame",
    image_url:
      "https://cdn.zatu.com/wp-content/uploads/2022/07/17013033/ZHAS-F5815.jpg",
    shipping_cost: 29.0,
    description:
      "Returning to the already vast story of Heroquest, The Frozen Horror quest pack expands further and introduces a new icy nemesis to confront; The Frozen Horror. After bursting forth from its icy tomb and rallying its allies, it now aims to enclose the Northlands in a shroud of deadly ice. ",
    alt_description: "2-5 players.",
  },
  {
    id: 32,
    name: "GUESS WHO HARRY POTTER",
    price: 390.0,
    category: "boardgame",
    image_url:
      "https://cdn.zatu.com/wp-content/uploads/2022/04/17034750/TWMV-WM02286-EN1-6.jpg",
    shipping_cost: 29.0,
    description:
      "Accio! We’ve summoned the famous game of deduction, ‘Guess Who?’, to Hogwarts! Use your knowledge of the Wizarding World to guess which character your opponent has hidden away – without the use of magic!",
    alt_description: "2 players.",
  },
  {
    id: 33,
    name: "UNMATCHED: DR SATTLER VS T-REX",
    price: 790.0,
    category: "boardgame",
    image_url:
      "https://cdn.zatu.com/wp-content/uploads/2022/07/17015252/Unmatched-Dr-Sattler-vs-T-Rex.jpg",
    shipping_cost: 29.0,
    description:
      "Unmatched is a highly asymmetrical miniature fighting game for two or four players. Each hero is represented by a unique deck designed to evoke their style and legend. Tactical movement and no-luck combat resolution create a unique play experience that rewards expertise, but just when you've mastered one set, new heroes arrive to provide all new match-ups.",
    alt_description: "2-5 players.",
  },
  {
    id: 34,
    name: "CARCASSONNE EXPANSION 1: INNS & CATHEDRALS",
    price: 590.0,
    category: "boardgame",
    image_url:
      "https://cdn.zatu.com/wp-content/uploads/2016/08/18034040/Carcassonne-Expansion-1-Inns-Cathedrals-1.jpg",
    shipping_cost: 29.0,
    description:
      "Carcassonne: Inns &amp; Cathedrals is the first expansion set (of many) for the phenomenon tile-laying modern classic that is Carcassonne. We should mention straight away that in order to play Inns & Cathedrals, you’ll need a copy of the base game of Carcassonne – this is not a standalone title.",
    alt_description: "2-6 players.",
  },
  {
    id: 35,
    name: "PANDEMIC (2013)",
    price: 790.0,
    category: "boardgame",
    image_url:
      "https://cdn.zatu.com/wp-content/uploads/2016/08/18034001/Pandemic-2013.jpg",
    shipping_cost: 29.0,
    description:
      "In Pandemic, a game for 2-4 players, you will take on the role of one of seven different disease-fighting specialists, each with a unique skill that will come in handy when tackling four of the most deadly diseases ever known to man.",
    alt_description: "2-4 players.",
  },
  {
    id: 36,
    name: "HEROQUEST",
    price: 2790.0,
    category: "boardgame",
    image_url:
      "https://cdn.zatu.com/wp-content/uploads/2021/11/17060317/ZBG-HASF2847UU0_FRONT.jpg",
    shipping_cost: 29.0,
    description:
      "HeroQuest is a role-playing adventure game designed by Stephen Baker. One player takes on the role of game master and evil sorcerer, Zargon, while up to four other players choose from a selection of characters: Barbarian, Wizard, Elf, and Dwarf.",
    alt_description: "2-5 players.",
  },
  {
    id: 37,
    name: "UNMATCHED: MARVEL HELL’S KITCHEN",
    price: 1090.0,
    category: "boardgame",
    image_url:
      "https://cdn.zatu.com/wp-content/uploads/2022/04/17035606/Unmatched-Marvel-Hell%C2%92s-KitchenUnmatched-Marvel-Hell%C2%92s-Kitchen-Back.jpg",
    shipping_cost: 29.0,
    description:
      "In battle, there are no equals. Unmatched is the critically acclaimed, best-selling game of tactical combat between unlikely opponents. Unmatched: Hell's Kitchen is a stand-alone expansion for the Unmatched system, featuring three characters from the Marvel comics universe: Daredevil, Elektra, and Bullseye.",
    alt_description: "2-3 players",
  },
  {
    id: 38,
    name: "MONOPOLY",
    price: 490.0,
    category: "boardgame",
    image_url:
      "https://cdn.zatu.com/wp-content/uploads/2021/04/17194321/Monopoly.jpg",
    shipping_cost: 29.0,
    description:
      "Monopoly is one of the most well-known board games in existence! The original version got published by Waddingtons in 1933, but this edition comes from Hasbro. The aim of Monopoly is simple: enter the property market in London, and be the last player standing! The last player remaining that has money left gets crowned the winner.",
    alt_description: "2-8 players",
  },
];