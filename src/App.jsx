import { useState } from "react";
import "./App.css";
import heroImg from "./assets/hero.png";

// ---------------- PRODUCT DATA ----------------
const products = [
  { id: 1, name: "Cappuccino", price: 150, image: heroImg },
  { id: 2, name: "Cold Brew", price: 180, image: heroImg },
  { id: 3, name: "Veg Sandwich", price: 120, image: heroImg },
  { id: 4, name: "Chicken Burger", price: 220, image: heroImg },
  { id: 5, name: "French Fries", price: 90, image: heroImg },
  { id: 6, name: "Chocolate Muffin", price: 100, image: heroImg },
];

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  // ---------------- CART FUNCTIONS ----------------

  // Add a product to the cart, or increase its quantity if already present
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);

      if (existingItem) {
        // Product already in cart -> increase quantity
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      // New product -> add with quantity 1
      return [...prevCart, { ...product, quantity: 1 }];
    });

    setIsCartOpen(true);
  };

  // Generic updater: change quantity by a given amount (+1 or -1)
  const updateCart = (id, amount) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + amount } : item
        )
        .filter((item) => item.quantity > 0); // remove if quantity hits 0
    });
  };

  const increaseQuantity = (id) => {
    updateCart(id, 1);
  };

  const decreaseQuantity = (id) => {
    updateCart(id, -1);
  };

  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Total number of items (for the cart badge)
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  // Total price of all items in cart
  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const checkout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty. Add items before checking out.");
      return;
    }

    // Simulate placing the order
    setOrderConfirmed(true);
    setCart([]);

    // Hide confirmation message after a few seconds
    setTimeout(() => setOrderConfirmed(false), 3000);
  };

  return (
    <div className="app">
      {/* ---------------- HEADER ---------------- */}
      <header className="header">
        <h1 className="logo">Food Cafe</h1>
        <button className="cart-toggle-btn" onClick={() => setIsCartOpen(true)}>
          🛒 Cart
          {cartItemCount > 0 && (
            <span className="cart-badge">{cartItemCount}</span>
          )}
        </button>
      </header>

      {/* ---------------- PRODUCT GRID ---------------- */}
      <main className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} className="product-img" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">₹{product.price}</p>
            <button
              className="add-to-cart-btn"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </main>

      {/* ---------------- CART OVERLAY ---------------- */}
      {isCartOpen && (
        <div className="cart-overlay" onClick={() => setIsCartOpen(false)}></div>
      )}

      {/* ---------------- CART SIDEBAR ---------------- */}
      <aside className={`cart-sidebar ${isCartOpen ? "open" : ""}`}>
        <div className="cart-header">
          <h2>Your Cart</h2>
          <button className="close-cart-btn" onClick={() => setIsCartOpen(false)}>
            ✕
          </button>
        </div>

        <div className="cart-body">
          {cart.length === 0 ? (
            <p className="empty-cart-msg">Your cart is empty 🛒</p>
          ) : (
            cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} className="cart-item-img" />
                <div className="cart-item-details">
                  <h4>{item.name}</h4>
                  <p>₹{item.price}</p>

                  <div className="quantity-controls">
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                  </div>
                </div>
                <button
                  className="remove-btn"
                  onClick={() => removeItem(item.id)}
                >
                  🗑
                </button>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Total:</span>
              <span>₹{cartTotal}</span>
            </div>
            <button className="place-order-btn" onClick={checkout}>
              Place Order
            </button>
          </div>
        )}
      </aside>

      {/* ---------------- ORDER CONFIRMATION ---------------- */}
      {orderConfirmed && (
        <div className="order-confirmation">
          ✅ Order placed successfully! Thank you for ordering.
        </div>
      )}
    </div>
  );
}

export default App;