import React, { useEffect, useState } from "react";
import ActiveRooms from "./ActiveRooms";
import JoinRoomModal from "./JoinRoomModal";

import { Link, Route, Routes } from "react-router-dom";
import { useStateValue } from "../context/stateProvider";
import { RemoveScrollBar } from "react-remove-scroll-bar";

const DisplayPage = () => {
  const [joinRoomRequest, setJoinRoomRequest] = useState(false);
  const [{ joinRoomFlag },dispatch] = useStateValue();
  
  return (
    <main className="w-[100vw] h-[auto] pt-[5.25rem] px-[2rem] bg-primary_gray flex flex-col items-center text-white">
      {
        <JoinRoomModal
          open={joinRoomRequest}
          onClose={() => {
            dispatch({
              type:"SET_JOINROOM_FLAG",
              joinRoomFlag:false
            })
            setJoinRoomRequest(!joinRoomRequest);
          }}
        />
      }

      <h2 className="text-[26px] leading-5 font-semibold">
        You Are Just One Click
      </h2>
      <h2 className="text-[26px] font-semibold">Away From BattleField</h2>
      <p className="text-[14px] font-inter mt-[11px]">
        One piece is the best piece of fiction ever created.If you don't agree I
        will personally hunt you down.
      </p>
      <div className="flex mt-[30px] gap-5">
        <Link
          to="/createroom"
          className="py-[6px] cursor-pointer px-[36px] text-[16px] font-medium font-inter tracking-wide rounded-md items-center justify-center flex bg-primary_green text-black"
        >
          <p className="text-black">Create Room</p>
          {/* <BsArrowRightCircle className="bg-black"/> */}
        </Link>
        <div
          className="py-[6px] px-[36px] text-[16px] font-medium font-inter tracking-wide rounded-md bg-primary_gray text-white border-2 border-white"
          onClick={() => {
            dispatch({
              type:"SET_JOINROOM_FLAG",
              joinRoomFlag:true
            })
            setJoinRoomRequest(!joinRoomRequest);
          }}
        >
          Join Room
        </div>
      </div>
      <div className="">
        <div className="w-full flex text-[20px] mt-[50px] mb-5 font-bold items-start">
          Active Rooms
        </div>
        <div className="flex w-full flex-wrap">
          <ActiveRooms />
        </div>
      </div>
    </main>
  );
};

export default DisplayPage;
