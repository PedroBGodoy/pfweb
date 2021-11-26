import styles from "../styles/cart.module.css";
import { useCartContext } from "../provider/cart.provider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const CartComponent = () => {
  const cart = useCartContext();

  if (cart.products && cart.products.length > 0) {
    return (
      <Link href="/cart" passHref>
        <div className={styles.cart}>
          <FontAwesomeIcon icon="shopping-cart" size="lg" />
          <span>{cart.products?.length}</span>
        </div>
      </Link>
    );
  } else {
    return <></>;
  }
};

export default CartComponent;
