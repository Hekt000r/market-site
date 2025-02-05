import axios from "axios";
import React, { useState } from "react";

function AdminPage() {
  // Create new product data
  const [name, setName] = useState("");
  const [displayEN, setdisplayEN] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [price, setPrice] = useState("");
  // Edit product variables
  const [product, setProduct] = useState("");
  const [productID, setProductID] = useState("");
  const handleCreate = () => {
    const productData = {
      name,
      displayEN,
      photoURL,
      price,
    };

    axios
      .get(`/api/createProduct?productOBJ=${JSON.stringify(productData)}`)
      .then((res) => {
        console.log("Product created:", res.data);
      })
      .catch((err) => {
        console.error("Error creating product:", err);
      });
  };
  return (
    <>
      <div className="p-8 m-4 shadow-md rounded-3xl">
        <h1 className="text-4xl text-black">Create a new product</h1>
        <h1 className="text-4xl text-black">
          ⚠️ Warning DO not use this to edit products, read manual for more
          information ⚠️
        </h1>
        <div className="w-[60%]">
          <label className="input input-bordered flex items-center gap-2 m-4">
            <input
              type="text"
              className="grow"
              placeholder="Product name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2 m-4">
            <input
              type="text"
              className="grow"
              placeholder="Product photoURL"
              onChange={(e) => {
                setPhotoURL(e.target.value);
              }}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2 m-4">
            <input
              type="text"
              className="grow"
              placeholder="Product name English"
              onChange={(e) => {
                setdisplayEN(e.target.value);
              }}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2 m-4">
            <input
              type="text"
              className="grow"
              placeholder="Price"
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
          </label>
          <button
            className="btn btn-success text-gray-100 w-48"
            onClick={handleCreate}
          >
            Create
          </button>
        </div>
      </div>
      <div className="p-8 m-4 shadow-md rounded-3xl">
        <h1 className="text-4xl text-black">Edit a product</h1>
        <h1 className="text-4xl text-black">
          ⚠️ Warning: Do not edit products without knowledge on how to use this.
          Read manual for information.⚠️
        </h1>
        <div className="w-[60%]">
          <label className="input input-bordered flex items-center gap-2 m-4">
            <input
              type="text"
              className="grow"
              placeholder="Product _id"
              onChange={(e) => {
                setProductID(e.target.value);
              }}
            />
            <button
              onClick={() => {
                axios.get(`/api/product/${productID}`).then(
                  (res) => {
                    console.log("yes")
                    setProduct(res.data)
                    console.table(res.data)
                  }
                );
              }}
              className="btn btn-info"
            >
              Check
            </button>
            <h1>{product?.name}</h1>
          </label>

          <label className="input input-bordered flex items-center gap-2 m-4 mt-12">
            <input
              type="text"
              className="grow"
              placeholder="Product data you want to edit"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2 m-4">
            <input
              type="text"
              className="grow"
              placeholder="New value of data"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </label>

          <button
            className="btn btn-info text-gray-100 w-48"
            onClick={handleCreate}
          >
            Edit
          </button>
        </div>
      </div>
    </>
  );
}

export default AdminPage;
