import { Button, TextField, Typography } from '@mui/material'
import Form from './components/Form'

function App() {
  return (
    <div>
      <Typography variant='h1' component={'h1'} sx={{ color: 'red' }}>
        Techinfo YT
      </Typography>
      {/* <Button variant='contained' color='success' sx={{ margin: '30px' }}>
        Click Me
      </Button>
      <Button variant='text'>Click Me</Button>
      <Button variant='outlined' onClick={() => alert('you clicked')}>
        Click Me for action
      </Button>
      <br />
      <br />
      <TextField type='text' placeholder='name' variant='standard' sx={{ margin: '30px' }} />
      <TextField type='text' placeholder='name' variant='outlined' sx={{ margin: '30px' }} />
      <TextField type='text' placeholder='name' variant='filled' sx={{ margin: '30px' }} /> */}

      <Form/>

    </div>
  )
}

export default App
