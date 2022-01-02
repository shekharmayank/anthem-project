import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function List() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <div>
      <ul>
        {products.map((product) => {
          return (
            <div key={product.id}>
              <img src={product.image} width={100} alt={product.title} />
              <p>${product.price}</p>
              <Link to={`/products/${product.id}`}>{product.title}</Link>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
