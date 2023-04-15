import React, { useState } from "react";
import axios from "axios";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../context/stateProvider";
const JoinRoomModal = ({ open, onClose }) => {
  const [{user}, dispatch] = useStateValue();
  const navigate = useNavigate();
  const [enteredRoomCode, setEnteredRoomCode] = useState("");
  if (!open) return null;
  return ReactDOM.createPortal(
    <div className="absolute z-10 w-[100vw] flex justify-center h-[100vh] backdrop-blur-sm bg-black/30">
      <div className="h-[15rem] w-[20rem] bg-primary_gray flex flex-col gap-5 items-center justify-center">
        <div className="text-primary_green font-monte">Enter Room Code</div>
        <input
          type="text"
          onChange={(e) => {
            setEnteredRoomCode(e.target.value);
            console.log(enteredRoomCode);
          }}
        ></input>
        <div
          onClick={() => {
            axios
              .patch("https://devs-clash.onrender.com/join", {
                user_name: user.user_name,
                roomId: enteredRoomCode,
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
          }}
          className="py-2 px-10 text-[12px] font-poppins tracking-wide rounded-md bg-primary_green text-black"
        >
          Join Room
        </div>
        <div
          className="py-2 px-10 text-[12px] font-poppins tracking-wide rounded-md bg-primary_gray text-white border-2 border-white"
          onClick={onClose}
        >
          Cancel
        </div>
      </div>
    </div>,
    document.getElementById("joinRoomPortal")
  );
};

export default JoinRoomModal;
