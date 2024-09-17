import React from "react";
import {
  FaInfoCircle,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaBars,
} from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { FaLocationDot } from "react-icons/fa6";

function Navbar() {
  return (
    <div className="flex items-center justify-between">
      <nav class="navbar  bg-green-400 flex justify-between">
        <a class="btn btn-ghost text-lg">
          <img alt="Logo" src="https://i.imgur.com/svn4MIM.png" class="w-24" />
        </a>
        <div class="dropdown dropdown-end md:hidden flex items-start justify-end">
          <div className="flex justify-end items-end">
          <button class="btn btn-circle btn-ghost">
            <FaBars/>
          </button>
          </div>
          

          <ul
            tabindex="0"
            class="dropdown-content menu z-[1] bg-base-200 p-4 rounded-box shadow w-64 gap-2"
          >
           <li className="">
            <input
              type="text"
              placeholder="Search for products"
              className="input input-primary"
            />
          </li>
          <li>
            <a>
              <FaInfoCircle color="#dc2626" className="w-6 h-5" />
              About
            </a>
          </li>
          <li>
            <a>
              <TiShoppingCart color="#dc2626" className="w-6    h-6" />
              Products
            </a>
          </li>
          <li>
            <a>
              <FaLocationDot color="#dc2626" className="w-6    h-6" />
              Locations
            </a>
          </li>

          <a class="btn btn-sm btn-primary">Log in</a>
          </ul>
        </div>

        <ul class="hidden menu md:menu-horizontal gap-2 font-semibold">
          <li className="">
            <input
              type="text"
              placeholder="Search for products"
              className="input input-primary"
            />
          </li>
          <li>
            <a>
              <FaInfoCircle color="#dc2626" className="w-5 h-5" />
              About
            </a>
          </li>
          <li>
            <a>
              <TiShoppingCart color="#dc2626" className="w-6    h-6" />
              Products
            </a>
          </li>
          <li>
            <a>
              <FaLocationDot color="#dc2626" className="w-6    h-6" />
              Locations
            </a>
          </li>

          <a class="btn btn-sm btn-primary">Log in</a>
        </ul>

        <div class="hidden sm:flex gap-2">
          <a class="btn btn-circle btn-ghost btn-sm text-xl">
            <FaFacebook />
          </a>

          <a class="btn btn-circle btn-ghost btn-sm text-xl">
            <FaInstagram />
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
