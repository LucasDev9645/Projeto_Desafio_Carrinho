import ProductCard from "@/components/ProductCard";

const Home = () => {
  return (
    <main className="container">
      <h1 className="title">Produtos em Alta</h1>
      <section className="products-container">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </section>
    </main>
  );
};

export default Home;
