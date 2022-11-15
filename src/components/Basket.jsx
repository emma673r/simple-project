import React from "react";
import Product from "./Product";

function Basket(props) {
  return (
    <section className="Basket">
      <ul>
        {props.cart.map((item) => (
          <li>
            {item.productdisplayname} x {item.amount}, {item.amount * item.price},-
          </li>
        ))}
      </ul>
      <button>Buy</button>
    </section>
  );
}

export default Basket;
