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
    <div>
      <input
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Todoを入力してください"
      />
      <button onClick={handleSubmit}>追加</button>
    </div>
  )
}

export default TodoForm