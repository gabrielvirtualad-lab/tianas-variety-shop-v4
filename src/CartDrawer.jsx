import React from "react";

const formatNaira = (value) => new Intl.NumberFormat("en-NG", {style:"currency",currency:"NGN",minimumFractionDigits:0,maximumFractionDigits:0}).format(value);

export default function CartDrawer({ cart, setCart, isOpen, setIsOpen }) {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const changeQty = (id, delta) => setCart(current => current.map(item => item.id === id ? {...item, quantity: Math.max(1, item.quantity + delta)} : item));
  const remove = id => setCart(current => current.filter(item => item.id !== id));
  const checkout = () => {
    const lines = cart.map(item => `• ${item.name} × ${item.quantity} — ${formatNaira(item.price * item.quantity)}`).join("\n");
    const text = `Hello Tiana's Variety Shop, I'd like to place an order.\n\n${lines}\n\nTotal: ${formatNaira(subtotal)}`;
    window.open(`https://wa.me/2349051829649?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  };

  return <>
    <div className={`drawer-backdrop ${isOpen ? "show" : ""}`} onClick={() => setIsOpen(false)} />
    <aside className={`cart-drawer ${isOpen ? "open" : ""}`} aria-hidden={!isOpen}>
      <div className="drawer-head"><div><span className="eyebrow">YOUR BAG</span><h2>Shopping bag</h2><p>{totalItems} {totalItems === 1 ? "item" : "items"}</p></div><button onClick={() => setIsOpen(false)} className="icon-btn">×</button></div>
      <div className="drawer-body">
        {cart.length === 0 ? <div className="empty-cart"><div>🛍️</div><h3>Your bag is empty</h3><p>Add products from the shop and your order will appear here.</p></div> : cart.map(item => <div className="cart-row" key={item.id}><img src={item.image} alt=""/><div className="cart-info"><h3>{item.name}</h3><strong>{formatNaira(item.price)}</strong><div className="qty"><button onClick={() => changeQty(item.id,-1)}>−</button><span>{item.quantity}</span><button onClick={() => changeQty(item.id,1)}>+</button></div></div><button className="remove" onClick={() => remove(item.id)}>×</button></div>)}
      </div>
      {cart.length > 0 && <div className="drawer-foot"><div className="subtotal"><span>Subtotal</span><strong>{formatNaira(subtotal)}</strong></div><button className="whatsapp-btn" onClick={checkout}>💬 Order via WhatsApp</button><button className="clear-btn" onClick={() => setCart([])}>Clear bag</button></div>}
    </aside>
  </>;
}