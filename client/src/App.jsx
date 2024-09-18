import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Sidebar from "./components/Sidebar";
import logoBadge from "./assets/stkmk-badge.png";
import { IoMdPricetags } from "react-icons/io";
import { FaAward } from "react-icons/fa6";
import { MdSupportAgent } from "react-icons/md";
function App() {
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
        <Sidebar />
      </div>
    </>
  );
}

export default App;
