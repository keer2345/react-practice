import { useParams } from 'react-router'

const TodoDetails = () => {
  const { id } = useParams()

  return <h1>Todo Details {id}</h1>
}

export default TodoDetails
