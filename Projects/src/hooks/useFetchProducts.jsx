import { useEffect, useState } from "react";

function useFetchProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Error Fetching Data");
        setLoading(false);
      });
  }, []);

  return { products, loading, error };
}

export default useFetchProducts;