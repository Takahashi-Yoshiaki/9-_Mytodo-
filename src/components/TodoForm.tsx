import { useState } from 'react'

type TodoFormProps = {
  onAdd: (title: string) => void
}

function TodoForm({ onAdd }: TodoFormProps) {
  const [title, setTitle] = useState('')

  function handleSubmit() {
    const trimmedTitle = title.trim()

    if (trimmedTitle === '') {
      return
    }

    onAdd(trimmedTitle)
    setTitle('')
  }

  return (
    <div className="flex gap-2">
      <input
        className="flex-1 border border-gray-300 rounded px-2 py-1"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Todoを入力してください"
      />
      <button 
      className="bg-blue-400 text-white px-4 py-1 rounded hover:bg-blue-600"
      onClick={handleSubmit}>追加</button>
    </div>
  )
}

export default TodoForm