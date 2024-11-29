import type { Metadata } from "next";
import "./globals.css";
import { CounterStoreProvider } from "@/provider/counter-store-provider";

export const metadata: Metadata = {
  title: "online shop",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <header></header>
      <body>
        <CounterStoreProvider>{children}</CounterStoreProvider>
      </body>
      <footer>2024 @makoto-developer</footer>
    </html>
  );
}
