import React from 'react'
import { Typography } from '@mui/material'
import { Button } from '@mui/material'
import { Container } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  /*btn: {
    fontSize: 60,
    backgroundColor: 'violet',
    '&:hover':{
      backgroundColor: 'blue'
    }
  },
  title: {
    textDecoration: 'underline',
    marginBottom: 20
  }*/
})

export default function Create() {
  const classes = useStyles()

  return (
      <Container>
        <Typography
          variant="h6"
          color="textSecondary"
          component="h2"
          gutterBottom
        >
          Create a New Note
        </Typography>

        <Button
          onClick={() => console.log('you clicked me')}
          type="submit"
          color="secondary"
          variant="contained"
          endIcon={<KeyboardArrowRightIcon />}
        >
          Submit
        </Button>

      </Container>
  )
}
