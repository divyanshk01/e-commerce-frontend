import React from 'react';
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducer";
import { makeRequest } from "../../makeRequest";
import {loadStripe} from '@stripe/stripe-js';

const Cart = () => {
  const products = useSelector(state=>state.cart.products);
  const dispatch = useDispatch();
  const totalPrice = ()=>{
    let total = 0;
    products.forEach(item => {
      total += item.quantity * item.price;
    });
    return total.toFixed(2);
  }
  const stripePromise = loadStripe('pk_test_51Oazb7SDeiiVlOUn5xHXrX9YQKebh3kDpLWbKtjRwOezYVvawGfGu1P7PtpnMSw9KpbtiBf4lRW9oZa34s0oVnpz00pCTkfdXV');
  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      console.log(stripe)
      const res = await makeRequest.post("/orders", {
        products,
      });
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });

    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className='cart'>
    <h1>Products in your cart</h1>
      {products?.map((item) => (
        <div className="item" key={item.id}>
          <img src={import.meta.env.REACT_APP_UPLOAD_URL + item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">
              {item.quantity} x ₹{item.price}
            </div>
          </div>
          <DeleteOutlinedIcon
            className="delete"
            onClick={() => dispatch(removeItem(item.id))}
          />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>₹{totalPrice()}</span>
      </div>
      <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
      <span className="reset" onClick={() => dispatch(resetCart())}>
        Reset Cart
      </span>
    </div>
  );
};
export default Cart;
