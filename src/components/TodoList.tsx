import TodoItem from './TodoItem'
import type { Todo } from '../types'

type TodoListProps = {
  todos: Todo[]
  onToggleDone: (id: string) => void
  onDelete: (id: string) => void
}

function TodoList({
  todos,
  onToggleDone,
  onDelete,
}: TodoListProps) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggleDone={onToggleDone}
          onDelete={onDelete}
        />
      ))}
    </ul>
  )
}

export default TodoList