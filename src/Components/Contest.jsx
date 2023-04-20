import React, { useState, useEffect } from "react";
import { useStateValue } from "../context/stateProvider";
import ActiveRoomCard from "./ActiveRoomCard";
import axios from "axios";
const Contest = () => {
  const [contestData, setContestData] = useState(null);
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    if(user)
    {
    axios
      .post("https://devs-clash.onrender.com/mycontest", {
        user_name: user.user_name,
      })
      .then((res) => {
        console.log(res.data.contest);
        setContestData(res.data.contest);
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }, []);
  
  return (
    <main className="w-[100vw] h-[auto] pt-[5.25rem] gap-5 px-[2rem] bg-primary_gray flex flex-col items-center text-white">
      {user?<div className="flex w-full  pb-[2rem] gap-[18px] items-center  flex-wrap">
        {contestData?.map((item) => {
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
        })}
      </div>:<div className="h-[100vh] text-3xl text-primary_green font-bold flex items-start justify-center">Login to see contest</div>}
      
    </main>
  );
};

export default Contest;
