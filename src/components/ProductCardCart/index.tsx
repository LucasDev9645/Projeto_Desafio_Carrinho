"use client";

import Image from "next/image";

import { ProductProps } from "../ProductCard";

import * as S from "./styles";

interface DataProps {
  data: ProductProps;
}

const ProductCardCart = ({ data }: DataProps) => {
  return (
    <section className="container">
      <S.ProductCardCartContainer>
        <Image
          src={data.cover}
          alt="Imagem do produto"
          width={140}
          height={140}
        />
        <p>
          <strong>Preço: {data.price}</strong>
        </p>
        <S.ButtonsContainer>
          <button>-</button>
          <span>2</span>
          <button>+</button>
        </S.ButtonsContainer>
        <p>
          <strong>SubTotal: R$ 5.200,00</strong>
        </p>
      </S.ProductCardCartContainer>
    </section>
  );
};

export default ProductCardCart;
