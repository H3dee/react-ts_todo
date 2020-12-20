import React from "react";
import { Handlers, Todo } from "../interfaces/interfaces";
import TodoItem from "./Todo";

interface List {
  todos: Todo[];
}

type ListProps = List & Handlers;

const TodoList: React.FC<ListProps> = ({ todos, onToggle, onDelete }) => {
  if (!todos.length)
    return (
      <div
        className="todo-list__empty"
        style={{ fontSize: "25px", textAlign: "center", fontFamily: 'Roboto, sans-serif', color: '#c7c7c7'}}
      >
        There are no notes yet...
      </div>
    );

  return (
    <div className="todo-list">
      {todos.map((todo) => {
        return (
          <TodoItem
            key={String(todo.id)}
            id={todo.id}
            content={todo.title}
            isCompleted={todo.completed}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
