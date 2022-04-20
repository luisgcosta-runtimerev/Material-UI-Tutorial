import React, { useState } from 'react'
import { FormControlLabel, FormLabel, Typography, FormControl } from '@mui/material'
import { Button } from '@mui/material'
import { Container } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Radio, RadioGroup } from '@mui/material';

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block'
  }
})

export default function Create() {
  const classes = useStyles()
  /*  to use that in components just add in props:
    className={classes.title}
  */

  /* States */
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [errorTitle, setErrorTitle] = useState(false)
  const [errorDetails, setErrorDetails] = useState(false)
  const [category, setCategory] = useState('todos')

  /* Handle Submit function */
  const handleSubmit = (e) => {
    e.preventDefault()
    setErrorDetails(false)
    setErrorTitle(false)

    if(!title){
      setErrorTitle(true)
    }
    if(!details){
      setErrorDetails(true)
    }
    if(title && details){
      console.log('Title: ' + title)
      console.log('Details: ' + details)
      console.log('Category: ' + category)
    }

  }

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

        <form noValidate autoComplete="off" onSubmit={handleSubmit}>

          <TextField
            className={classes.field}
            onChange={(e) => setTitle(e.currentTarget.value)}
            label="Note Title"
            color="secondary"
            variant="outlined"
            fullWidth
            required
            error={errorTitle}
          />


          <TextField
            className={classes.field}
            onChange={(e) => setDetails(e.currentTarget.value)}
            label="Details"
            color="secondary"
            variant="outlined"
            fullWidth
            required
            multiline
            rows={4}
            error={errorDetails}
          />


          <FormControl className={classes.field}>
            <FormLabel color="secondary">Note Category</FormLabel>
            <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
              <FormControlLabel value="money" control={<Radio color="secondary"/>} label="Money"/>
              <FormControlLabel value="todos" control={<Radio color="secondary" />} label="Todos"/>
              <FormControlLabel value="reminders" control={<Radio color="secondary"/>} label="Reminders"/>
              <FormControlLabel value="work" control={<Radio color="secondary"/>} label="Work"/>
            </RadioGroup>
          </FormControl>

          <Button
          type="submit"
          color="secondary"
          variant="contained"
          endIcon={<KeyboardArrowRightIcon />}
          >
          Submit
          </Button>
        </form>
      </Container>
  )
}
