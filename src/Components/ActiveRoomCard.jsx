import React from "react";
import { FiShare2 } from "react-icons/fi";
import axios from "axios";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import GrpIcon from "../assets/community.svg";
import { useStateValue } from "../context/stateProvider";
const ActiveRoomCard = ({

  id,
  topics,
  questions,
  difficulty,
  duration,
  startTimeHour,
  startTimeMinute,
  price,
}) => {
  const [{user}, dispatch] = useStateValue();
  const navigate = useNavigate();
  const joinRoomByCard = (id) => {
    axios
    .patch("https://devs-clash.onrender.com/join", {
      user_name: user.user_name,
      roomId: id,
    })
    .then((res) => {
      dispatch({
        type: "SET_QUESTIONS",
        questions: res.data.questions,
      });
      console.log(res.data);
      dispatch({
        type:"SET_JOINED_ROOM",
        joinedRoom:res.data
       })
    })
    .catch((err) => {
      console.log(err);
    });

  navigate("/joinRoom");
  };
  return (
    <div className="flex cursor-pointer flex-col bg-primary_gray_light rounded-lg w-[15rem] py-[1rem] px-[12px] gap-[20px] font-inter text-white h-[auto]">
      <div className="flex justify-between items-center">
        <span className="font-extrabold text-[18px] tracking-widest font-inter">
          ID-{id}
        </span>
        <div className="w-[auto] py-[8px] rounded-3xl bg-primary_gray justify-center items-center px-[14px] flex gap-2">
          <div>
            <img src={GrpIcon} alt="" />
          </div>
          <span className="text-primary_green text-[12px]">2</span>
        </div>
      </div>
      <div className="flex flex-col text-[13px] gap-[11.4px]">
        <div className="flex gap-2">
          <span className="text-gray-400">Topics: </span>
          {topics}
        </div>
        <div className="flex gap-2">
          <span className="text-gray-400">No. of Questions: </span>
          {questions}
        </div>
        <div className="flex gap-2">
          <span className="text-gray-400">Difficulty: </span>
          {difficulty}
        </div>
        <div className="flex gap-2">
          <span className="text-gray-400">Duration: </span>
          {duration} min
        </div>
        <div className="flex gap-[6px]">
          <span className="text-primary_green">Schedule Time: </span>
          <p className="text-primary_green">
            {startTimeHour}:{startTimeMinute}
          </p>
        </div>
      </div>
      <div className="justify-between mt-[8px] items-center flex w-full">
        <FiShare2 className="text-[22px]" />
        <div className="text-[14px] px-[18px] py-[4px] rounded-md bg-primary_green text-black ">
          <span
            onClick={() => {
              joinRoomByCard(id)
            }}
            className="font-semibold text-black"
          >
            Join for $40
          </span>
        </div>
      </div>
    </div>
  );
};

export default ActiveRoomCard;
