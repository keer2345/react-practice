import { createContext, useContext } from 'react'
import TodoStore from './Todos/TodoStore'

const store = {
  todoStore: TodoStore()
}

export const StoreContext = createContext(store)
export const useStore = () => {
  return useContext<typeof store>(StoreContext)
}

export default store
