import React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { Typography, IconButton, Avatar } from '@mui/material';
import { DeleteOutlined } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';
import { blue, green, orange, red } from '@mui/material/colors';

const useStyles = makeStyles({
  card: {
    border: (note) => {
      if (note.category === 'work') {
        return '1px solid red';
      }
      if (note.category === 'money') {
        return '1px solid green';
      }
      if (note.category === 'todos') {
        return '1px solid blue';
      }
      if (note.category === 'reminders') {
        return '1px solid orange';
      }
      return '';
    }
  },
  avatar: {
    backgroundColor: (note) => {
      if (note.category === 'work') {
        return red[700];
      }
      if (note.category === 'money') {
        return green[700];
      }
      if (note.category === 'todos') {
        return blue[700];
      }
      if (note.category === 'reminders') {
        return orange[700];
      }
      return '';
    }
  }
});

export default function NoteCard({ note, handleDelete }) {
  const classes = useStyles(note);

  return (
    <Card elevation={1} className={classes.card}>
      <CardHeader
        avatar={
          <Avatar className={classes.avatar}>
            {note.category.charAt(0).toUpperCase()}
          </Avatar>
        }
        title={note.title}
        subheader={note.category}
        action={
          <IconButton onClick={() => handleDelete(note.id)}>
            <DeleteOutlined />
          </IconButton>
        }
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary">
          {note.details}
        </Typography>
      </CardContent>
    </Card>
  );
}

/* TypeChecking props of a component */
NoteCard.propTypes = {
  note: PropTypes.object,
  handleDelete: PropTypes.func
};
