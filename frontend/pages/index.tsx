import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import ItemCard from "../components/item-card";
import Cart from "../components/cart";

const Home: NextPage = () => {
  const products = [
    {
      id: 1,
      description: "Guitarra",
      price: "1000",
    },
    {
      id: 2,
      description: "Amplificador",
      price: "5000",
    },
    {
      id: 3,
      description: "Cabo",
      price: "30",
    },
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Ecommerce PfWeb</title>
        <meta name="description" content="Basic ecommerce" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Cart />
      <main className={styles.main}>
        <div className={styles.grid}>
          {products.map((p) => (
            <ItemCard
              key={p.id}
              productId={p.id}
              productName={p.description}
              productPrice={Number(p.price)}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
