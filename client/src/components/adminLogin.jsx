import React from "react";
import { FaUser } from "react-icons/fa";
import { FaKey } from "react-icons/fa";
function AdminLogin() {
  return (
    <>
      <div className="pb-16 shadow-md flex flex-col items-center justify-center">
        <div className="shadow-lg p-12 flex flex-col items-center justify-center">
          <img
            src="https://i.imgur.com/svn4MIM.png"
            className=" p-8 rounded-2xl h-48"
            alt=""
          />
          <h1 className="text-5xl font-semibold text-wrap">
            Добредојдовте, ве <br />
            молиме најавете се.
          </h1>
          <label className="input input-bordered flex items-center w-96 gap-2 m-4 mt-12">
            <FaUser />
            <input type="text" className="grow" placeholder={"Username"} />
          </label>
          <label className="input input-bordered flex items-center w-96 gap-2 m-4 ">
            <FaKey/>
            <input type="text" className="grow" placeholder="Password" />
          </label>
          <button className="btn btn-success w-48 text-white"> Login </button>
        </div>
      </div>
    </>
  );
}

export default AdminLogin;
