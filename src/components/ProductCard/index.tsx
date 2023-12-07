"use client";

import React from "react";
import Image from "next/image";
import { FaCartPlus } from "react-icons/fa";

import { useDispatch } from "react-redux";
import { adicionarCarrinho } from "../../store/reducers/cart";

import { colors } from "@/app/styles/globalStyles";
import * as S from "./styles";

const ProductCard = ({ data }: DataProps) => {
  const dispatch = useDispatch();

  return (
    <S.ContainerProductCard>
      <Image
        src={data.cover}
        alt="Imagem do produto"
        width={180}
        height={180}
      />
      <S.ProductTitle>{data.title}</S.ProductTitle>
      <S.ContainerPrice>
        <p>
          <strong>R$ {data.price.toFixed(2)}</strong>
        </p>
        <button onClick={() => dispatch(adicionarCarrinho(data))} type="button">
          <FaCartPlus size={20} color={colors.white} />
        </button>
      </S.ContainerPrice>
    </S.ContainerProductCard>
  );
};

export default ProductCard;
