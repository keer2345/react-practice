import Layout from '@/components/Layout/Layout'
import { Box, Typography } from '@mui/material'

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: 'center',
          '& h4': {
            fontWeight: 'bold',
            my: 2,
            fontSize: '2rem'
          },
          '& p': {
            textAlign: 'justify'
          },
          '@media (max-width:600px)': {
            mt: 0,
            '& h4 ': {
              fontSize: '1.5rem'
            }
          }
        }}
      >
        <Typography variant='h4'>Welcome to my resturant</Typography>
        <p>
          Exercitation cillum elit est sit irure irure non est velit enim et eu ipsum. Sunt nostrud
          nisi deserunt et in Lorem Lorem eiusmod enim reprehenderit do laboris. Consectetur mollit
          fugiat dolore elit irure non et esse qui dolore anim nisi. Et anim duis excepteur Lorem
          cillum cupidatat aliqua do elit aliquip ut sunt consectetur. Irure mollit nisi elit culpa
          laboris quis cillum esse cupidatat commodo eiusmod cillum consectetur. Nisi ea aliquip
          eiusmod dolor. Enim ad sit do est est duis ea.
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dignissimos incidunt ipsa
          amet delectus dolorum totam ratione architecto! Facere quis rem incidunt, ullam laborum
          ipsa excepturi voluptatum dignissimos sed eius?
        </p>
      </Box>
    </Layout>
  )
}

export default About
