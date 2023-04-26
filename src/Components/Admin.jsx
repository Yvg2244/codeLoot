import React, { useEffect, useState } from "react";
import { Formik, useFormik } from "formik";
import axios from "axios";
const Admin = () => {
  const [finalQuestionsUploaded, setFinalQuestionsUploaded] = useState(null);
  useEffect(() => {
    axios
      .get("https://devs-clash.onrender.com/getQuestions", {})
      .then((res) => {
        console.log(res.data);
        setFinalQuestionsUploaded(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const validate = (values) => {
    const errors = {};
    if (!values.qId) errors.qId = "Required";
    if (!values.statement) errors.statement = "Required";
    if (!values.testcase) errors.testcase = "Required";
    if (!values.topic) errors.topic = "Required";
    if (!values.difficulty) errors.difficulty = "Required";
    if (!values.explanation) errors.explanation = "Required";
    return errors;
  };
  const formik = useFormik({
    initialValues: {
      qId: "",
      statement: "",
      testcase: {},
      topic: "",
      difficulty: "",
      explanation: "",
    },
    onSubmit: (values) => {
      console.log(values);
      axios
        .post("https://devs-clash.onrender.com/uploadQuestion", values)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      alert("question");
    },
  });
  return (
    <main className="w-[100vw] h-[auto] pt-[5.25rem] px-[2rem] bg-primary_gray flex flex-col items-center text-white">
      <form
        action=""
        className="flex h-auto flex-col p-5 rounded-md  items-center bg-primary_black text-lg  w-fit gap-3"
        onSubmit={formik.handleSubmit}
      >
        <label htmlFor="qId">Question ID</label>
        <input
          className="m-2"
          type="text"
          name="qId"
          id="qId"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.qId}
        />
        <label htmlFor="statement">Statement</label>
        <input
          className="m-2"
          type="text"
          name="statement"
          id="statement"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.statement}
        />{" "}
        <label htmlFor="testcase">Testcases</label>
        <input
          className="m-2"
          type="text"
          name="testcase"
          id="testcase"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.testcase}
        />{" "}
        <label htmlFor="topic">Topic</label>
        <input
          className="m-2"
          type="text"
          name="topic"
          id="topic"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.topic}
        />{" "}
        <label htmlFor="difficulty">Difficulty</label>
        <input
          className="m-2"
          type="text"
          name="difficulty"
          id="difficulty"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.difficulty}
        />
        <label htmlFor="explanation">Explanation</label>
        <input
          className="m-2"
          type="text"
          name="explanation"
          id="explanation"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.explanation}
        />
        <button
          className="py-[6px] mt-4 px-[36px] text-[16px] font-medium font-inter tracking-wide rounded-md bg-primary_green text-black "
          type="submit"
        >
          Submit
        </button>
      </form>
      <section className="flex flex-col w-[100vw] justify-between">
        <div className="grid grid-cols-5 text-white gap-4">
          <p>QId</p>
          <p>Topic</p>
          <p>Statement</p>
          <p>Testcase</p>
          <p>Explanation</p>
        </div>

        {finalQuestionsUploaded?.map((item) => {
          return (
            <div className="grid grid-cols-5  gap-5 w-[100vw]">
              <p>{item.qId}</p>
              <p>{item.topic}</p>
              <p className="w-[5rem]  h-[auto]">{item.statement}</p>
              <p className="w-[5rem] h-[auto]">{item.testcase}</p>
              <p className="w-[5rem]  h-[auto]">{item.explanation}</p>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default Admin;
