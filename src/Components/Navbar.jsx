import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { useStateValue } from "../context/stateProvider";
import LoginPage from "./LoginPage";
import { useEffect } from "react";
const Navbar = () => {
  const [openLoginRoomRequest, setOpenLoginRoomRequest] = useState(false);
  const [{ user }, dispatch] = useStateValue();
  const [userName,setUserName]=useState('')
  useEffect(()=>{
    setUserName(user?user.name:"Login")
  },[user])
  return (
    <nav className="bg-primary_black fixed font-monte justify-center text-[18px] flex w-full py-4 px-2">
      {
        <LoginPage
          openLoginModal={openLoginRoomRequest}
          oncloseLoginModal={() => {
            setOpenLoginRoomRequest(!openLoginRoomRequest);
          }}
        />
      }
      <div className="font-serif font-bold w-[20%]">
        <p className="text-primary_green font-inter font-bold">DevsClash</p>
      </div>
      <div className="w-full flex">
        <div className="w-full gap-[3.5rem] text-[16px] flex justify-center">
          <Link to="/" className="font-inter font-bold">
            Explore
          </Link>
          <Link to="/wallet" className="font-inter font-bold">
            Wallet
          </Link>
          <Link to="/history" className="font-inter font-bold">
            History
          </Link>
          <Link to="/friends" className="font-inter font-bold">
            Friends
          </Link>
        </div>
      </div>
      <div
        onClick={()=>{
          setOpenLoginRoomRequest(!openLoginRoomRequest)
        }}
        className="flex cursor-pointer text-[14px] items-center gap-4 w-[20%]"
      >
        <CgProfile className="text_primary_green text-[20px]" />
        <div>{
        userName}</div>
      </div>
    </nav>
  );
};

export default Navbar;
