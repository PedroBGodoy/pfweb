import styles from "../styles/product-card.module.css";
import Link from "next/link";
import AddToCartBtn from "./buy-btn";

interface ItemCardProps {
  productId: number;
  productName: string;
  productPrice: number;
}

const ItemCard = (props: ItemCardProps) => {
  return (
    <div className={styles.card}>
      <Link href={`/product/${props.productId}`} passHref>
        <div className={styles.body}>
          <h2>{props.productName}</h2>
          <p>R$ {props.productPrice}</p>
        </div>
      </Link>
      <AddToCartBtn
        product={{
          id: props.productId,
          name: props.productName,
          price: props.productPrice,
        }}
      />
    </div>
  );
};

export default ItemCard;
