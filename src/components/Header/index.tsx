"use client";

import React from "react";
import Link from "next/link";

import * as S from "./styles";

import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <S.Header>
      <h1>Dev Shop</h1>
      <S.Cart>
        <Link href="/cart">
          <S.DetailCart>1</S.DetailCart>
          <FaShoppingCart size={30} color="#fff" />
        </Link>
      </S.Cart>
    </S.Header>
  );
};

export default Header;
