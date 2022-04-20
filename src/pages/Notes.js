import React, { useEffect, useState } from 'react';
import { Container, Grid, Paper } from '@mui/material';

export default function Notes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/notes')
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);

  return (
    <Container>
      <Grid container>
        {
          notes.map((note) => (
            <Grid item xs={12} sm={6} md={3} key={note.id}>
              <Paper>
                {note.title}
              </Paper>
            </Grid>
          ))
        }
      </Grid>
    </Container>
  );
}
