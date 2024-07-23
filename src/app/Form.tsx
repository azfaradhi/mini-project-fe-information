import React, { useState } from 'react'
import { Button } from '~/components/ui/button'
import { Input } from "~/components/ui/input"
import Calender from './Calender'


interface FormProps {
    createTodo: (task: string) => void;
  }
  
  const Form: React.FC<FormProps> = ({ createTodo }) => {
    const [value, setValue] = useState('');
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (value.trim() === '') return; 
      createTodo(value);
      setValue('');
    }
  
    return (
      <form className="flex items-center w-6/12 mx-auto space-x-2 mt-4 mb-6"  onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Masukkan task baru disini!"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Button type="submit">Add</Button>
      </form>
    );
  }
  
  export default Form;