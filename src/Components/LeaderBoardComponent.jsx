import React, { useEffect } from "react";
import { RxCrossCircled } from "react-icons/rx";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { useStateValue } from "../context/stateProvider";
import axios from "axios";
const LeaderBoardComponent = () => {
  const [
    { newRoom, joinRoomFlag, joinedRoom, outputStatus, activeQuestion, user },
    dispatch,
  ] = useStateValue();

  useEffect(() => {
    // console.log("working")
  }, [outputStatus]);
console.log(outputStatus)
  return (
    <div className="bg-primary_gray_light font-poppins h-[100vh] w-[20rem] pt-[5rem] py-5 px-2 gap-4 flex text-[1rem] tracking-wide flex-col">
      <p className="text-primary_green text-[2rem]">Test Case Result</p>
      <div className="flex gap-2 items-center">
       
        <p className="text-primary_green">{outputStatus}</p>
      </div>
      
    </div>
  );
};

export default LeaderBoardComponent;
