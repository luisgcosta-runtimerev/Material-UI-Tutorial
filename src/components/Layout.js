import React from 'react';
import PropType from 'prop-types';
import { makeStyles } from '@mui/styles';
import {
  Drawer, List, ListItem, ListItemIcon, ListItemText, Typography,
} from '@mui/material';
import { AddCircleOutlined, SubjectOutlined } from '@mui/icons-material';
import { useHistory, useLocation } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  page: {
    background: '#f9f9f9',
    width: '100%',
    padding: theme.spacing(3),
  },
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  active: {
    background: '#f4f4f4',
  },
  title: {
    padding: theme.spacing(2),
  },
}));

export default function Layout({ children }) {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  const menuItems = [
    {
      text: 'My notes',
      icon: <SubjectOutlined color="secondary" />,
      path: '/',
    },
    {
      text: 'Create Note',
      icon: <AddCircleOutlined color="secondary" />,
      path: '/create',
    },
  ];

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
          <Typography
            variant="h5"
            align="center"
            className={classes.title}
          >
            Material UI Tutorial
          </Typography>
        </div>

        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={() => history.push(item.path)}
              className={location.pathname === item.path ? classes.active : null}
            >
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>

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
