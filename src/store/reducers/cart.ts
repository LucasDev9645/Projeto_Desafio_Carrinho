import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductProps } from "@/components/ProductCard";

type CarrinhoState = {
  itens: ProductProps[];
};

const initialState: CarrinhoState = {
  itens: [],
};

const carrinhoSlice = createSlice({
  name: "carrinho",
  initialState,
  reducers: {
    adicionarCarrinho: (state, action: PayloadAction<ProductProps>) => {
      const produto = action.payload;
      if (state.itens.find((p) => p.id === produto.id)) {
        alert("Item já adicionado");
      } else {
        state.itens.push(produto);
      }
    },
  },
});

export const { adicionarCarrinho } = carrinhoSlice.actions;
export default carrinhoSlice.reducer;
