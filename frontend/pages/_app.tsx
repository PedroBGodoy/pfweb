import "../styles/globals.css";
import type { AppProps } from "next/app";
import { CartProvider } from "../provider/cart.provider";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;
library.add(faShoppingCart);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}

export default MyApp;
