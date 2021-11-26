import { useEffect, useState } from "react";
import { useCartContext } from "../provider/cart.provider";
import CartList from "../components/Cart/CartList";
import placeOrder from "../lib/api/order/place-order";
import Router from "next/router";

const CartPage = () => {
  const { products } = useCartContext();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let total = 0;
    products.forEach((p) => (total += p.price));
    setTotal(total);
  }, [products]);

  const finalizarCompra = async () => {
    const { code } = await placeOrder({
      cpf: "778.278.412-36",
      items: products.map((p) => ({
        idItem: p.id,
        quantity: 1,
      })),
    });
    Router.push(`/order-result?orderId=${code}`);
  };

  return (
    <div>
      <CartList />
      <div>
        Total:{" "}
        {total.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </div>
      <button onClick={finalizarCompra}>Finalizar Compra</button>
    </div>
  );
};

export default CartPage;
