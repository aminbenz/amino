import type { AppProps } from "next/app";
import { Inter } from "@next/font/google";
// import "@styles/reset.css";
// import "@styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  );
}
