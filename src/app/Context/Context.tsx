// import { TodoContextType, ITodo } from '@/types/types.todo.ts'
'use client'
import * as React from 'react';
import {ITodo,TodoContextType} from '../../../types/todo'



export const TodoContext = React.createContext<TodoContextType | null>(null);

const TodoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [todos, setTodos] = React.useState<ITodo[]>([
    {
      id: 1,
      title: 'post 1',
      description: 'this is a description',
      status: false,
    },
    {
      id: 2,
      title: 'post 2',
      description: 'this is a description',
      status: true,
    },
  ]);
  

const saveTodo = (todo:ITodo)=>{
  const newTodo :ITodo={
    id:Math.random(),
    title:todo.title,
    description:todo.description,
    status: false,
  }
  setTodos([...todos, newTodo])
}

const updateTodo = (id: number) => {
  todos.filter((todo: ITodo) => {
    if (todo.id === id) {
      todo.status = true
      setTodos([...todos])
    }
  })
}
return (
  <TodoContext.Provider value={{ todos, saveTodo, updateTodo }}>
    {children}
  </TodoContext.Provider>
);

}


export default TodoProvider;
