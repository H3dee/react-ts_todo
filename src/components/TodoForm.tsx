import React, { useState, useRef } from "react";
import { Handlers } from "../interfaces/interfaces";
import "../scss/todoForm.scss";


type TodoFormProps = Handlers

const TodoForm: React.FC<TodoFormProps> = ({onAdd}) => {
  const [title, setTitle] = useState<string>('')
  const inputRef = useRef<HTMLInputElement>(null)

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
      setTitle(event.target.value)
  }

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if(event.key === 'Enter'){
      onAdd!(title)
      inputRef.current!.blur()
      setTitle('')
    }
  }

  return (
    <div className="todo-form">
      <input
        ref={inputRef}
        type="text"
        id="create"
        placeholder="Enter task"
        value={title}
        onChange={changeHandler}
        onKeyPress={keyPressHandler}
/>
      <label htmlFor="create">Enter some task at field below!</label>
    </div>
  );
};

export default TodoForm;
