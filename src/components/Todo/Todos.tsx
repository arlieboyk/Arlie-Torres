'use client'
import * as React from 'react';
import { TodoContextType,ITodo } from '../../../types/todo';
import { TodoContext } from '../../app/Context/Context';
import Todo from './Todo';

const Todos = () => {
  const { todos, updateTodo } = React.useContext(TodoContext) as TodoContextType;
  return (
    <div className='border '>
      {todos.map((todo: ITodo) => (
        <Todo key={todo.id} updateTodo={updateTodo} todo={todo} />
      ))}
    </div>
  );
};

export default Todos;