import React, { useState } from 'react';
import {
  FormControlLabel,
  FormLabel,
  Typography,
  FormControl,
  Button,
  Container,
  TextField,
  Radio,
  RadioGroup
} from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { makeStyles } from '@mui/styles';
import { useHistory } from 'react-router-dom';
import 'dotenv/config';

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block'
  }
});

export default function Create() {
  const classes = useStyles();
  /*  to use that in components just add in props:
    className={classes.title}
  */

  /* Used to redirect to a page */
  const history = useHistory();

  /* States */
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [errorTitle, setErrorTitle] = useState(false);
  const [errorDetails, setErrorDetails] = useState(false);
  const [category, setCategory] = useState('todos');

  /* Handle Submit function */
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorDetails(false);
    setErrorTitle(false);

    if (!title) {
      setErrorTitle(true);
    }
    if (!details) {
      setErrorDetails(true);
    }

    if (title && details) {
      fetch(`https://material-ui-json-server.glitch.me/notes`, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ title, details, category })
      }).then(() => history.push('/'));
    }
  };

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
          <RadioGroup
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <FormControlLabel
              value="money"
              control={<Radio color="secondary" />}
              label="Money"
            />
            <FormControlLabel
              value="todos"
              control={<Radio color="secondary" />}
              label="Todos"
            />
            <FormControlLabel
              value="reminders"
              control={<Radio color="secondary" />}
              label="Reminders"
            />
            <FormControlLabel
              value="work"
              control={<Radio color="secondary" />}
              label="Work"
            />
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
  );
}
