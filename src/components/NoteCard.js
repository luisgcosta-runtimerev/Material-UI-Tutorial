import React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { Typography, IconButton } from '@mui/material';
import { DeleteOutlined } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  test: {
    border: (note) => {
      if (note.category === 'work') {
        return '1px solid red';
      }
      return '';
    },
  },
});

export default function NoteCard({ note, handleDelete }) {
  const classes = useStyles(note);

  return (
    <Card elevation={1} className={classes.test}>
      <CardHeader
        title={note.title}
        subheader={note.category}
        action={(
          <IconButton onClick={() => handleDelete(note.id)}>
            <DeleteOutlined />
          </IconButton>
        )}
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
  handleDelete: PropTypes.func,
};
