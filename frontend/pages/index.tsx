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
      width: 100,
      height: 50,
      length: 15,
      weight: 3,
    },
    {
      id: 2,
      description: "Amplificador",
      price: "5000",
      width: 50,
      height: 50,
      length: 50,
      weight: 22,
    },
    {
      id: 3,
      description: "Cabo",
      price: "30",
      width: 10,
      height: 10,
      length: 10,
      weight: 1,
    },
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Ecommerce PfWeb</title>
        <meta name="description" content="Basic ecommerce" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Cart />
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
