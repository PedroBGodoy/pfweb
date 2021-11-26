import { useCartContext } from "../provider/cart.provider";
import styles from "../styles/buy_btn.module.css";

interface AddToCartProps {
  product: {
    id: number;
    name: string;
    price: number;
  };
}

const AddToCartBtn = (props: AddToCartProps) => {
  const cart = useCartContext();

  const addToCart = () => {
    cart.addProduct({
      id: props.product.id,
      name: props.product.name,
      price: props.product.price,
    });
  };

  return (
    <button className={styles.add_btn} onClick={addToCart}>
      COMPRAR
    </button>
  );
};

export default AddToCartBtn;
