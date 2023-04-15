import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useStateValue } from "../context/stateProvider";
const WaitingRoomModalJoinRoom = ({
  openWaitingRoomModalJoinRoom,
  onCloseWaitingRoomModalJoinRoom,
}) => {
  const [{ joinedRoom }, dispatch] = useStateValue();
  const [remainingMinute, setRemainingMinute] = useState(0);
  const [remainingHour, setRemainingHour] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      const TIME = new Date();
      setRemainingMinute(joinedRoom?.startTimeMinute - TIME.getMinutes());
      setRemainingHour(joinedRoom?.startTimeHour - TIME.getHours());
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!openWaitingRoomModalJoinRoom) return null;
  // console.log(joinedRoom)
  return ReactDOM.createPortal(
    <div className="absolute z-10 w-[100vw] flex justify-center h-[100vh] backdrop-blur-sm bg-black/30">
      <div className="h-[15rem] w-[20rem] bg-primary_gray flex flex-col gap-5 items-center justify-center">
        {remainingMinute > 0 ? (
          <>
            <div className="text-primary_green font-monte">Room unlocks in</div>
            <div className="py-2 px-10 text-[12px] font-poppins tracking-wide rounded-md bg-primary_green text-black">
              {remainingHour}:{remainingMinute} min
            </div>
          </>
        ) : (
          <div
            className="py-2 px-10 text-[12px] font-poppins tracking-wide rounded-md bg-primary_gray text-white border-2 border-white"
            onClick={onCloseWaitingRoomModalJoinRoom}
          >
            Enter Blah Blah Room
          </div>
        )}
      </div>
    </div>,
    document.getElementById("waitingRoomPortal")
  );
};

export default WaitingRoomModalJoinRoom;
