import { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const OrderResultPage: NextPage = () => {
  const router = useRouter();
  const { orderId } = router.query;

  return (
    <div className={styles.main}>
      <div className={styles.logo}>
        <Link href="/" passHref>
          <Image
            src="/pfweb_logo.png"
            alt="Logo PFWeb"
            width="214"
            height="71"
          ></Image>
        </Link>
      </div>
      <div className={styles.grid}>
        <h1 className={styles.title}>Compra finalizada com sucesso</h1>
        <p className={styles.description}>Código do pedido: {orderId}</p>
      </div>
    </div>
  );
};

export default OrderResultPage;
