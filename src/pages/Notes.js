import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import Masonry from 'react-masonry-css';
import { makeStyles } from '@mui/styles';
import NoteCard from '../components/NoteCard';

const useStyles = makeStyles({
  myMasonryGrid: {
    display: 'flex',
    marginLeft: '-30px' /* gutter size offset */,
    width: 'auto'
  },
  myMasonryGridColumn: {
    paddingLeft: '30px' /* gutter size */,
    backgroundClip: 'padding-box'
  },
  note: {
    marginBottom: '30px'
  }
});

export default function Notes() {
  const [notes, setNotes] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    fetch('http://localhost:8000/notes')
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);

  const handleDelete = async (id) => {
    await fetch(`http://localhost:8000/notes/${id}`, {
      method: 'DELETE'
    });

    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1
  };

  return (
    <Container>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className={classes.myMasonryGrid}
        columnClassName={classes.myMasonryGridColumn}
      >
        {notes.map((note) => (
          <div className={classes.note} key={note.id}>
            <NoteCard note={note} handleDelete={handleDelete} />
          </div>
        ))}
      </Masonry>
    </Container>
  );
}
