import { useEffect, useState } from 'react'
import AddTodoForm from "./components/AddTodoForm";
import EditTodoForm from "./components/EditTodoForm";
import TodoList from "./components/TodoList";
import FilterTodoForm from './components/FilterTodoForm';

export type Todo = {
  id: number;
  title: string;
  detail: string;
  deadline: string;
  status: "notStartYet" | "inProgress" | "completed";
}

type Filter = {
  id?: number;
  deadline?: string;
  status?: "notStartYet" | "inProgress" | "completed";
}

function App() {
  const [todo, setTodo] = useState<Todo | {}>({});
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todoId, setTodoId] = useState<number>(1);

  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [currentTodo, setCurrentTodo] = useState<Todo | {}>({}); // 編集中のTodoリストのstate

  const [filter, setFilter] = useState<Filter>({});
  const [filteredTodos, setFilteredTodos] = useState<Todo[]>([])

  function handleFormSubmit(e: any) {
    e.preventDefault();

    if (!('title' in todo) || todo.title === '') {
      alert('タイトルの入力が必要です');
      return;
    } else {
      setTodos(prevTodos => [
        ...prevTodos,
        {
          id: todoId,
          title: todo.title,
          detail: todo.detail,
          deadline: todo.deadline,
          status: todo.status || 'notStartYet'
        }
      ])
      setTodoId((prevId) => prevId + 1);
    }

    setTodo({}); // HACK: 初期化されていない
  }

  function handleInputChange(e: any) {
    const target = e.target;
    setTodo({ ...todo, [target.name]: target.value });
  }

  function handleEditClick(todo: Todo) {
    setIsEditing(true);
    setCurrentTodo(todo);
  }

  function handleEditFormSubmit(e: any) {
    e.preventDefault();

    if ('id' in currentTodo) {
      const updatedTodos = todos.map((todo) => {
        return todo.id === currentTodo.id ? currentTodo as Todo : todo
      });
      setIsEditing(false);
      setTodos(updatedTodos);
    }
  }

  function handleEditInputChange(e: any) {
    const target = e.target;
    setCurrentTodo({ ...currentTodo, [target.name]: target.value });
  }

  function handleDeleteClick(todo: Todo) {
    const deletedTodos = todos.filter(t => t.id !== todo.id);
    setTodos(deletedTodos);
  }

  function handleFilterChange(e: any) {
    const target = e.target;
    setFilter({ ...filter, [target.name]: target.value });
  }

  const filteringTodos = () => {
    const newArray = todos.filter((todo) => {
      if (filter.id && filter.id !== todo.id) {
        return false;
      }
      if (filter.deadline && filter.deadline !== todo.deadline) {
        return false;
      }
      if (filter.status && filter.status !== todo.status) {
        return false;
      }
      return true;
    })
    setFilteredTodos(newArray)
  }

  useEffect(() => {
    filteringTodos()
  }, [filter, todos])

  return (
    <div style={{ margin: '0px 200px' }}>
      {isEditing ? (
        <EditTodoForm
          currentTodo={currentTodo as Todo}
          setIsEditing={setIsEditing}
          handleEditFormSubmit={handleEditFormSubmit}
          handleEditInputChange={handleEditInputChange}
        />
      ) : (
        <AddTodoForm
          todo={todo as Todo}
          handleFormSubmit={handleFormSubmit}
          handleInputChange={handleInputChange}
        />
      )
      }
      <br /><br />

      <FilterTodoForm
        filter={filter}
        handleFilterChange={handleFilterChange}
      />

      <TodoList
        todos={filteredTodos}
        handleEditClick={handleEditClick}
        handleDeleteClick={handleDeleteClick}
      />
    </div>
  )
}

export default App
