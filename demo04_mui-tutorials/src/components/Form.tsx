import { Button, TextField } from '@mui/material'
import { useState } from 'react'

const Form = () => {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: ''
  })

  const handleChange = (e: any) => {
    setInputs({ ...inputs, [e.target.name]: [e.target.value] })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log('inputs:', inputs)
  }

  return (
    <>
      <form>
        <TextField
          name='name'
          value={inputs.name}
          onChange={handleChange}
          type='text'
          variant='outlined'
          sx={{ margin: '20px' }}
        />
        <br />
        <TextField
          name='email'
          value={inputs.email}
          onChange={handleChange}
          type='email'
          variant='outlined'
          sx={{ margin: '20px' }}
        />
        <br />
        <TextField
          name='password'
          value={inputs.password}
          onChange={handleChange}
          type='password'
          variant='outlined'
          sx={{ margin: '20px' }}
        />
        <br />
        <Button type='submit' onClick={handleSubmit}>
          Submit
        </Button>
      </form>
    </>
  )
}

export default Form
