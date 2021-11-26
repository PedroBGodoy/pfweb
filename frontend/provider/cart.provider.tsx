import {
  Context,
  createContext,
  ProviderProps,
  useContext,
  useState,
} from "react";

interface Product {
  id: number;
  price: number;
  name: string;
}

interface Cart {
  products?: Product[];
  addProduct(product: Product): any;
  removeProduct(productId: number): any;
}

const CartContext: Context<Cart> = createContext<Cart>({
  products: [],
  addProduct: () => console.error("Method not implemented yet"),
  removeProduct: () => console.error("Method not implemented yet"),
});

export const CartProvider = (props: Partial<ProviderProps<Cart>>) => {
  const [products, setProducts] = useState<Product[]>([]);
  const { children } = props;

  const addProduct = (product: Product) => {
    setProducts([...products, product]);
  };

  const removeProduct = (productId: number) => {
    const finalProducts = products.filter((p) => p.id != productId);
    setProducts(finalProducts);
  };

  return (
    <CartContext.Provider value={{ products, addProduct, removeProduct }}>
      {children}
    </CartContext.Provider>
  );
};

export function useCartContext() {
  return useContext(CartContext);
}
