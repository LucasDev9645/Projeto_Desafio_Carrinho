"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaCartPlus } from "react-icons/fa";

import * as S from "./styles";

const ProductCard = () => {
  return (
    <S.ContainerProductCard>
      <Image src="/img.png" alt="Imagem do produto" width={250} height={250} />
      <S.ProductTitle>Pc Gamer Pro Max</S.ProductTitle>
      <S.ContainerPrice>
        <p>
          <strong>R$ 4,200</strong>
        </p>

        <Link href="/cart">
          <span>
            <FaCartPlus size={20} />
          </span>
        </Link>
      </S.ContainerPrice>
    </S.ContainerProductCard>
  );
};

export default ProductCard;
