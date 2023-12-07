import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { StoreProvider } from "@/store/StoreProvider";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

import * as S from "./styles/globalStyles";

export const metadata: Metadata = {
  title: "Dev Shop",
  description: "Sua loja de eletrônicos.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoreProvider>
      <html lang="pt-BR">
        <S.GlobalCss />
        <body className={inter.className}>
          <Header />
          {children}
        </body>
      </html>
    </StoreProvider>
  );
}
