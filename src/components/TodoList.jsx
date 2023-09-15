import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos,toggleTodo }) => {
  return (
    <div className='todoList'>
      {todos.map(todo => {
        return <Todo toggleTodo={toggleTodo} key={todo.id} todo={todo} />
      })}
    </div>
  )
}

export default TodoList