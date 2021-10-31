import { NextComponentType } from "next";
import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddTask from "./AddTask";
import styles from "../../styles/Todo.module.css";
import { IconButton } from "@mui/material";

const Todo: NextComponentType = ({
  todos,
  completeTodo,
  deleteTodo,
  updateTodo,
}) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value: any) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <AddTask edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo: any, index: number) => (
    <div
      className={
        todo.isComplete
          ? `${styles.todoRow} + " " + ${styles.complete}`
          : styles.todoRow
      }
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className={styles.icons}>
        <IconButton
          aria-label="edit"
          onClick={() => setEdit({ id: todo.id, text: todo.text })}
        >
          <EditIcon className={styles.editIcon} />
        </IconButton>
        <IconButton aria-label="delete" onClick={() => deleteTodo(todo.id)}>
          <DeleteIcon className={styles.deleteIcon} />
        </IconButton>
      </div>
    </div>
  ));
};

export default Todo;
