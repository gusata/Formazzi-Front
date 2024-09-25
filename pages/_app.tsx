import "@/styles/globals.css";
import type { AppProps } from "next/app";
import LocomotiveScroll from "locomotive-scroll";


export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
