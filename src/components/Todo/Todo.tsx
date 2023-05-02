// components/Todo.tsx
import * as React from "react";
import { ITodo } from "../../../types/todo";

type Props = {
  todo: ITodo;
  updateTodo: (id: number) => void;
};
let render = 0

const Todo: React.FC<Props> = ({ todo, updateTodo }) => {

  render++
  const checkTodo: string = todo.status ? `line-through  text-red-300` : "";
  return (
    <div className="my-12 Card">
      <h1>{render}</h1>
      <div className="bg-bgDark border flex flex-col space-y-2 items-center w-2/4 m-auto">
        <h1 className={checkTodo}>{todo.title}</h1>
        <span className={`${checkTodo}`}>{todo.description}</span>

        <button
          onClick={() => updateTodo(todo.id)}
          className={todo.status ? `border p-2 rounded` : "Card--button"}
        >
          Complete
        </button>
      </div>
    </div>
  );
};
export default Todo;
