import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField
} from '@mui/material'
import { useState } from 'react'

const Form = () => {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: '',
    terms: false,
    courses: '',
    gender: ''
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
      <form onSubmit={handleSubmit}>
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
        <FormGroup>
          <FormControlLabel
            label='I Agree T&C'
            control={<Checkbox onChange={() => setInputs({ ...inputs, terms: !inputs.terms })} />}
          />
        </FormGroup>
        <br />
        <FormControl fullWidth>
          <InputLabel id='menu'>Courses</InputLabel>
          <Select name='courses' label='courses' value={inputs.courses} onChange={handleChange}>
            <MenuItem value={'mongodb'}>Mongodb</MenuItem>
            <MenuItem value={'express'}>Express</MenuItem>
            <MenuItem value={'node'}>Node</MenuItem>
            <MenuItem value={'react'}>React</MenuItem>
          </Select>
        </FormControl>
        <br />
        <FormControl>
          <FormLabel>Gender</FormLabel>
          <RadioGroup name='gender' onChange={handleChange}>
            <FormControlLabel value={'male'} label='Male' control={<Radio />} />
            <FormControlLabel value={'female'} label='FeMale' control={<Radio />} />
            <FormControlLabel value={'other'} label='Other' control={<Radio />} />
          </RadioGroup>
        </FormControl>
        <br />
        <Button type='submit'>Submit</Button>
      </form>
    </>
  )
}

export default Form
