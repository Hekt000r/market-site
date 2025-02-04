import axios from "axios";
import React, { useEffect, useState } from "react";
import { useFetcher, useParams } from "react-router-dom";
function ProductPage() {
  const params = useParams(); // get params, specifically the product MongoDB Object _ID
  const [product, setProduct] = useState(); // store the product in a useState
  let productId = params?.id; // store the id param to a variable as is (needs some weird conversion magic to string later)

  useEffect(() => {
    const fullId = typeof id === "string" ? productId : productId?.toString(); // check if the ID is a string, and convert if isnt, probably junk code, needs to be tested/removed

    axios
      ?.get(`/api/product/${fullId}`)
      ?.then((res) => {
        setProduct(res?.data);
      })
      ?.catch((err) => {
        console?.log(err);
      });
  }, []);
  return (
    <>
      <div className="mt-24 shadow-md m-12 rounded-3xl p-8">
        <div className="flex">
          <div className="flex flex-col justify-center">
            <div className="breadcrumbs text-sm shadow-md rounded-lg p-2 max-w-96 mb-12 flex justify-center">
              <ul>
                <li>
                  <a>products</a>
                </li>
                <li>
                </li>
                <li>{product?.displayEN}</li>
              </ul>
            </div>
            <div className="flex">
              <img
                className=" h-40 shadow-md rounded-3xl mr-6"
                src={product?.photoURL}
                alt={product?.displayEN}
              />
              <div className="flex flex-col justify-center">
                <h1 className="text-4xl text-gray-700">{product?.displayEN}</h1>
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star"
                    defaultChecked
                    disabled
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star"
                    defaultChecked
                    disabled
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star"
                    defaultChecked
                    disabled
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star"
                    defaultChecked
                    disabled
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star"
                    disabled
                  />
                </div>
                <div className="mt-2 text-gray-400 text-xl product-tags">
                  {product?.tags && Array?.isArray(product?.tags) ? (
                    product?.tags?.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-block bg-gray-200 px-2 py-1 rounded-full mr-2"
                      >
                        #{tag}
                      </span>
                    ))
                  ) : (
                    <p>No tags available</p>
                  )}
                </div>

                <div>
                  <p className="w-[600px]">{product?.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {product?.downloadLinks?.map((download, index) => (
          <div className="btn mt-6 hover:bg-gray-200 flex-row ml-12 items-center rounded-lg shadow-md w-[34rem]">
            <a
              className="text-gray-400 text-xl"
              href={product?.downloadLinks[index]?.downloadURL}
            >
              Download • {product?.downloadLinks[index]?.Platform} •{" "}
              {product?.downloadLinks[index]?.Host}{" "}
              {product?.downloadLinks[index]?.Size}
            </a>

            {product?.downloadLinks[index]?.Platform?.toLowerCase() === "windows" ? (
              <FaWindows className="w-8 h-8 ml-2" />
            ) : product?.downloadLinks[index]?.Platform?.toLowerCase() === "linux" ? (
              <FaLinux className="w-8 h-8 ml-2" />
            ) : product?.downloadLinks[index]?.Platform?.toLowerCase() ===
              "macos" ? (
              <FaApple className="w-8 h-8 ml-2" />
            ) : (
              <GrSystem className="w-8 h-8 ml-2" />
            )}

          </div>
        ))}

        <div className="flex justify-center mt-12 pl-4 mr-[7rem]">
          <a href="/help/downloadlinks" className="btn btn-primary">
            i don't know which download to choose
          </a>
        </div>

        <div className="mt-8 ml-8">
          <h1 className="text-xl font-bold">Rate this product:</h1>
          <div>
            <div className="rating mt-2">
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
            </div>
          </div>
          <input
            type="button"
            value="Submit"
            className="btn btn-xs btn-primary"
          />
        </div>
      </div>
    </>
  );
}

export default ProductPage;
