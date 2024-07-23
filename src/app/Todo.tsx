import React from 'react'
import {Checkbox} from "~/components/ui/checkbox"


interface TodoProps {
  todo: {
    id: string;
    task: string;
    isEditing: boolean;
  };
}

const Todo: React.FC<TodoProps> = ({ todo }) => {
  return (
    <div className='flex items-center space-x-2 container w-full bg-green-50 border-black rounded-lg border-2 m-2.5 mx-auto'>
      <Checkbox id= "terms" className='border-black w-5 h-5' />
      <li className='font-Cambria p-1.5 text-black'>
        {todo.task}
      </li>
    </div>
  );
}

export default Todo