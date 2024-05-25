import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { useState } from "react";
import { StreamLanguage } from '@codemirror/language';
import { javascript } from "@codemirror/lang-javascript";
import { java } from "@codemirror/lang-java";
import { cpp } from "@codemirror/lang-cpp";
import { python } from "@codemirror/lang-python";
import axios from "axios";
import { RemoveScrollBar } from "react-remove-scroll-bar";
import { dracula } from "@uiw/codemirror-theme-dracula";
import { useStateValue } from "../context/stateProvider";
const codeObj = {
  python: `import sys;

def add(a,b):
  # enter your code here

if __name__ == "__main__":
  a = int(sys.argv[1])
  b = int(sys.argv[2])
  result = int(sys.argv[3])
  print(add(a,b) == result)
`,
  java: "java code",
  cpp: "cpp code",
};
const RoomPageEditorSection = () => {
  const [
    {
      newRoom,
      joinRoomFlag,
      joinedRoom,
      outputStatus,
      activeQuestion,
      user,
      selectedLang,
    },
    dispatch,
  ] = useStateValue();
  const [code, setCode] = useState(codeObj[selectedLang]);
  const userId = "123";
  const onChange = React.useCallback((value, ViewUpdate) => {
    setCode(value);
  }, []);
  const runCode = async (joinedRoom) => {
    console.log(code);
    const url = "https://devs-clash.onrender.com/runcode";
    const body = {
      code: code,
      user_name: user?.user_name,
      roomId: joinRoomFlag ? joinedRoom?.id : newRoom.id,
      Q: activeQuestion,
      lang: selectedLang,
    };
    console.log(body);
    axios
      .patch(url, body, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data.msg[0]);
        dispatch({
          type: "SET_OUTPUT_STATUS",
          outputStatus: response.data.msg[0],
        });
        console.log(response.data.msg[0]);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div className="bg-primary_gray font-monte flex-col w-[32rem] h-[auto] justify-start px-1 gap-4 pt-[4rem]">
      <div className="w-auto items-center justify-start flex gap-2 ml-[20px] mb-[15px]">
        <select
          id="topic"
          name="topic"
          className="bg-primary_gray border-[1px] p-[6px]"
          onChange={(e) => {
            dispatch({
              type: "SET_LANG",
              selectedLang: e.target.value,
            });
          }}
        >
          <option value="python">Python</option>
          <option value="cpp">C++</option>
          <option value="java">Java</option>
          <option value="javascript">Js</option>
        </select>
        <div className="ml-auto">00:02:30</div>
      </div>

      <CodeMirror
        value={codeObj[selectedLang]}
        height="100%"
        width="30rem"
        theme={dracula}
        onChange={onChange}
        extensions={selectedLang=="python"?python({}):selectedLang=='java'?java({}):cpp({})}

      ></CodeMirror>

      <div
        onClick={() => {
          runCode(joinedRoom);
        }}
        className="absolute bottom-[1rem] ml-[15px] cursor-pointer py-[6px] px-[36px] text-[16px] font-medium font-inter tracking-wide rounded-md items-center justify-center flex bg-primary_green text-black"
      >
        {" "}
        Submit Now
      </div>
    </div>
  );
};

export default RoomPageEditorSection;
