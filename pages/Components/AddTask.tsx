import { NextComponentType } from "next";
import React, { useEffect, useRef, useState } from "react";
import styles from "../../styles/AddTask.module.css";
import { Button, Card, TextField } from "@mui/material";

const toDoButtonStyle = {
  padding: "16px",
  border: "none",
  borderRadius: "0 4px 4px 0",
  cursor: "pointer",
  height: "fit-content",
  outline: "none",
  display: "inline",
  top: "9px",
  width: "15%",
};

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
          <Card sx={{ minWidth: 700 }}>
            <TextField
              fullWidth
              id="outlined-basic"
              label={edit.text}
              variant="outlined"
              value={input}
              style={{ margin: 10, maxWidth: "80%" }}
              onChange={handleChange}
              inputRef={inputRef}
            />
            <Button
              type="submit"
              variant="contained"
              style={toDoButtonStyle}
              onClick={handleSubmit}
            >
              Update
            </Button>
          </Card>
        </>
      ) : (
        <>
          <Card sx={{ minWidth: 700 }}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Item"
              variant="outlined"
              value={input}
              style={{ margin: 10, maxWidth: "80%" }}
              onChange={handleChange}
              inputRef={inputRef}
            />
            <Button
              type="submit"
              variant="contained"
              style={toDoButtonStyle}
              onClick={handleSubmit}
            >
              Add
            </Button>
          </Card>
        </>
      )}
    </div>
  );
};

export default AddTask;
