import React, { useEffect } from "react";
import { RemoveScrollBar } from "react-remove-scroll-bar";
import { useStateValue } from "../context/stateProvider";
const RoomPageQuestionDisplaySection = () => {
  const [{ questions, activeQuestion }, dispatch] = useStateValue();
  // useEffect(()=>{console.log(questions)},[questions])
  // console.log(questions)
  return (
    <div className="bg-primary_gray_light font-poppins w-[20rem] pt-[5rem] px-2 gap-2 flex text-[14px] tracking-wide flex-col justify-start">
      <RemoveScrollBar />
      <div className="text-[20px]"> Type : Array</div>
      <div className="border-primary_green border-[1.5px] mb-5 tracking-[.75px] font-semibold text-center text-primary_green text-[10px] w-[3.5rem] rounded-xl p-1 py-[2px]"> Easy</div>
      
      <div>{questions[activeQuestion]?.st}</div>
    </div>
  );
};

export default RoomPageQuestionDisplaySection;
