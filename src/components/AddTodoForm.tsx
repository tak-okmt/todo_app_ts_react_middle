import { Todo } from "../App";

export default function AddTodoForm(
  todo: Todo,
  handleFormSubmit: any,
  handleInputChange: any
) {
  return (
    <form onSubmit={handleFormSubmit}>
      <h2>TODO追加</h2>
      <label htmlFor="title">タイトル: </label>
      <input
        type='text'
        id='title'
        name='title'
        placeholder='タイトル'
        value={todo.title}
        onChange={handleInputChange}
      />
      <br /><br />

      <label htmlFor="detail">詳細: </label>
      <textarea
        name="detail"
        id="detail"
        cols="30"
        rows="3"
        value={todo.detail}
        onChange={handleInputChange}>
      </textarea>
      <br /><br />

      <label htmlFor="deadline">期限: </label>
      <input
        type='date'
        id='deadline'
        name='deadline'
        value={todo.deadline}
        onChange={handleInputChange}
      />
      <br /><br />

      <label htmlFor="status">ステータス: </label>
      <select name="status" id="status" value={todo.status} onChange={handleInputChange}>
        <option value="notStartYet">未着手</option>
        <option value="inProgress">進行中</option>
        <option value="completed">完了</option>
      </select>
      <br /><br />

      <button type='submit' onClick={handleFormSubmit}>
        追加
      </button>
    </form>
  )
}

