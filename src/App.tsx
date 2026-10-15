import { useState } from 'react'
import './App.css'
import type { Todo } from './types'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

type Filter = 'all' | 'active' | 'completed'

function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [filter, setFilter] = useState<Filter>('all')

  function handleAddTodo(title: string) {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      title: title,
      done: false,
      createdAt: new Date().toISOString(),
    }

    setTodos([...todos, newTodo])
  }

  function handleEditTodo(id: string, newTitle: string) {
  const trimmedTitle = newTitle.trim()

  if (trimmedTitle === '') {
    return
  }

  setTodos(
    todos.map((todo) =>
      todo.id === id
        ? { ...todo, title: trimmedTitle }
        : todo
    )
  )
}

  function handleToggleDone(id: string) {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, done: !todo.done }
          : todo
      )
    )
  }

  function handleDeleteTodo(id: string) {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') {
      return !todo.done
    }

    if (filter === 'completed') {
      return todo.done
    }

    return true
  })

  const remainingCount = todos.filter(
    (todo) => !todo.done
  ).length

  return (
    <main className="bg-gray-100 min-h-screen p-4">
      <div className="bg-white p-4 max-w-2xl mx-auto rounded-xl shadow-md">
        <h1 className="text-red-400">Todoリスト</h1>


        <TodoForm onAdd={handleAddTodo} />

        <div className="flex gap-2 py-2 mt-4 mb-2 justify-center">
          <button 
          className={
            filter === "all"?"bg-red-400 text-white px-4 py-1 rounded hover:bg-red-500"
            :"bg-blue-400 text-white px-4 py-1 rounded hover:bg-blue-600"
          }
          
          onClick={() => setFilter('all')}>
            全部
          </button>

          <button 
          className={
            filter === "active"?"bg-red-400 text-white px-4 py-1 rounded hover:bg-red-500"
            :"bg-blue-400 text-white px-4 py-1 rounded hover:bg-blue-600"
          }
          onClick={() => setFilter('active')}>
            未完了
          </button>

          <button 
          className={
            filter === "completed"?"bg-red-400 text-white px-4 py-1 rounded hover:bg-red-500"
            :"bg-blue-400 text-white px-4 py-1 rounded hover:bg-blue-600"
          }
          onClick={() => setFilter('completed')}>
            完了
          </button>
        </div>

        <p>未完了：{remainingCount}件</p>

        <TodoList
          todos={filteredTodos}
          onToggleDone={handleToggleDone}
          onDelete={handleDeleteTodo}
          onEdit={handleEditTodo}
        />
      </div>
    </main>
  )
}

export default App