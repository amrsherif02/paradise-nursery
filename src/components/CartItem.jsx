import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
increaseQuantity,
decreaseQuantity,
removeFromCart,
} from '../redux/CartSlice';

function CartItem() {
const dispatch = useDispatch();
const cartItems = useSelector((state) => state.cart.items);

const totalAmount = cartItems.reduce(
(total, item) => total + item.price * item.quantity,
0
);

return ( <div className="cart-page"> <h1>Your Shopping Cart</h1>

```
  {cartItems.length === 0 ? (
    <div className="empty-cart">
      <h2>Your cart is empty</h2>
      <p>Discover our beautiful collection of houseplants!</p>
      <Link to="/plants" className="continue-shopping-button">
        Continue Shopping
      </Link>
    </div>
  ) : (
    <>
      {cartItems.map((item) => (
        <div className="cart-item" key={item.id}>
          <img src={item.image} alt={item.name} />

          <div className="cart-item-details">
            <h2>{item.name}</h2>
            <p>Price: ${item.price.toFixed(2)}</p>
            <p>
              Subtotal: ${(item.price * item.quantity).toFixed(2)}
            </p>

            <button
              onClick={() => dispatch(decreaseQuantity(item.id))}
              disabled={item.quantity <= 1}
            >
              −
            </button>

            <span> {item.quantity} </span>

            <button
              onClick={() => dispatch(increaseQuantity(item.id))}
            >
              +
            </button>

            <button
              onClick={() => dispatch(removeFromCart(item.id))}
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <div className="cart-summary">
        <h2>Total: ${totalAmount.toFixed(2)}</h2>

        <button onClick={() => window.alert('Coming Soon')}>
          Checkout
        </button>

        <Link to="/plants" className="continue-shopping-button">
          Continue Shopping
        </Link>
      </div>
    </>
  )}
</div>


);
}

export default CartItem;
