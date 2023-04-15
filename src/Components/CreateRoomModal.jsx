import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import {useStateValue} from '../context/stateProvider'


const CreateRoomModal = ({ openRoomModal, onCloseRoomModal }) => {
  if (!openRoomModal) return null;
  const [{newRoom},dispatch]=useStateValue()
  return ReactDOM.createPortal(
    <div className="absolute z-10 w-[100vw] flex justify-center h-[100vh] backdrop-blur-sm bg-black/30">
      <div className="h-[auto] w-[20rem] bg-primary_gray flex flex-col gap-5 items-center justify-center">
        <div className="text-primary_green font-monte">Room Details</div>
        <div className="grid grid-cols-2 gap-4 text-primary_gray_light">
          <div className="text-gray-500">Topic</div>
          <div className="text-white">{newRoom?.topic}</div>{" "}
          <div className="text-gray-500">Difficulty</div>
          <div className="text-white">{newRoom?.difficulty}</div>{" "}
          <div className="text-gray-500">Time</div>
          <div className="text-white">{newRoom?.duration}min</div>{" "}
          <div className="text-gray-500">Questions</div>
          <div className="text-white">{newRoom?.noOfQuestions}</div>{" "}
          <div className="text-gray-500">Time</div>
          <div className="text-white">{newRoom?.startTime}</div>
          <div className="text-gray-500">Room Type</div>
          <div className="text-white">{newRoom?.roomType}</div>
        </div>
        <Link
          to="/joinroom"
          className="py-2 px-10 text-[12px] font-poppins tracking-wide rounded-md bg-primary_green text-black"
        >
          Create Room
        </Link>
        <div
          className="py-2 px-10 text-[12px] font-poppins tracking-wide rounded-md bg-primary_gray text-white border-2 border-white"
          onClick={onCloseRoomModal}
        >
          Cancel
        </div>
      </div>
    </div>,
    document.getElementById("createRoomPortal")
  );
};

export default CreateRoomModal;
