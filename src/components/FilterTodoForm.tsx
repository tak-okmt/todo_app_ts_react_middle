import { Filter } from "../App";

export default function FilterTodoForm({
  filter,
  handleFilterChange
}: {
  filter: Filter,
  handleFilterChange: any
}
) {
  return (
    <>
      <h3>絞り込み</h3>
      <label htmlFor="idFilter">ID: </label>
      <input
        type="text"
        id="idFilter"
        name="id"
        placeholder="ID"
        value={filter.id}
        onChange={(e) => handleFilterChange(e)}
      />
      <label htmlFor="deadlineFilter">期限: </label>
      <input
        type="date"
        id="deadlineFilter"
        name="deadline"
        value={filter.deadline}
        onChange={(e) => handleFilterChange(e)}
      />
      <select name="status" value={filter.status} onChange={(e) => handleFilterChange(e)}>
        <option value="">すべて</option>
        <option value="notStartYet">未着手</option>
        <option value="inProgress">進行中</option>
        <option value="completed">完了</option>
      </select>
    </>
  )
}
