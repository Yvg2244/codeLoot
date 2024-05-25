import React, { useEffect } from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { RemoveScrollBar } from "react-remove-scroll-bar";
import { useStateValue } from "../context/stateProvider";
import SignupPage from "./SignupPage";
const LoginPage = ({ openLoginModal, oncloseLoginModal }) => {
  const [{ user }, dispatch] = useStateValue();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState(null);
  const [loginErr, setLoginErr] = useState(false);
  const [errMsg, setErrMsg] = useState(null);
  const [openSignupRoomRequest, setOpenSignupRoomRequest] = useState(false);
  useEffect(() => {}, [errMsg]);
  if (!openLoginModal) return null;
  return ReactDOM.createPortal(
    <div className="fixed top-0 z-10 w-[100vw] flex justify-center h-[100vh] backdrop-blur-sm bg-black/30">

      {
        <SignupPage
        openSignupModal={openSignupRoomRequest}
        oncloseSignupModal={() => {
          setOpenSignupRoomRequest(!openSignupRoomRequest);
        }}/>
      }
      {user ? (
        <div className="flex items-start ">
          <div className="flex h-auto flex-col p-5 rounded-md  items-center bg-primary_black text-lg  w-[20rem] gap-5">
            <div className="w-full flex justify-end">
              <button onClick={oncloseLoginModal}> x</button>
            </div>
            <div className="font-monte text-3xl text-primary_green">
              {user.name}
            </div>
            <div className="text-lg">{user.email}</div>
            <div>Wallet Balance {user.wallet}</div>
            <button className="py-2 px-10 text-[12px] font-poppins tracking-wide rounded-md bg-primary_green text-black font-semibold">
              Add Money
            </button>
            <button
              className="py-2 px-10 text-[12px] font-poppins tracking-wide rounded-md bg-primary_gray text-white border-2 border-white"
              onClick={() => {
                localStorage.clear();
                dispatch({
                  type: "SET_USER",
                  user: null,
                });
              }}
            >
              Logout
            </button>
          </div>
        </div>
      ) : (
        <div className="h-fit p-5 w-auto bg-primary_gray flex flex-col gap-5 items-center">
          <div
            className="w-full font-semibold cursor-pointer text-right "
            onClick={oncloseLoginModal}
          >
            X
          </div>
          <label className="text-primary_green" htmlFor="loginId">
            Username
          </label>
          <input
          required
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
          required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            name="password"
            id="password"
          />
          {errMsg && <div className="text-red-500">{errMsg}</div>}
          <button
            className="py-[6px] px-[36px] text-[16px] font-medium font-inter tracking-wide rounded-md bg-primary_green text-black "
            onClick={() => {
              axios
                .post("https://devs-clash.onrender.com/login", {
                  user_name: userName,
                  password: password,
                })
                .then((res) => {
                  if (res.data.msg != "true") {
                    // console.log(res.data.msg);
                    setLoginErr(true);
                    setErrMsg(res.data.msg);
                  } else {
                    setUserData(res.data.user);
                    localStorage.setItem(
                      "userData",
                      JSON.stringify(res.data.user)
                    );
                    dispatch({
                      type: "SET_USER",
                      user: res.data.user,
                    });
                  }
                })
                .catch((err) => {
                  alert(err);
                });
            }}
          >
            Submit
          </button>
          <button
          onClick={()=>{
            setOpenSignupRoomRequest(!openSignupRoomRequest)
            // oncloseLoginModal()
          }}
           className="py-[6px] px-[36px] text-[16px] font-medium font-inter tracking-wide rounded-md bg-primary_gray text-white border-2 border-white">
            Sign Up
          </button>
        </div>
      )}
    </div>,
    document.getElementById("loginRoomPortal")
  );
};

export default LoginPage;
