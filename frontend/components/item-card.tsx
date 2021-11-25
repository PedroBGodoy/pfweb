import { useCartContext } from "../provider/cart.provider";
import styles from "../styles/Home.module.css";

interface ItemCardProps {
  productId: number;
  productName: string;
  productPrice: number;
}

const ItemCard = (props: ItemCardProps) => {
  const cart = useCartContext();

  const addToCart = () => {
    cart.addProduct({
      id: props.productId,
    });
  };

  return (
    <div className={styles.card}>
      <h2>{props.productName}</h2>
      <p>R$ {props.productPrice}</p>
      <button className={styles.add_btn} onClick={addToCart}>
        COMPRAR
      </button>
    </div>
  );
};

export default ItemCard;
