"use client";

import React from "react";
import { useSelector } from "react-redux";

import ProductCardCart from "@/components/ProductCardCart";
import { RootReducer } from "../../store";

const Cart = () => {
  const items = useSelector((state: RootReducer) => state.carrinho.itens);

  const amount = items.reduce((acc, item) => {
    acc += item.price * (item.quantidade || 1);
    return acc;
  }, 0);

  return (
    <div className="container">
      <h1 className="title">Meu Carrinho</h1>
      <section>
        {items.map((item) => (
          <ProductCardCart key={item.id} data={item} />
        ))}
      </section>
      {amount > 0 ? (
        <h3>Total: R$ {amount.toFixed(2)}</h3>
      ) : (
        <h3>Seu carrinho está vazio!</h3>
      )}
    </div>
  );
};

export default Cart;
