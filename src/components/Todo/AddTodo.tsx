
'use client'
import * as React from 'react'

import { TodoContext } from '@/app/Context/Context'
import { TodoContextType,ITodo } from '../../../types/todo'


const AddTodo:React.FC = ()=>{
    const {saveTodo} = React.useContext(TodoContext) as TodoContextType
    const [formData, setFormData] = React.useState<ITodo | {}>();

    /* onchange  */
    const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
      setFormData({
          ...formData,
          [e.currentTarget.id]: e.currentTarget.value,
        });
      };

    const handleSaveTodo = (e: React.FormEvent, formData: ITodo | any) => {
        e.preventDefault();
        saveTodo(formData);
      };

      return (
        <form className="p-6 border w-2/5 mx-auto rounded " onSubmit={(e) => handleSaveTodo(e, formData)}>
          <div className='flex flex-col space-y-2 m-auto w-10/12 '>
              <label htmlFor="name" className=''>Title</label>
              <input onChange={handleForm}  type="text" id="title" 
              className='text-black  py-2'/>
              <label htmlFor="description" className=''>Description</label>
              <input onChange={handleForm} type="text" id="description" 
              className='text-black py-2'/>
          <button disabled={formData === undefined ? true : false}
            className='text-white hover:bg-white hover:text-bgDark py-2'
          >Add Todo</button>
          </div>
        </form>
      );
    };
    
export default AddTodo;