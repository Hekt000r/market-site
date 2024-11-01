import axios from "axios";
import React, { useState } from "react";

function AdminPage() {
  const [name, setName] = useState("");
  const [displayEN, setdisplayEN] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [price, setPrice] = useState("");

  const handleCreate = () => {
    const productData = {
      name,
      displayEN,
      photoURL,
      price
    };
    
    axios
      .get(`/api/createProduct?productOBJ=${JSON.stringify(productData)}`)
      .then(res => {
        console.log('Product created:', res.data);
      })
      .catch(err => {
        console.error('Error creating product:', err);
      });
  };
  return (
    <div>
      <h1 className="text-4xl text-black">Create a new product</h1>
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
      <button className="btn btn-success text-gray-100 w-48" onClick={handleCreate}>
        Create
      </button>
      </div>
    </div>
  );
}

export default AdminPage;
