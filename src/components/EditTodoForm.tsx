import { Todo } from "../App";

export default function EditTodoForm({
  currentTodo,
  setIsEditing,
  handleEditFormSubmit,
  handleEditInputChange
}: {
  currentTodo: Todo,
  setIsEditing: any,
  handleEditFormSubmit: any,
  handleEditInputChange: any
}
) {
  return (
    <form onSubmit={handleEditFormSubmit}>
      <h2>TODO追加</h2>
      <label htmlFor="title">タイトル: </label>
      <input
        type='text'
        id="title"
        name='title'
        placeholder='タイトル'
        value={currentTodo.title}
        onChange={handleEditInputChange}
      />
      <br /><br />

      <label htmlFor="detail">詳細: </label>
      <textarea
        name="detail"
        id="detail"
        cols={30}
        rows={3}
        value={currentTodo.detail}
        onChange={handleEditInputChange}>
      </textarea>
      <br /><br />

      <label htmlFor="deadline">期限: </label>
      <input
        type='date'
        id='deadline'
        name='deadline'
        value={currentTodo.deadline}
        onChange={handleEditInputChange}
      />
      <br /><br />

      <label htmlFor="status">ステータス: </label>
      <select name="status" id="status" value={currentTodo.status} onChange={handleEditInputChange}>
        <option value="notStartYet">未着手</option>
        <option value="inProgress">進行中</option>
        <option value="completed">完了</option>
      </select>
      <br /><br />

      <button type='submit' onClick={handleEditFormSubmit}>
        更新
      </button>
      <button onClick={() => setIsEditing(false)}>キャンセル</button>
    </form>
  )
}

