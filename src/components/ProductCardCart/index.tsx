"use client";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Image from "next/image";

import { adicionarCarrinho, removerCarrinho } from "../../store/reducers/cart";
import { RootReducer } from "@/store";

import * as S from "./styles";

const ProductCardCart = ({ data }: DataProps) => {
  const dispatch = useDispatch();
  const items = useSelector((state: RootReducer) => state.carrinho.itens);

  const carrinhoItem = items.find((item) => item.id === data.id);

  const handleAdicionarCarrinho = () => {
    dispatch(adicionarCarrinho(data));
  };

  const handleRemoverCarrinho = () => {
    dispatch(removerCarrinho(data.id));
  };

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
          <strong>Preço: {data.price.toFixed(2)}</strong>
        </p>
        <S.ButtonsContainer>
          <button onClick={handleRemoverCarrinho} type="button">
            -
          </button>
          <span>{carrinhoItem?.quantidade || 0}</span>
          <button onClick={handleAdicionarCarrinho} type="button">
            +
          </button>
        </S.ButtonsContainer>
        <p>
          <strong>
            SubTotal: R$
            {Number(data.price * (carrinhoItem?.quantidade || 0)).toFixed(2)}
          </strong>
        </p>
      </S.ProductCardCartContainer>
    </section>
  );
};

export default ProductCardCart;
