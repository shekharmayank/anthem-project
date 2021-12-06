import { useContext } from "react";
import ProductInCart from "../Contexts/ProductInCart";

export default function Cart() {
  const [cart, setCart] = useContext(ProductInCart);

  const removeProduct = (id) => {
    setCart(
      cart.filter((product) => {
        return product.id !== id;
      })
    );
  };

  return (
    <div>
      {cart.map((product) => {
        return (
          <div key={product.id}>
            <img src={product.image} width={100} alt="Product img" />
            <h1>{product.title}</h1>
            <h2>Price: ${product.price}</h2>
            <p>{product.description}</p>
            <p>Category: {product.category}</p>
            <p>Quatity: {product.quantity}</p>
            <button onClick={() => removeProduct(product.id)}>
              Remove product
            </button>
            <hr />
          </div>
        );
      })}
    </div>
  );
}
