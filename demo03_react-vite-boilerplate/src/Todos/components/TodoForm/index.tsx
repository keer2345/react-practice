import { useStore } from '@/stores'
import { FormEvent } from 'react'

const TodoForm = () => {
  const { todoStore } = useStore()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    const formData = new FormData(e.target as HTMLFormElement)
    const value = formData.get('title')?.toString() || ''

    todoStore.list.push({
      title: value,
      id: Date.now()
    })
  }

  return (
    <form action='#' onSubmit={handleSubmit}>
      <input name='title' placeholder='todo title' className='border' />
      <button type='submit'>Add</button>
    </form>
  )
}

export default TodoForm
