"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaCartPlus } from "react-icons/fa";

import { useDispatch } from "react-redux";
import { adicionarCarrinho } from "../../store/reducers/cart";

import * as S from "./styles";

export type ProductProps = {
  id: number;
  title: string;
  description: string;
  price: number;
  cover: string;
};

interface DataProps {
  data: ProductProps;
}

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
          <strong>R$ {data.price}</strong>
        </p>

        <button onClick={() => dispatch(adicionarCarrinho(data))} type="button">
          <Link href="/cart">
            <span>
              <FaCartPlus size={20} />
            </span>
          </Link>
        </button>
      </S.ContainerPrice>
    </S.ContainerProductCard>
  );
};

export default ProductCard;
