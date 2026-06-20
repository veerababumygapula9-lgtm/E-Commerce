import { useState, useRef } from "react";
import ProductCard from "../../components/ProductCard";
import useFetchProducts from "../../hooks/useFetchProducts";
import { CartContext } from "./reducer/CartContext";


function Products() {
  const { products, loading, error } = useFetchProducts();

  const [search, setSearch] = useState("");
  const inputRef = useRef();

  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <div>
      <h1>Products</h1>

      <input
        ref={inputRef}
        type="text"
        placeholder="Search Product"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={() => inputRef.current.focus()}>
        Focus Search
      </button>

      <div>
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;