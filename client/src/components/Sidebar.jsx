import React, { useEffect, useState } from "react";
import axios from "axios";
import { RiDrinks2Fill } from "react-icons/ri";
import ChocolateIcon1 from "../assets/Icons/FilledChocolate1.svg";
import AppleIcon1 from "../assets/Icons/FilledApple1.svg";
import CoffeIcon1 from "../assets/Icons/FilledCoffe1.svg";
import SweetsIcon1 from "../assets/Icons/FilledSweets1.svg";
import DairyIcon1 from "../assets/Icons/FilledDairy1.svg";
function Sidebar() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get("/api/getCategories")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div className="bg-gray-50 text-gray-600 font-semibold shadow-md xl:w-[20%] lg:w-[30%] h-[500px]">
      <ul className="p-4">
        {categories.map((category, index) => (
          <>
            <li
              className="shadow-md p-3 mt-2 rounded-md flex items-center flex-row
             hover:bg-gray-200 cursor-pointer transition duration-900 ease-in-out  hover:bg-gray-200 "
            >
              {category.Name == "Drinks" ? (
                <RiDrinks2Fill className="w-8 m-1 h-8" />
              ) : (
                <></>
              )}{" "}
              {category.Name == "Chocolate" ? (
                <img src={ChocolateIcon1} className="w-8 m-1 h-8" />
              ) : (
                <></>
              )}{" "}
               {category.Name == "Fruits" ? (
                <img src={AppleIcon1} className="w-8 m-1 h-8" />
              ) : (
                <></>
              )}{" "}
               {category.Name == "Coffe" ? (
                <img src={CoffeIcon1} className="w-8 m-1 h-8" />
              ) : (
                <></>
              )}{" "}
               {category.Name == "Sweets" ? (
                <img src={SweetsIcon1} className="w-8 m-1 h-8" />
              ) : (
                <></>
              )}{" "}
               {category.Name == "Dairy" ? (
                <img src={DairyIcon1} className="w-8 m-1 h-8" />
              ) : (
                <></>
              )}{" "}
              {category.Name}
            </li>
          </>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
