import React, { useState } from 'react'
import AddingTask from '../AddingTask/AddingTask'

export default function ToDo() {

  const [todos, setTodos] = useState([]);
  return (
    <div>
      <AddingTask/>
    </div>
  )
}
