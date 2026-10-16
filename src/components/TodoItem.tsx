import { useState } from 'react'
import type {Todo} from '../types'

type TodoItemProps = {
    todo:Todo
    onToggleDone: (id:string) => void
    onDelete: (id:string) => void
    onEdit: (id: string, newTitle: string) => void

    
}



function TodoItem({
    todo,
    onToggleDone,
    onDelete,
    onEdit,
}:TodoItemProps){
const [isEditing, setIsEditing] = useState(false)
const [editTitle, setEditTitle] = useState(todo.title)

function handleStartEdit() {
  setEditTitle(todo.title)
  setIsEditing(true)
}

function handleSave() {
  const trimmedTitle = editTitle.trim()

  if (trimmedTitle === '') {
    return
  }

  onEdit(todo.id, trimmedTitle)
  setIsEditing(false)
}

function handleCancel() {
  setEditTitle(todo.title)
  setIsEditing(false)
}

return(
    <li className ="flex gap-2 text-left p-4 border border-gray-300 rounded items-center">
        <input
            type="checkbox"
            checked={todo.done}
            onChange={() => onToggleDone(todo.id)}
        />

    {isEditing ? (
  <>
    <input
      className="flex-1 border border-gray-300 rounded px-2 py-1"
      value={editTitle}
      onChange={(event) => setEditTitle(event.target.value)}
    />

    <button
      className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600"
      onClick={handleSave}
    >
      保存
    </button>

    <button
      className="bg-gray-400 text-white px-4 py-1 rounded hover:bg-gray-500"
      onClick={handleCancel}
    >
      キャンセル
    </button>
  </>
) : (
  <>
    <span
      className={
        todo.done
          ? 'flex-1 text-left text-gray-500 line-through'
          : 'flex-1 text-left'
      }
    >
      {todo.title} {todo.done ? '完了' : '未完了'}
    </span>

    <button
      className="bg-yellow-500 text-white px-4 py-1 rounded hover:bg-yellow-600"
      onClick={handleStartEdit}
    >
      編集
    </button>

    <button
      className="bg-blue-400 text-white px-4 py-1 rounded hover:bg-blue-600"
      onClick={() => onDelete(todo.id)}
    >
      削除
    </button>
  </>
)}
    </li>
    
)
}

export default TodoItem