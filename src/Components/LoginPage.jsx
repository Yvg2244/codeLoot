import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { RemoveScrollBar } from "react-remove-scroll-bar";
const LoginPage = ({ openLoginModal, oncloseLoginModal }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState(null);

  if (!openLoginModal) return null;
  return ReactDOM.createPortal(
    <div className="absolute z-10 w-[100vw] flex justify-center h-[100vh] backdrop-blur-sm bg-black/30">
      <RemoveScrollBar />
      <div className="h-[20rem] p-5 w-auto bg-primary_gray flex flex-col gap-5 items-center">
        <div
          className="w-full font-bold cursor-pointer text-right "
          onClick={oncloseLoginModal}
        >
          X
        </div>
        <label className="text-primary_green" htmlFor="loginId">
          Username
        </label>
        <input
          type="text"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          name="loginId"
          id="loginId"
        />
        <label className="text-primary_green" htmlFor="password">
          Password
        </label>
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          name="password"
          id="password"
        />

        <button
          className="w-[10rem] py-2 px-10 text-[12px] font-poppins tracking-wide rounded-md bg-primary_green text-black"
          onClick={() => {
            axios
              .post("https://devs-clash.onrender.com/login", {
                user_name: userName,
                password: password,
              })
              .then((res) => {
                setUserData(res.data.user)
                console.log(userData);
                
                localStorage.setItem("userData", JSON.stringify(userData));
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        >
          Submit
        </button>
      </div>
    </div>,
    document.getElementById("loginRoomPortal")
  );
};

export default LoginPage;
