import { NextComponentType } from "next";
import React, { useEffect, useRef, useState } from "react";
import styles from "../../styles/AddTask.module.css";
import TextArea from "./TextArea";

const updateLabel = "UPDATE";
const addItemlabel = "Item";
const add = "ADD";

const AddTask: NextComponentType = ({ onSubmit, edit }) => {
  const [input, setInput] = useState(edit ? edit.value : "");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e: any) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };

  return (
    <div className={styles.panel}>
      {edit ? (
        <>
          <TextArea
            input={input}
            handleChange={handleChange}
            inputRef={inputRef}
            handleSubmit={handleSubmit}
            label={edit.text}
            buttonLabel={updateLabel}
          />
        </>
      ) : (
        <>
          <TextArea
            input={input}
            handleChange={handleChange}
            inputRef={inputRef}
            handleSubmit={handleSubmit}
            label={addItemlabel}
            buttonLabel={add}
          />
        </>
      )}
    </div>
  );
};

export default AddTask;
