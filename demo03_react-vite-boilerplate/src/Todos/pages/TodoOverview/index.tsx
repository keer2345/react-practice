import TodoForm from '@/Todos/components/TodoForm'
import TodoList from '@/Todos/components/TodoList'

const TodoOverview = () => {
  return (
    <>
      <h1>Todos Overview</h1>
      <TodoForm />
      <TodoList />
    </>
  )
}
export default TodoOverview
