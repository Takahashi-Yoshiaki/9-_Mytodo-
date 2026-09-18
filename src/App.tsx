import { useState } from 'react'
import './App.css'
  type Todo = {
  id: string
  title: string
  done: boolean
  createdAt: string
}

function App() {
  const [title, setTitle] = useState("")
  const [todos, setTodos] = useState<Todo[]>([])

  function handleAddTodo(){
    const trimmedTitle = title.trim()
    if(trimmedTitle === "")
      return
    const newTodo:Todo = {
      id: crypto.randomUUID(),
      title: trimmedTitle,
      done: false,
      createdAt: new Date().toISOString()
    }
    setTodos([...todos, newTodo])
    setTitle("")  
    }
    
    function handleToggleDone(id:string){
      setTodos(todos.map((todo) => 
        todo.id===id
      ?{...todo,done:!todo.done}
      :todo
))
    }

    function handleDeleteTodo(id:string){
      setTodos(todos.filter((todo) => todo.id !== id))
    }
    
  return (
    <main>
      <h1>Todoリスト</h1>

      <button onClick={handleAddTodo}>追加</button>

      <input
      value={title}
      onChange={(event) => setTitle(event.target.value)}
      placeholder="Todoを入力してください"
      />
      
      <p>入力中: {title}</p>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
            type="checkbox"
            checked={todo.done}
            onChange={() => handleToggleDone(todo.id)}
            />
            {todo.title}{todo.done ? "完了" : "未着手"}
            <button onClick={()=> handleDeleteTodo(todo.id)}>削除</button>
          </li>
        ))}
      </ul>
    </main>
  )
}
export default App
