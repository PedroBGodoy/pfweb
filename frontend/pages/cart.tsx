import { useCartContext } from "../provider/cart.provider";

const CartPage = () => {
  const cart = useCartContext();

  return <h1>Cart itens: {cart.products?.length || 0}</h1>;
};

export default CartPage;
