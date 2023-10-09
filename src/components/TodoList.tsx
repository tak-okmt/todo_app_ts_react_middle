import { Todo } from "../App"

export default function TodoList(
  todos: Array<Todo>,
  handleEditClick: any,
  handleDeleteClick: any
) {
  const statusForDisplay = {
    notStartYet: '未着手',
    inProgress: '進行中',
    completed: '完了',
  }

  return (
    <>
      <h2>リスト</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>詳細</th>
            <th>期限</th>
            <th>ステータス</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => {
            return (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.title}</td>
                <td>{todo.detail}</td>
                <td>{todo.deadline}</td>
                <td>{statusForDisplay[todo.status]}</td>
                <td>
                  <button onClick={() => handleEditClick(todo)}>編集</button>
                </td>
                <td>
                  <button onClick={() => handleDeleteClick(todo)}>削除</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}