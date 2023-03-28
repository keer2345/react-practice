import { useRoutes } from 'react-router'
import TodoOverview from './pages/TodoOverview'

const Todos = () => {
  const routes = useRoutes([{ path: '/', element: <TodoOverview /> }])
  return routes
}

export default Todos
