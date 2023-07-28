import React from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const { cartItems, subTotal, shipping, tax, total } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();

  const increment = (id) => {
    dispatch({
      type: "addToCart",
      payload: { id },
    });
    dispatch({
      type: "calculatePrice",
    });
  };
  const decrement = (id) => {
    dispatch({
      type: "subtractQuantity",
      payload: { id },
    });
    dispatch({
      type: "calculatePrice",
    });
  };
  const deleteHandler = (id) => {
    dispatch({
      type: "removeToCart",
      payload: { id },
    });

    dispatch({
      type: "calculatePrice",
    });
  };

  return (
    <div className="cart">
      <main>
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <CartItem
              key={index}
              imgSrc={item.imgSrc}
              name={item.name}
              price={item.price}
              id={item.id}
              qty={item.quantity}
              decrement={decrement}
              increment={increment}
              deleteHandler={deleteHandler}
            />
          ))
        ) : (
          <h1>No Items Yet</h1>
        )}
      </main>
      <aside>
        <h2>SubTotal: ${subTotal}</h2>
        <h2>Shipping: ${shipping}</h2>
        <h2>Tax: ${tax}</h2>
        <h2>Total: ${total}</h2>
      </aside>
    </div>
  );
};

const CartItem = ({
  imgSrc,
  name,
  price,
  qty = 1,
  decrement,
  increment,
  deleteHandler,
  id,
}) => {
  return (
    <div className="cart-item">
      <img src={imgSrc} alt={name} />
      <article>
        <h3>{name}</h3>
        <p>${price}</p>
      </article>
      <div>
        <button onClick={() => decrement(id)}>-</button>
        <p>{qty}</p>
        <button onClick={() => increment(id)}>+</button>
      </div>
      <RiDeleteBin6Fill onClick={() => deleteHandler(id)} />
    </div>
  );
};

export default Cart;
