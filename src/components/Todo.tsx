import React from "react";
import { Handlers } from "../interfaces/interfaces";
import "../scss/todoItem.scss";

interface TodoItemProps {
  id: number;
  content: string;
  isCompleted: boolean;
}

type Props = TodoItemProps & Handlers;

const TodoItem: React.FC<Props> = (props) => {
  const deleteHandler = (event: React.MouseEvent):void => {
    event.stopPropagation()
    props.onDelete!(props.id)
  }

  return (
    <div
      className={props.isCompleted ? "todo-item completed" : "todo-item"}
      onClick={() => props.onToggle!(props.id)}
    >
      <div className="todo-item__container">
        <div className="todo-item__check-icon"></div>
        <div className="todo-item__content">{props.content}</div>
        <div
          className="todo-item__delete-icon"
          onClick={(e) => deleteHandler(e)}
        ></div>
      </div>
    </div>
  );
};

export default TodoItem;
