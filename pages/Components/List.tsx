import { Typography } from "@mui/material";
import { NextComponentType } from "next";
import React, { SetStateAction, useState } from "react";
import AddTask from "./AddTask";
import Todo from "./Todo";

const List: NextComponentType = ({}) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo: any) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    setTodos([todo, ...todos]);
  };

  const updateTodo = (toDoId: number, newValue: any) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setTodos((prev: any) =>
      prev.map((item: any) => (item.id === toDoId ? newValue : item))
    );
  };

  const deleteTodo = (id: any) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeArr);
  };

  const completeTodo = (id: any) => {
    let updatedTodos = todos.map((todo: any) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div>
      <AddTask onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
};

export default List;
