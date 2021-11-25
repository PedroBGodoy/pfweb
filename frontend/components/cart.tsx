import styles from "../styles/Home.module.css";
import { useCartContext } from "../provider/cart.provider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Cart = () => {
  const cart = useCartContext();

  if (cart.products && cart.products.length > 0) {
    return (
      <div className={styles.cart}>
        <FontAwesomeIcon icon="shopping-cart" size="lg" />
        <span>{cart.products?.length}</span>
      </div>
    );
  } else {
    return <></>;
  }
};

export default Cart;
