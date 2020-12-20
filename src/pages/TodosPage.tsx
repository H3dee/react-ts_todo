import React, { useState, useEffect } from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import { Todo } from "../interfaces/interfaces";

const TodosPage: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addHandler = (title: string) => {
    setTodos((prev) => {
      return [{ id: Date.now(), title: title, completed: false }, ...prev];
    });
  };

  const toggleHandler = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) todo.completed = true;

        return todo;
      })
    );
  };

  const removeHandler = (id: number) => {
    const shouldRemove = window.confirm("Confirm action on this page.");

    shouldRemove &&
      setTodos((prev) => {
        return prev.filter((note) => note.id !== id);
      });
  };

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos") || "[]");

    setTodos(savedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <TodoForm onAdd={addHandler} />
      <TodoList
        todos={todos}
        onToggle={toggleHandler}
        onDelete={removeHandler}
      />
    </>
  );
};

export default TodosPage;
