import TodoItem from './TodoItem'
import type { Todo } from '../types'

type TodoListProps = {
  todos: Todo[]
  onToggleDone: (id: string) => void
  onDelete: (id: string) => void
  onEdit: (id: string, newTitle: string) => void
}

function TodoList({
  todos,
  onToggleDone,
  onDelete,
  onEdit,
}: TodoListProps) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggleDone={onToggleDone}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </ul>
  )
}

export default TodoList