import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import {
  selectCartItems,
  selectCartTotalPrice,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../../redux/cartSlice";
import "./Cart.css";

const Cart = () => {
  const items = useSelector(selectCartItems);
  const totalPrice = useSelector(selectCartTotalPrice);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (items.length === 0) {
    return (
      <div>
        <Navbar />
        <main className="cart-page cart-empty">
          <h1>Your cart is empty</h1>
          <Link to="/products" className="cart-shop-link">
            Continue Shopping
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <main className="cart-page">
        <h1>Your Cart</h1>

        <div className="cart-list">
          {items.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />

              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p className="cart-item-price">₹{item.price.toLocaleString("en-IN")}</p>

                <div className="cart-item-qty">
                  <button onClick={() => dispatch(decreaseQuantity(item.id))}>−</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                </div>
              </div>

              <div className="cart-item-right">
                <p className="cart-item-subtotal">
                  ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                </p>
                <button
                  className="cart-item-remove"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <div className="cart-summary-total">
            <span>Total</span>
            <span>₹{totalPrice.toLocaleString("en-IN")}</span>
          </div>
          <button className="cart-checkout-btn" onClick={() => navigate("/checkout")}>
            Proceed to Checkout
          </button>
        </div>
      </main>
    </div>
  );
};

export default Cart;
