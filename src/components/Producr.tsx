import React from "react";
import { Link } from "react-router-dom";

function Producr() {
  return (
    <>
      <section>
        <h1>Products List</h1>
      </section>
      <ul>
        <li>
          <Link to="Book">Book</Link>
        </li>
        <li>
          <Link to="Pen">Pen</Link>
        </li>
        <li>
          <Link to="Laptop">Laptop</Link>
        </li>
      </ul>
    </>
  );
}

export default Producr;
