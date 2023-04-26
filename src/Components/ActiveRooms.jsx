import React, { useMemo } from "react";
import ActiveRoomCard from "./ActiveRoomCard";
import axios from "axios";
import loader from '../assets/loader.svg'
import { useState, useEffect } from "react";
const ActiveRooms = () => {
  const [availableRoom, setAvailableRoom] = useState(null);
  useEffect(() => {
    axios
      .get("https://devs-clash.onrender.com/", {})
      .then((res) => {
        // console.log(res.data);
        setAvailableRoom(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="flex w-full min-h-[50vh] pb-[2rem] gap-[18px] items-center  flex-wrap">
      {availableRoom?availableRoom.map((item) => {
        return (
          <ActiveRoomCard
            id={item.id}
            topics={item.topic}
            questions={item.noOfQuestions}
            difficulty={item.difficulty}
            duration={item.duration}
            entryFee={item.difficulty}
            startTimeHour={item.startTimeHour}
            startTimeMinute={item.startTimeMinute}
            key={item.id}
          ></ActiveRoomCard>
        );
      }):<div className="w-[100vw] flex items-start justify-center"><img src={loader} height={50} width={50}/></div>}
      
    </div>
  );
};

export default ActiveRooms;
