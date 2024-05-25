import React, { useEffect } from "react";
import { RemoveScrollBar } from "react-remove-scroll-bar";
import { useStateValue } from "../context/stateProvider";
const RoomPageQuestionDisplaySection = () => {
  const [{ questions, activeQuestion }, dispatch] = useStateValue();
  useEffect(() => {
    console.log("hello", questions);
  }, [questions]);
  // console.log(questions)
  return (
    <div className="bg-primary_gray_light font-poppins w-[20rem] pt-[5rem] px-2 gap-2 flex text-[14px] tracking-wide flex-col justify-start">
      <RemoveScrollBar />
      <div className="border-primary_green border-[1.5px] mb-5 tracking-[.75px] font-semibold text-center text-primary_green text-[10px] w-[3.5rem] rounded-xl p-1 py-[2px]">
        {questions[activeQuestion]?.difficulty}
      </div>
      <div className="text-[20px] font-semibold">
        Type :{" "}
        <span className="text-[14px] font-normal">
          {questions[activeQuestion]?.topic}
        </span>
      </div>
      <div className="text-[20px] font-semibold">Questions</div>
      <div>{questions[activeQuestion]?.statement}</div>
      <div className="text-[20px] font-semibold">Explanation</div>
      <div>{questions[activeQuestion]?.explanation}</div>
      <div className="text-[20px] font-semibold">Testcase</div>
      <div className="">
        {questions[activeQuestion]?.testcase?.map((item, index) => {
          return (
            <div key={index}>
              <span className="font-semibold">Testcase No.{index + 1} :</span>
              {
                <div>
                  <div>Number of inputs : {item[0]}</div>
                  <div>
                    Input :{" "}
                    {item[1]?.map((input) => {
                      return <span>{input} </span>;
                    })}
                  </div>
                  <div>
                    Output :{" "}
                    {item[2]?.map((output) => {
                      return <span>{output} </span>;
                    })}
                  </div>
                </div>
              }
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RoomPageQuestionDisplaySection;
