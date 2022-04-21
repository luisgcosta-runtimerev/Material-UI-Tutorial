import React from 'react';
import PropType from 'prop-types';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  page: {
    background: '#f9f9f9',
    width: '100%',
  },
});

export default function Layout({ children }) {
  const classes = useStyles();

  return (
    <div>
      {/* app navbar */}

      {/* side drawer */}

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
