import { GetStaticPaths, GetStaticProps } from "next";
import getItemById from "../../lib/api/item/get-item-by-id";

interface ProductPageProps {
  product: {
    id: number;
    name: string;
    price: number;
  };
}

const Product = ({ product }: ProductPageProps) => {
  return <h1>Olá {product.name}</h1>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params?.id) return { props: {} };
  const product = await getItemById(+params.id);
  return {
    props: { product },
  };
};

export default Product;
