import React from 'react';
import PropType from 'prop-types';
import { makeStyles } from '@mui/styles';
import { Drawer, Typography } from '@mui/material';

const drawerWidth = 240;

const useStyles = makeStyles({
  root: {
    display: 'flex',
  },
  page: {
    background: '#f9f9f9',
    width: '100%',
  },
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
});

export default function Layout({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* app navbar */}

      {/* side drawer */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
      >
        <div>
          <Typography variant="h5">
            Luis Costa
          </Typography>
        </div>
      </Drawer>

      {/* app body */}
      <div className={classes.page}>
        {children}
      </div>
    </div>
  );
}

/* TypeChecking props of a component */
Layout.propTypes = {
  children: PropType.any,
};
