import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: CarrinhoState = {
  itens: [],
  total: 0,
};

const carrinhoSlice = createSlice({
  name: "carrinho",
  initialState,
  reducers: {
    adicionarCarrinho: (state, action: PayloadAction<ProductProps>) => {
      const produto = action.payload;
      const existingItem = state.itens.find((p) => p.id === produto.id);

      if (existingItem) {
        existingItem.quantidade = (existingItem.quantidade || 0) + 1;
      } else {
        state.itens.push({ ...produto, quantidade: 1 });
      }
    },
    removerCarrinho: (state, action: PayloadAction<number>) => {
      const produtoId = action.payload;
      const existingItem = state.itens.find((p) => p.id === produtoId);

      if (existingItem) {
        if (existingItem.quantidade && existingItem.quantidade > 1) {
          existingItem.quantidade -= 1;
        } else {
          state.itens = state.itens.filter((p) => p.id !== produtoId);
        }
      }
    },
    calcularSubtotal: (state, action: PayloadAction<number>) => {
      const produtoId = action.payload;
      const existingItem = state.itens.find((p) => p.id === produtoId);

      if (existingItem) {
        existingItem.subtotal =
          (existingItem.price || 0) * (existingItem.quantidade || 0);
      }
    },
    calcularTotal: (state) => {
      state.total = state.itens.reduce(
        (total, item) => total + (item.price || 0) * (item.quantidade || 0),
        0
      );
    },
  },
});

export const {
  adicionarCarrinho,
  removerCarrinho,
  calcularSubtotal,
  calcularTotal,
} = carrinhoSlice.actions;

export default carrinhoSlice.reducer;
