"use client";

import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";

import { RootReducer } from "../../store";

import * as S from "./styles";

const Header = () => {
  const items = useSelector((state: RootReducer) => state.carrinho.itens);

  return (
    <S.Header>
      <Link href="/">
        <h1>Dev Shop</h1>
      </Link>
      <S.Cart>
        <Link href="/cart">
          {items.length > 0 && <S.DetailCart>{items.length}</S.DetailCart>}
          <FaShoppingCart size={30} color="#fff" />
        </Link>
      </S.Cart>
    </S.Header>
  );
};

export default Header;
