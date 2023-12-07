declare type ProductProps = {
  id: number;
  title: string;
  description: string;
  price: number;
  cover: string;
  quantidade?: number;
  subtotal?: number;
};

declare type DataProps = {
  data: ProductProps;
};

declare type CarrinhoState = {
  itens: ProductProps[];
  total: number;
};
