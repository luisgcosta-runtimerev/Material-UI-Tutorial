import React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { Typography, IconButton } from '@mui/material';
import { DeleteOutlined } from '@mui/icons-material';

export default function NoteCard({ note, handleDelete }) {
  return (
    <Card elevation={1}>
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

/* TypeChecking a prop of component */
NoteCard.propTypes = {
  note: PropTypes.object,
  handleDelete: PropTypes.func,
};
