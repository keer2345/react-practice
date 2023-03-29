import { makeAutoObservable } from 'mobx'

const TodoStore = () => {
  return makeAutoObservable({
    list: [] as { title: string; id: number }[]
  })
}

export default TodoStore
