import React, { useState, useEffect } from "react";
import axios from "axios";
function Products() {
  const [productsList, setProductsList] = useState([]);
  useEffect(() => {
    axios
      .get("/api/getProducts")
      .then((response) => {
        setProductsList(response.data);
      })
      .catch((error) => {
        console.error(error);
        alert(error);
      });
  }, []);
  return (
    <div>
      {console.table(productsList[0])}
      <ul className="xl:flex flex-wrap">
        {productsList.map((product, index) => (
          <>
            <li className="shadow-2xl  rounded-xl p-2 m-2 flex flex-col justify-center cursor-pointer transition duration-500 ease-in-out  hover:bg-gray-200 ">
              <a href={"/product/" + productsList[index]._id}>
                <img
                  className="max-h-32  cursor-pointer flex"
                  src={productsList[index].photoURL}
                  alt=""
                />
                <h1 className="text-xs p-1 max-w-32 font-semibold">
                  {product.displayEN}
                </h1>
                <h1 className="text-xs p-1 max-w-32 font-semibold">
                  {product.price}
                </h1>
              </a>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
}

export default Products;
