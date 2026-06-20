import { createContext, useReducer } from "react";

export const CartContext = createContext();

const initialState = {
  cart: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    case "REMOVE":
      return {
        ...state,
        cart: state.cart.filter(
          (item) => item.id !== action.payload
        ),
      };

    default:
      return state;
  }
}

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(
    reducer,
    initialState
  );

  const addToCart = (product) => {
    dispatch({
      type: "ADD",
      payload: product,
    });
  };

  const removeFromCart = (id) => {
    dispatch({
      type: "REMOVE",
      payload: id,
    });
  };

  const totalPrice = state.cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        addToCart,
        removeFromCart,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;