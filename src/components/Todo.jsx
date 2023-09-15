import React from 'react'

const Todo = ({ todo, toggleTodo }) => {
  const handleTodoClick = () => {
    toggleTodo(todo.id)
  }
  return (
    <div>
      <label>
        <input type='checkbox' checked={ todo.complete} onChange={handleTodoClick}/> <span>{todo.name}</span>
      </label>
    </div>
  )
}

export default Todo