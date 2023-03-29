import { useStore } from '@/stores'
import { observer } from 'mobx-react-lite'

const TodoList = () => {
  const { todoStore } = useStore
  return (
    <ul>
      {todoStore.list.map((l) => (
        <li key={l.id}>{l.title}</li>
      ))}
    </ul>
  )
}
export default observer(TodoList)
