import { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import ProductInCart from "../Contexts/ProductInCart";

export default function View() {
  const [product, setProduct] = useState({});
  const params = useParams();
  const history = useHistory();

  const [cart, setCart] = useContext(ProductInCart);

  useEffect(() => {
    const id = params.id;
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [params.id]);

  const handleAddToCart = () => {
    const temp = product;
    temp.quantity = 1;
    const temp2 = cart.filter((product) => {
      return product.id === temp.id;
    });

    if (temp2.length === 1) {
      temp2[0].quantity += 1;
      setCart([...cart.filter((product) => product.id !== temp.id), temp2[0]]);
    } else {
      setCart([...cart, temp]);
    }
    history.push("/cart");
  };

  return (
    <div>
      <img src={product.image} width={100} alt="Product img" />
      <h1>{product.title}</h1>
      <h2>Price: ${product.price}</h2>
      <p>{product.description}</p>
      <p>Category: {product.category}</p>
      {/* <p>
        Rating: {product.rating.rate} stars from {product.rating.count}{" "}
        customers
      </p> */}
      <button onClick={handleAddToCart}>Add to cart</button>
    </div>
  );
}
