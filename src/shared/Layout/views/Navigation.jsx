import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui//styles';
import { Typography } from '../../Components';
import { menuNavigationOptions } from '../layoutUtils';

const Navigation = (props) => {
  const {} = props;
  const classes = useStyles();

  return (
    <nav className={classes.menuNavigation}>
      {menuNavigationOptions.map((option) => (
        <a className={classes.menuNavigationItem}>
          <img src={option.imgSrc} />
          <div className={classes.menuItemContent}>
            <Typography bold color="light" component="span" className={classes.text}>
              {option.label}
            </Typography>
            <div />
          </div>
        </a>
      ))}
    </nav>
  );
};

const useStyles = makeStyles({
  menuNavigation: {
    left: 0,
    top: 0,
    display: 'flex',
    color: '#fff',
    height: 74,
  },
  menuNavigationItem: {
    textDecoration: 'none',
    padding: '0 16px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    '& > img': {
      width: 22,
      height: 22,
    },
    '& > div > div': {
      height: 2,
      width: 0,
      borderRadius: '0 0 1.5px 1.5px',
      marginLeft: 10,
      transition: 'all .3s',
    },
    '&:hover': {
      '& > div > div': {
        width: 'calc(100% - 8px)',
        backgroundColor: '#fff',
        transition: 'all .3s',
      },
    },
  },
  menuItemContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    paddingTop: 4,
  },
  text: {
    marginLeft: 10,
  },
});

export default Navigation;
