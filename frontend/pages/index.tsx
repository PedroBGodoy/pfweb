import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ItemCard from "../components/item-card";
import CartComponent from "../components/cart";
import getItems from "../lib/api/item/get-items";

interface ProductPageProps {
  products: [
    {
      id: number;
      name: string;
      price: number;
    }
  ];
}

const Home: NextPage<ProductPageProps> = (props) => {
  const { products } = props;

  return (
    <div className={styles.container}>
      <Head>
        <title>Ecommerce PfWeb</title>
        <meta name="description" content="Basic ecommerce" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CartComponent />
      <main className={styles.main}>
        <div className={styles.logo}>
          <Image
            src="/pfweb_logo.png"
            alt="Logo PFWeb"
            width="214"
            height="71"
          ></Image>
        </div>
        <div className={styles.grid}>
          {products.map((p) => (
            <ItemCard
              key={p.id}
              productId={p.id}
              productName={p.name}
              productPrice={Number(p.price)}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const products = await getItems();
  return {
    props: { products },
  };
};

export default Home;
