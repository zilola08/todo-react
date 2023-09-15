import React from 'react'
import { useState } from 'react'
import MyInput from './UI/input/MyInput';
import MyButton from './UI/button/MyButton';

const TodoForm = ({ addTodo,removeTodo }) => {

  const [inputTodo,setinputTodo] = useState({ name: '',complete: false })

  const addNewTodo = () => {
    if (inputTodo.name.length !== 0) {
      const newTodo = {
        ...inputTodo,
        id: Date.now()
      }
      addTodo(newTodo);
      setinputTodo({
        name: '',complete: false
      })
    };
  }

  return (
    <div className="todoForm">
      <MyInput type="text" value={inputTodo.name} placeholder='a new todo' 
        onChange={e => setinputTodo({ ...inputTodo,name: e.target.value })} />
      <MyButton onClick={addNewTodo}>Add Todo</MyButton>
      <MyButton onClick={removeTodo}>Clear if done</MyButton>
    </div>
  )
}

export default TodoForm