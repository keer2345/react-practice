import { useRoutes } from 'react-router'
import TodoDetails from './pages/TodoDetails'
import TodoOverview from './pages/TodoOverview'

const Todos = () => {
  const routes = useRoutes([
    { path: '/', element: <TodoOverview /> },
    { path: '/:id', element: <TodoDetails /> }
  ])
  return routes
}

export default Todos
