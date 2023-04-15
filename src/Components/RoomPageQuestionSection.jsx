import React from "react";
import { useStateValue } from "../context/stateProvider";

const RoomPageQuestionSection = () => {
  const [{ questions }, dispatch] = useStateValue();
  let c = 0;
  return (
    <div className="bg-primary_gray flex-col h-[100vh] px-2 justify-start gap-4 flex pt-[7rem]">
      {questions?.map((item) => {
        c++;
        return (
          <div
            key={c}
            onClick={() => {
              dispatch({
                type: "SET_ACTIVE_QUESTION",
                activeQuestion: questions.indexOf(item),
              });
            }}
            className="w-[25px] aspect-square rounded-md text-[10px] font-semibold items-center justify-center flex bg-primary_green text-black"
          >
            Q{questions.indexOf(item) + 1}
          </div>
        );
      })}
    </div>
  );
};

export default RoomPageQuestionSection;
