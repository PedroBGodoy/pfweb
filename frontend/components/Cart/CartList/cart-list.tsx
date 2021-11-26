import { useCartContext } from "../../../provider/cart.provider";
import styles from "./cart-list.module.css";

const CartList = () => {
  const { products } = useCartContext();

  return (
    <div className={styles.list}>
      <div className={styles.grid}>
        {products?.map((p) => (
          <div key={p.id} className={styles.item}>
            <h2>{p.name}</h2>
            <p>
              {p.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartList;
