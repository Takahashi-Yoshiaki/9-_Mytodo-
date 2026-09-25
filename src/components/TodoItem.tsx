import type {Todo} from '../types'

type TodoItemProps = {
    todo:Todo
    onToggleDone: (id:string) => void
    onDelete: (id:string) => void
}

function TodoItem({
    todo,
    onToggleDone,
    onDelete
}:TodoItemProps){

return(
    <li>
        <input
            type="checkbox"
            checked={todo.done}
            onChange={() => onToggleDone(todo.id)}
        />
<span>
  {todo.title} {todo.done ? '完了' : '未着手'}
</span>
        <button onClick={() => onDelete(todo.id)}>削除</button>
    </li>
    
)
}

export default TodoItem