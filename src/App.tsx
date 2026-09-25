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
    <main>
      <h1>Todoリスト</h1>

      <TodoForm onAdd={handleAddTodo} />

      <div>
        <button onClick={() => setFilter('all')}>
          全部
        </button>

        <button onClick={() => setFilter('active')}>
          未完了
        </button>

        <button onClick={() => setFilter('completed')}>
          完了
        </button>
      </div>

      <p>未完了：{remainingCount}件</p>

      <TodoList
        todos={filteredTodos}
        onToggleDone={handleToggleDone}
        onDelete={handleDeleteTodo}
      />
    </main>
  )
}

export default App