"use client";
import React from 'react'
import Todolist from './Todolist'

const page = () => {
  return (
    <body className='bg-custom-image bg-cover bg-no-repeat bg-fixed'>
      <div className='mt-10 p-4'>
        <h1 className='text-center text-white text-3xl font-medium  ' > TO DO LIST OSKM</h1>
      </div>
      <div>
        <Todolist/>
      </div>
    </body>
  )
}

export default page