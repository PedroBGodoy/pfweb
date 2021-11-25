import { useCartContext } from "../provider/cart.provider";

const Cart = () => {
  const cart = useCartContext();

  return <h1>Cart itens: {cart.products?.length}</h1>;
};

export default Cart;
