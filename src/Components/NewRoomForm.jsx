import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import CreateRoomModal from "./CreateRoomModal";
import { useStateValue } from "../context/stateProvider";
import { v4 as uuid } from "uuid";
import { BsPencilSquare } from "react-icons/bs";
import axios from "axios";
const NewRoomForm = () => {
  const [{ newRoom,user, questions }, dispatch] = useStateValue();
  const [createRoomRequest, setcreateRoomRequest] = useState(false);
  const [topic, setTopic] = useState("");
  const [duration, setDuration] = useState("");
  const [noOfQuestions, setNoOfQuestonsQuestions] = useState("");
  const [startTime, setStartTime] = useState("");
  const [startTimeHour, setStartTimeHour] = useState("");
  const [startTimeMinute, setStartTimeMinute] = useState("");
  const [roomType, setRoomType] = useState("public");
  const [difficulty, setDifficulty] = useState("");
  const unique_id = uuid();
  const small_id = unique_id.slice(0, 8);
  return (
    <div className="w-full  bg-black font-inter text-white h-[auto] flex flex-col justify-center items-center p-4">
      {
        <CreateRoomModal
          openRoomModal={createRoomRequest}
          onCloseRoomModal={() => {
            setcreateRoomRequest(!createRoomRequest);
          }}
        />
      }
      <form className="grid-cols-2 items-center text-[1.25rem] pt-[4rem] grid px-5 w-[50rem] gap-9 ">
        <h2 className=" col-start-1 text-[35px] flex items-center gap-3 col-span-2 tracking-wide mb-4">
          Rick Rules <BsPencilSquare className="text-[18px]" />
        </h2>

        <label htmlFor="topic">Topic</label>
        <select
          className="text-[16px] text-[#999999] bg-[#363636] py-2 px-3 items-center"
          required
          id="topic"
          name="topic"
          onChange={(e) => {
            setTopic(e.target.value);
          }}
        >
          <option value=" " className="text-[#999999] focus:white bg-blue">
            Select Topic
          </option>
          <option value="Array">Array</option>
          <option value="Loop">Loop</option>
          <option value="String">String</option>
          <option value="Graphs">Graphs</option>
        </select>

        <label htmlFor="duration">Duration</label>
        <div
          id="duration"
          onChange={(e) => {
            setDuration(e.target.value);
          }}
          className="flex text-[16px] justify-between  gap-5"
        >
          <input
            className=""
            type="radio"
            id="quater"
            name="radioDuration"
            value="15"
          />
          <label className="text-[#999999]" htmlFor="quater">
            15
          </label>

          <input
            className=""
            type="radio"
            id="half"
            name="radioDuration"
            value="30"
          />
          <label className="text-[#999999]" htmlFor="half">
            30
          </label>

          <input
            className=""
            type="radio"
            id="semi"
            name="radioDuration"
            value="45"
          />
          <label className="text-[#999999]" htmlFor="semi">
            45
          </label>

          <input
            className=""
            type="radio"
            id="full"
            name="radioDuration"
            value="60"
          />
          <label className="text-[#999999]" htmlFor="full">
            60
          </label>
        </div>

        <label htmlFor="questions">No of Question</label>
        <select
          className="py-2 text-[#999999] bg-primary_gray_light"
          id="questions"
          name="number"
          onChange={(e) => {
            setNoOfQuestonsQuestions(e.target.value);
          }}
        >
          <option className="" value="1">
            1
          </option>
          <option className="" value="2">
            2
          </option>
          <option className="" value="3">
            3
          </option>
          <option className="" value="5">
            5
          </option>
          <option className="" value="6">
            6
          </option>
          <option className="" value="7">
            7
          </option>
          <option className="" value="8">
            8
          </option>
          <option className="" value="9">
            9
          </option>
          <option className="" value="10">
            10
          </option>
        </select>

        <label htmlFor="roomTime">Schedule Time</label>
        <div
          id="roomTime"
          className="flex text-[16px] gap-5"
          onChange={(e) => {
            let [TimeHour, TimeMinute] = e.target.value.split(":");
            setStartTime(e.target.value);
            setStartTimeHour(TimeHour);
            setStartTimeMinute(TimeMinute);
          }}
        >
          <input
            className="py-2  text-[#999999] bg-[#363636]"
            type="date"
            id="roomtimeDate"
            name="roomtimeDate"
          />
          <input
            className="py-2 text-[#999999] bg-[#363636]"
            type="time"
            id="roomTimeTime"
            name="roomTimeTime"
          />
        </div>

        <label htmlFor="difficulty">Difficulty</label>

        <div
          id="difficulty"
          className="flex gap-5 justify-between"
          onChange={(e) => {
            setDifficulty(e.target.value);
          }}
        >
          <input type="radio" id="easy" name="radioDifficulty" value="Easy" />
          <label className="bg-[#363636] text-[#999999]" htmlFor="easy">
            Easy
          </label>

          <input
            type="radio"
            id="medium"
            name="radioDifficulty"
            value="Medium"
          />
          <label className="bg-[#363636] text-[#999999]" htmlFor="medium">
            Medium
          </label>

          <input type="radio" id="hard" name="radioDifficulty" value="Hard" />
          <label className="bg-[#363636] text-[#999999]" htmlFor="hard">
            Hard
          </label>
        </div>
        <label htmlFor="roomTypeBox">Room Type</label>
        <div
          id="roomTypeBox"
          className="flex gap-5 justify-between"
          onChange={(e) => {
            setRoomType(e.target.value);
          }}
        >
          <input type="radio" id="public" name="radioRoomType" value="public" />
          <label className="bg-[#363636] text-[#999999]" htmlFor="public">
            Public
          </label>

          <input type="radio" id="ptivate" name="radioRoomType" value="private" />
          <label className="bg-[#363636] text-[#999999]" htmlFor="private">
            Private
          </label>
        </div>

        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch({
              type: "SET_NEW_ROOM",
              newRoom: {
                id: small_id,
                topic: topic,
                duration: duration,
                noOfQuestions: noOfQuestions,
                startTime: startTime,
                startTimeHour: startTimeHour,
                startTimeMinute: startTimeMinute,
                startTimeSecound: "00",
                difficulty: difficulty,
                roomType: roomType,
                participants: [],
                user_name:user?.user_name,
                questions: [],
                winner: "",
              },
            });
            setcreateRoomRequest(!createRoomRequest);

            axios
              .post(
                "https://devs-clash.onrender.com/create",
                { id: small_id,
                  topic: topic,
                  duration: duration,
                  noOfQuestions: noOfQuestions,
                  startTime: startTime,
                  startTimeHour: startTimeHour,
                  startTimeMinute: startTimeMinute,
                  startTimeSecound: "00",
                  difficulty: difficulty,
                  roomType: roomType,
                  user_name:user?.user_name,
                  questions: [],
                  winner: "" },
                {
                  headers: {
                    "Content-Type": "application/json",
                  },
                }
              )
              .then((response) => {
                // console.log(newRoom);
                // console.log(Object.values(response));
                console.log(response)
                dispatch({
                  type: "SET_QUESTIONS",
                  questions: Object.values(response.data.questions),
                });
              })
              .catch((error) => {
                console.error("Error:", error);
              });
          }}
          className="py-[6px] px-[36px] text-[16px]  font-medium font-inter tracking-wide rounded-md items-center justify-center flex bg-primary_green text-black"
        >
          Create Room
        </button>
        <Link
          to="/"
          className="py-[6px] px-[36px] text-[16px] font-medium font-inter tracking-wide rounded-md items-center justify-center flex border-2 border-white text-white"
        >
          Cancel
        </Link>
      </form>
    </div>
  );
};

export default NewRoomForm;
