import ProductCard from "@/components/ProductCard";
import { products } from "../../util/products";

const Home = () => {
  return (
    <main className="container">
      <h1 className="title">Produtos em Alta</h1>
      <section className="products-container">
        {products.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </section>
    </main>
  );
};

export default Home;
