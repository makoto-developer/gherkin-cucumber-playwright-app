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
      <body>
        <CounterStoreProvider>{children}</CounterStoreProvider>
      </body>
    </html>
  );
}
