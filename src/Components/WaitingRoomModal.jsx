import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { useStateValue } from "../context/stateProvider";
const WaitingRoomModal = ({
  openWaitingRoomModal,
  onCloseWaitingRoomModal,
}) => {
  const [{ newRoom }, dispatch] = useStateValue();
  const [remainingMinute, setRemainingMinute] = useState(0);
  const [remainingHour, setRemainingHour] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      const TIME = new Date();
      setRemainingMinute(newRoom.startTimeMinute - TIME.getMinutes());
      setRemainingHour(newRoom.startTimeHour - TIME.getHours());
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!openWaitingRoomModal) return null;
  // console.log(newRoom)
  return ReactDOM.createPortal(
    <div className="absolute z-10 w-[100vw] flex justify-center h-[100vh] backdrop-blur-sm bg-black/30">
      <div className="h-[15rem] w-[20rem] bg-primary_gray flex flex-col gap-5 items-center justify-center">
      <div
            className="py-2 px-10 text-[12px] font-poppins tracking-wide rounded-md bg-primary_gray text-white border-2 border-white"
            onClick={onCloseWaitingRoomModal}
          >
            Enter Room
          </div>
        {/* {remainingMinute > 0 ? (
          <>
            <div className="text-primary_green font-monte">Room unlocks in</div>
            <div className="py-2 px-10 text-[12px] font-poppins tracking-wide rounded-md bg-primary_green text-black">
              {remainingHour}:{remainingMinute} min
            </div>
          </>
        ) : (
          <div
            className="py-2 px-10 text-[12px] font-poppins tracking-wide rounded-md bg-primary_gray text-white border-2 border-white"
            onClick={onCloseWaitingRoomModal}
          >
            Enter Room
          </div>
        )} */}
      </div>
    </div>,
    document.getElementById("joinRoomPortal")
  );
};

export default WaitingRoomModal;
