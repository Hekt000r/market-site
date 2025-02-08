import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Sidebar from "./components/Sidebar";
import logoBadge from "./assets/stkmk-badge.png";
import { IoMdPricetags } from "react-icons/io";
import { FaAward } from "react-icons/fa6";
import { MdSupportAgent } from "react-icons/md";
import { RiDrinks2Fill } from "react-icons/ri";
import ChocolateIcon1 from "./assets/Icons/FilledChocolate1.svg";
import AppleIcon1 from "./assets/Icons/FilledApple1.svg";
import CoffeIcon1 from "./assets/Icons/FilledCoffe1.svg";
import SweetsIcon1 from "./assets/Icons/FilledSweets1.svg";
import DairyIcon1 from "./assets/Icons/FilledDairy1.svg";
import axios from "axios";
import Flyers from "./components/Flyers";
import Products from "./components/Products";
function App() {
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
    <>
      <div className="">
        <div className="relative xl:h-96 h-[70rem] bg-[url('./assets/background-image.jpg')] bg-cover bg-center p-20 items-center">
          <div class="absolute inset-0 w-full bg-green-700 bg-opacity-70"></div>

          <div class="relative z-10 p-8 xl:flex items-center justify-between">
            <div className="w-full xl:w-auto flex justify-center xl:justify-start mb-8 xl:mb-0">
              <img
                className="w-32 h-32 xl:w-48 xl:h-48 mx-auto"
                src={logoBadge}
                alt=""
              />
            </div>

            <div className="flex flex-col items-center justify-center text-center sm:flex-row sm:items-start xl:mb-0 mb-8">
              <div className="flex flex-col items-center justify-center text-center sm:flex-row sm:items-start xl:flex-col xl:items-center xl:justify-center">
                <div className="mb-4 sm:mr-6 xl:w-full">
                  <IoMdPricetags
                    color="#20940c"
                    className="bg-white rounded-full w-16 h-16 p-3 mb-2 xl:mx-auto"
                  />
                </div>
                <div className="text-center sm:text-left xl:text-center">
                  <h1 className="font-bold text-2xl text-white xl:mt-4">
                    Евтини цени
                  </h1>
                  <p className="text-white xl:text-center">
                    Стокомак има најдобри <br /> цени во градот
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center text-center sm:flex-row sm:items-start xl:mb-0 mb-8">
              <div className="flex flex-col items-center justify-center text-center sm:flex-row sm:items-start xl:flex-col xl:items-center xl:justify-center">
                <div className="mb-4 sm:mr-6 xl:w-full">
                  <FaAward
                    color="#20940c"
                    className="bg-white rounded-full w-16 h-16 p-3 mb-2 xl:mx-auto"
                  />
                </div>
                <div className="text-center sm:text-left xl:text-center">
                  <h1 className="font-bold text-2xl text-white xl:mt-4">
                    Квалитетни производи
                  </h1>
                  <p className="text-white xl:text-center">
                    Стокомак ветува производи <br /> со висок квалитет
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center text-center sm:flex-row sm:items-start">
              <div className="flex flex-col items-center justify-center text-center sm:flex-row sm:items-start xl:flex-col xl:items-center xl:justify-center">
                <div className="mb-4 sm:mr-6 xl:w-full">
                  <MdSupportAgent
                    color="#20940c"
                    className="bg-white rounded-full w-16 h-16 p-3 mb-2 xl:mx-auto"
                  />
                </div>
                <div className="text-center sm:text-left xl:text-center">
                  <h1 className="font-bold text-2xl text-white xl:mt-4">
                    Пријателски персонал
                  </h1>
                  <p className="text-white xl:text-center">
                    без оглед на проблемот, ние сме <br /> среќни да помогнеме
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative xl:h-96 h-[70rem]  bg-cover bg-center p-20 items-center">
          <div class="absolute inset-0 w-full  bg-opacity-70"></div>

          <div class="relative z-10 p-8 xl:flex items-center justify-between">
            <div className="w-full xl:w-auto text-center justify-center xl:justify-start mb-8 xl:mb-0">
              <h1 className="text-black font-semibold text-4xl">Флиери</h1>
              <p>
                Откријте ги <b> најдобрите зделки</b>{" "}
              </p>
            </div>
            <Flyers></Flyers>
          </div>
        </div>
        <div className="flex justify-start">
          <div className="bg-gray-50 text-gray-600 font-semibold shadow-md xl:w-[20%] lg:w-[30%] h-[500px]">
            <ul className="p-4">
              {categories.map((category, index) => (
                <>
                  <li
                   
                  >
                    <button onClick={() => {
                      axios.get(`/api/getProductsByTag?tag=${category.Name}`).then((res)=> {
                        setProductsList(res.data)
                      })
                    }} className="shadow-md p-3 mt-2 rounded-md flex items-center flex-row w-[100%]
                       hover:bg-gray-200 cursor-pointer transition duration-900 ease-in-out  hover:bg-gray-200 ">
                      {" "}
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
                      {category.Display}
                    </button>
                  </li>
                </>
              ))}
            </ul>
          </div>
          <Products productsList={productsList} />
        </div>
      </div>
    </>
  );
}

export default App;
