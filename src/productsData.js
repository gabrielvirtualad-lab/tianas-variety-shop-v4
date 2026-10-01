const img = (id) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=900`;

const productsData = [
  { id: 1, name: "Classic White Sneakers", category: "Fashion", price: 25000, image: img(1598505), description: "Clean everyday sneakers for casual looks." },
  { id: 2, name: "Wireless Earbuds", category: "Gadgets", price: 18000, image: "https://images.unsplash.com/photo-1606741965326-cb990ae01bb2?auto=format&fit=crop&w=900&q=85", description: "Compact wireless earbuds with a charging case." },
  { id: 3, name: "Smart Watch", category: "Gadgets", price: 28000, image: img(437037), description: "A sleek everyday smartwatch for calls and activity tracking." },
  { id: 4, name: "Portable Bluetooth Speaker", category: "Gadgets", price: 22000, image: img(3394650), description: "Portable sound for your room, office or outings." },
  { id: 5, name: "Electric Kettle", category: "Home", price: 20000, image: "https://hongda-technology.com/pic/big/Best-Custom-Wholesale-18L-Stainless-Steel-Electric-Kettle-with-Special-Cover-High-Quality-56-2511105-0.jpg", description: "Fast-boiling stainless steel kettle for everyday use." },
  { id: 6, name: "Mini Handbag", category: "Accessories", price: 18000, image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=900&q=85", description: "A compact handbag that works for everyday outings." },
  { id: 7, name: "Classic Sunglasses", category: "Accessories", price: 12000, image: img(46710), description: "Simple statement sunglasses for a polished look." },
  { id: 8, name: "Travel Backpack", category: "Accessories", price: 24000, image: img(2905238), description: "Practical backpack for school, work and travel." },
  { id: 9, name: "Amber Perfume", category: "Beauty", price: 15000, image: "https://images.unsplash.com/photo-1638295916768-459f6cf440bc?auto=format&fit=crop&w=900&q=85", description: "A warm amber fragrance in a clean glass bottle." },
  { id: 10, name: "Skincare Essentials", category: "Beauty", price: 18000, image: img(2113855), description: "A simple beauty-care set for your daily routine." },
  { id: 11, name: "Hair Dryer", category: "Beauty", price: 22000, image: img(1652361), description: "Compact hair dryer for convenient home styling." },
  { id: 12, name: "Gold-Tone Necklace", category: "Jewelry", price: 10000, image: img(1191531), description: "Elegant gold-tone necklace for everyday styling." },
  { id: 13, name: "Minimal Bracelet", category: "Jewelry", price: 8000, image: img(1458867), description: "Minimal bracelet with a refined everyday finish." },
  { id: 14, name: "Fashion T-Shirt", category: "Fashion", price: 9000, image: img(428338), description: "Comfortable casual tee that pairs with almost anything." },
  { id: 15, name: "Casual Hoodie", category: "Fashion", price: 18000, image: img(3731256), description: "Soft casual hoodie for relaxed everyday wear." },
  { id: 16, name: "Leather Wallet", category: "Accessories", price: 10000, image: img(1152077), description: "Compact wallet for cards, notes and daily essentials." },
  { id: 17, name: "Reusable Water Bottle", category: "Home", price: 7000, image: img(416528), description: "Reusable bottle for school, work and travel." },
  { id: 18, name: "Kitchen Blender", category: "Home", price: 26000, image: img(1084540), description: "Practical blender for smoothies and everyday kitchen tasks." },
  { id: 19, name: "Classic Wristwatch", category: "Jewelry", price: 15000, image: img(190819), description: "Simple wristwatch with a clean, timeless look." },
  { id: 20, name: "Everyday Shopping Tote", category: "Lifestyle", price: 8000, image: img(1306248), description: "Roomy reusable tote for everyday shopping and errands." }
];

export default productsData;