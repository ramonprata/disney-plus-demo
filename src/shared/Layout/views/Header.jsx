import React from 'react';
import disneyPlusLogo from '../../../images/disneyPluslLogo.svg';

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Navigation from './Navigation';

const Header = (props) => {
  const {} = props;
  const classes = useStyles(props)();
  const {} = classes;

  return (
    <header className={classes.headerContainer}>
      <div
        style={{
          width: 79,
          marginRight: 16,
          padding: '8px 32px',
        }}
      >
        <img src={disneyPlusLogo} alt="" />
      </div>
      <Navigation />
    </header>
  );
};

const useStyles = () =>
  makeStyles({
    headerContainer: {
      display: 'flex',
      // backgroundColor: 'rgb(9, 11, 19)',
      backgroundColor: 'transparent',
    },
  });

export default Header;
