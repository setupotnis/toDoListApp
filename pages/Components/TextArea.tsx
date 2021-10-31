import { Button, Card, TextField } from "@mui/material";
import React from "react";

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

const TextArea = ({
  input,
  handleChange,
  inputRef,
  handleSubmit,
  label,
  buttonLabel,
}) => {
  return (
    <Card sx={{ minWidth: 700 }}>
      <form>
        <TextField
          fullWidth
          id="outlined-basic"
          label={label}
          variant="outlined"
          value={input}
          style={{ margin: 10, maxWidth: "80%" }}
          onChange={handleChange}
          inputRef={inputRef}
          onSubmit={handleSubmit}
        />
        <Button
          type="submit"
          variant="contained"
          style={toDoButtonStyle}
          onClick={handleSubmit}
        >
          {buttonLabel}
        </Button>
      </form>
    </Card>
  );
};

export default TextArea;
