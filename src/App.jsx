import React, { useMemo, useState } from "react";
import productsData from "./productsData";
import Product3D from "./Product3D";
import CartDrawer from "./CartDrawer";

const formatNaira = (value) => new Intl.NumberFormat("en-NG", {style:"currency",currency:"NGN",minimumFractionDigits:0,maximumFractionDigits:0}).format(value);
const whatsapp = "https://wa.me/2349051829649?text=" + encodeURIComponent("Hello Tiana's Variety Shop, I'd like to ask about your products and how to place an order.");

export default function App() {
  const [category, setCategory] = useState("All");
  const [cart, setCart] = useState([]);
  const [bagOpen, setBagOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const categories = useMemo(() => ["All", ...new Set(productsData.map(p => p.category))], []);
  const products = category === "All" ? productsData : productsData.filter(p => p.category === category);
  const count = cart.reduce((s,i)=>s+i.quantity,0);

  const addToCart = product => {
    setCart(current => current.some(i=>i.id===product.id) ? current.map(i=>i.id===product.id?{...i,quantity:i.quantity+1}:i) : [...current,{...product,quantity:1}]);
    setSelected(null); setBagOpen(true);
  };

  return <div className="site-shell">
    <div className="announcement">✨ GREAT PRODUCTS. BETTER PRICES. <span>SHOP WITH CONFIDENCE.</span></div>
    <header className="header">
      <a href="#top" className="brand"><img src="/images/tianas-logo.png" alt="Tiana's Variety Shop logo"/><span><b>Tiana's</b><small>VARIETY SHOP</small></span></a>
      <nav>{["Home","Shop","About","How It Works","Contact"].map((x,i)=><a key={x} href={i===1?"#shop":`#${x.toLowerCase().replaceAll(" ","-")}`}>{x}</a>)}</nav>
      <div className="header-actions"><a className="wa-outline" href={whatsapp} target="_blank" rel="noreferrer">💬 Chat on WhatsApp</a><button className="bag-btn" onClick={()=>setBagOpen(true)}>🛍️ <span>{count}</span></button></div>
    </header>

    <main id="top">
      <section className="hero">
        <div className="hero-copy"><span className="eyebrow">TRENDY · AFFORDABLE · RELIABLE</span><h1>Good products<br/><em>shouldn't have to</em><br/>cost a fortune.</h1><p>Quality products at affordable prices — from fashion and gadgets to beauty, jewelry, home essentials and more.</p><div className="hero-actions"><a href="#shop" className="gold-btn">Shop now <span>→</span></a><a href={whatsapp} target="_blank" rel="noreferrer" className="text-btn">Order directly on WhatsApp</a></div><div className="hero-note"><span>✓</span> Direct ordering · Lagos, Nigeria</div></div>
        <div className="hero-visual"><div className="glow"></div><div className="hero-card"><img src="/images/hero-woman.jpg" alt="Tiana's Variety Shop lifestyle"/><div className="hero-badge"><b>20</b><span>featured<br/>finds</span></div></div><div className="floating-pill">Why pay more<br/><strong>when you can save more?</strong></div></div>
      </section>

      <section className="features"><div>✦ <b>Quality Products</b><small>Products you can trust</small></div><div>₦ <b>Affordable Prices</b><small>Great value, always</small></div><div>⚡ <b>Easy Ordering</b><small>Direct via WhatsApp</small></div><div>♥ <b>Customer Care</b><small>We are here to help</small></div></section>

      <section className="shop-section" id="shop"><div className="section-head"><div><span className="eyebrow">FEATURED FINDS</span><h2>Shop the collection</h2></div><span className="count-label">{products.length} products</span></div><div className="filters">{categories.map(c=><button key={c} onClick={()=>setCategory(c)} className={category===c?"active":""}>{c}</button>)}</div><div className="product-grid">{products.map(p=><Product3D key={p.id} product={p} onSelect={setSelected}/>)}</div></section>

      <section className="about" id="about"><div className="about-image"><img src="/images/hero-woman.jpg" alt="Tiana's Variety Shop"/></div><div className="about-copy"><span className="eyebrow">ABOUT TIANA'S</span><h2>More than just a shop — <em>it's a lifestyle.</em></h2><p>At Tiana's Variety Shop, we bring you useful, stylish and affordable products in one convenient place. Browse what catches your eye, then chat with us directly on WhatsApp to confirm price and availability.</p><a href={whatsapp} target="_blank" rel="noreferrer" className="gold-btn">Chat with us →</a></div></section>

      <section className="how" id="how-it-works"><div className="section-head center"><div><span className="eyebrow">HOW ORDERING WORKS</span><h2>Simple from start to finish</h2></div></div><div className="steps"><div><i>1</i><h3>Choose your items</h3><p>Browse the collection and pick what you like.</p></div><div><i>2</i><h3>Chat on WhatsApp</h3><p>Send us the products you want to order.</p></div><div><i>3</i><h3>Confirm details</h3><p>We confirm availability, price and total cost.</p></div><div><i>4</i><h3>Receive your order</h3><p>We arrange the next steps with you.</p></div></div></section>

      <section className="contact" id="contact"><div><span className="eyebrow">READY TO SHOP?</span><h2>Let's make your next find easy.</h2><p>Have a product in mind? Send us a WhatsApp message and we'll help you check it.</p></div><a href={whatsapp} target="_blank" rel="noreferrer" className="gold-btn">💬 Chat on WhatsApp</a></section>
    </main>

    <footer><div className="footer-brand"><img src="/images/tianas-logo.png" alt=""/><div><b>Tiana's Variety Shop</b><span>Why pay more when you can save more?</span></div></div><div className="footer-contact"><span>📱 0905 182 9649</span><span>📍 Lagos, Nigeria</span></div><div className="copyright">© 2026 Tiana's Variety Shop</div></footer>

    {selected && <div className="modal-backdrop show" onClick={()=>setSelected(null)}><div className="product-modal" onClick={e=>e.stopPropagation()}><button className="modal-close" onClick={()=>setSelected(null)}>×</button><img src={selected.image} alt={selected.name}/><div><span className="eyebrow">{selected.category}</span><h2>{selected.name}</h2><p>{selected.description}</p><strong className="modal-price">{formatNaira(selected.price)}</strong><button className="gold-btn wide" onClick={()=>addToCart(selected)}>Add to bag →</button></div></div></div>}
    <CartDrawer cart={cart} setCart={setCart} isOpen={bagOpen} setIsOpen={setBagOpen}/>
  </div>;
}