import React, { useState, ChangeEvent } from 'react'
import { useTodo, useAddTodo } from '../store/Todo'

const Todo = () => {
  const [todo, setTodo] = useState('')
  const todoList: Array<any> = useTodo()
  const addTodo = useAddTodo()

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value)
  }

  const handleButtonClick = () => {
    addTodo(todo)
    setTodo('')
  }

  return (
    <div>
      <div>
        <ul>
          {todoList.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>
      <div>
        <input name='todo' value={todo} onChange={handleInputChange} />
        <button onClick={handleButtonClick}>Add todo</button>
      </div>
    </div>
  )
}

export default Todo
