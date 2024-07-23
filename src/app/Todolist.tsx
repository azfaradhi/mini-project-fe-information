import React, { useState } from 'react';
import Form from './Form';
import {v4 as uuidv4} from 'uuid'
import Todo from "./Todo";

uuidv4()

interface todo {
  id: string;
  task: string;
  isEditing: boolean
}

const Todolist: React.FC= () => {
  const [todoValue,setTodo] = useState<todo[]>([]);

  const createTodo = (todo: string) => {
    setTodo([...todoValue, {id: uuidv4(), task: todo, isEditing: false}])
  }
  return (
    <div className='justify-center container w-5/12 bg-indigo-900 border-2 border-double border-black mt-8 p-6 rounded-md'>
      <Form createTodo={createTodo}/>
      <ul className='text-white'>
        {todoValue.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default Todolist