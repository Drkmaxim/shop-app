import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import {
  selectCartItems,
  selectCartTotalPrice,
  clearCart,
} from "../../redux/cartSlice";
import "./Checkout.css";

const initialAddress = {
  fullName: "",
  phone: "",
  addressLine1: "",
  addressLine2: "",
  city: "",
  state: "",
  pincode: "",
};

const Checkout = () => {
  const items = useSelector(selectCartItems);
  const totalPrice = useSelector(selectCartTotalPrice);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [address, setAddress] = useState(initialAddress);
  const [errors, setErrors] = useState({});
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!address.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!/^\d{10}$/.test(address.phone.trim()))
      newErrors.phone = "Enter a valid 10-digit phone number";
    if (!address.addressLine1.trim())
      newErrors.addressLine1 = "Address is required";
    if (!address.city.trim()) newErrors.city = "City is required";
    if (!address.state.trim()) newErrors.state = "State is required";
    if (!/^\d{6}$/.test(address.pincode.trim()))
      newErrors.pincode = "Enter a valid 6-digit pincode";
    return newErrors;
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    try {
      const orderData = {
        address: {
          fullName: address.fullName.trim(),
          phone: address.phone.trim(),
          addressLine1: address.addressLine1.trim(),
          addressLine2: address.addressLine2.trim(),
          city: address.city.trim(),
          state: address.state.trim(),
          pincode: address.pincode.trim(),
        },

        items: items.map((item) => ({
          id: String(item.id),
          name: item.name,
          price: Number(item.price),
          quantity: Number(item.quantity),
        })),

        totalPrice: Number(totalPrice),
      };
      console.log("Order Data: ", orderData);

      const response = await fetch("http://localhost:3001/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      const message = await response.text();
      let text;
      try {
        text = JSON.parse(message);
      } catch {
        text = {message: message || "Server returned invalid response"};
      }
      console.log("Response: ", text)

      if(!response.ok) {
        throw new Error(text.error || text.message || `Server error ${response.status}`);
      }
    // Order placement logic (API call) can be added here.
      console.log("Placing order:", { address, items, totalPrice });

      setOrderPlaced(true);
      dispatch(clearCart());
    } catch(error) {
    console.error(error);
  }
}
  if (orderPlaced) {
    return (
      <div>
        <Navbar />
        <main className="checkout-page checkout-success">
          <h1>Order Placed!</h1>
          <p>Your order has been placed successfully and will be delivered to:</p>
          <p className="checkout-success-address">
            {address.fullName}, {address.addressLine1}
            {address.addressLine2 ? `, ${address.addressLine2}` : ""}, {address.city},{" "}
            {address.state} - {address.pincode}
          </p>
          <Link to="/products" className="checkout-continue-link">
            Continue Shopping
          </Link>
        </main>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div>
        <Navbar />
        <main className="checkout-page checkout-success">
          <h1>Your cart is empty</h1>
          <Link to="/products" className="checkout-continue-link">
            Browse Products
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <main className="checkout-page">
        <h1>Checkout</h1>

        <div className="checkout-grid">
          <form className="checkout-form" onSubmit={handlePlaceOrder} noValidate>
            <h2>Shipping Address</h2>

            <label>
              Full Name
              <input
                type="text"
                name="fullName"
                value={address.fullName}
                onChange={handleChange}
              />
              {errors.fullName && <span className="checkout-error">{errors.fullName}</span>}
            </label>

            <label>
              Phone Number
              <input
                type="tel"
                name="phone"
                value={address.phone}
                onChange={handleChange}
                placeholder="10-digit mobile number"
              />
              {errors.phone && <span className="checkout-error">{errors.phone}</span>}
            </label>

            <label>
              Address Line 1
              <input
                type="text"
                name="addressLine1"
                value={address.addressLine1}
                onChange={handleChange}
                placeholder="House no., street"
              />
              {errors.addressLine1 && (
                <span className="checkout-error">{errors.addressLine1}</span>
              )}
            </label>

            <label>
              Address Line 2 (optional)
              <input
                type="text"
                name="addressLine2"
                value={address.addressLine2}
                onChange={handleChange}
                placeholder="Landmark, area"
              />
            </label>

            <div className="checkout-form-row">
              <label>
                City
                <input
                  type="text"
                  name="city"
                  value={address.city}
                  onChange={handleChange}
                />
                {errors.city && <span className="checkout-error">{errors.city}</span>}
              </label>

              <label>
                State
                <input
                  type="text"
                  name="state"
                  value={address.state}
                  onChange={handleChange}
                />
                {errors.state && <span className="checkout-error">{errors.state}</span>}
              </label>

              <label>
                Pincode
                <input
                  type="text"
                  name="pincode"
                  value={address.pincode}
                  onChange={handleChange}
                  placeholder="6-digit pincode"
                />
                {errors.pincode && <span className="checkout-error">{errors.pincode}</span>}
              </label>
            </div>

            <button type="submit" className="checkout-place-order-btn">
              Place Order
            </button>
          </form>

          <div className="checkout-summary">
            <h2>Order Summary</h2>
            {items.map((item) => (
              <div key={item.id} className="checkout-summary-item">
                <span>
                  {item.name} × {item.quantity}
                </span>
                <span>₹{(item.price * item.quantity).toLocaleString("en-IN")}</span>
              </div>
            ))}
            <div className="checkout-summary-total">
              <span>Total</span>
              <span>₹{totalPrice.toLocaleString("en-IN")}</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Checkout;
