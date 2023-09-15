import React,{ useState,useEffect } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./styles/App.css"

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const [todos,setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos,newTodo])
  }

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find(todo => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  const removeTodo = () => {
    const newTodos = todos.filter(todo => todo.complete === false)
    setTodos(newTodos);
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(newTodos));
  }

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) { setTodos(storedTodos) }
  },[])

  useEffect(() => {
    if (todos.length !== 0) {
      localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(todos))
    }
    console.log("2nd useffect")
  },[todos])

  return (
    <div className="main container">
      <h2 className='todolist__heading'>ToDos:</h2>
      <TodoList toggleTodo={toggleTodo} todos={todos} />
      <TodoForm removeTodo={removeTodo} addTodo={addTodo} />
    </div>
  );
}

export default App;
