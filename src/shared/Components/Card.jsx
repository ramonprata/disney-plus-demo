import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import homemFerro from '../../images/homemFerro.jpg';
const Card = (props) => {
  const {} = props;
  const classes = useStyles();

  return (
    <div className={classes.cardContainer}>
      <a>
        <div className={classes.imageContainer}>
          <img src={homemFerro} alt="" className={classes.image} />
        </div>
      </a>
    </div>
  );
};

const useStyles = makeStyles({
  cardContainer: {
    outline: 'none',
    borderRadius: 0,
    transform: 'scale(1, 1) translateZ(0px)',
    transitionDuration: '300ms',
    transitionProperty: 'transform, box-shadow',
    transitionTimingFunction: 'ease-out',
    cursor: 'pointer',
    boxShadow: '0px 19px 7px -10px rgba(0,0,0,0.72)',
    zIndex: 2,
    '&:hover': {
      transform: 'scale(1.05, 1.05) translateZ(0px) translate3d(0px, 0px, 0px)',
      transitionDuration: '300ms',
      transitionProperty: 'all',
      transitionTimingFunction: 'ease-out',
      boxShadow: '0px 64px 28px -40px rgba(0,0,0,0.85)',
    },
  },
  imageContainer: {
    width: '18vw',
    height: '25vh',
    minHeight: 162,
    minWidth: 288,
    outline: 'none',
    transition: 'all 300ms ease-out',
    '&:hover': {
      outline: '6px solid rgba(255,255,255,0.5)',

      '& > img': {
        borderRadius: 0,
      },
    },
  },
  image: {
    width: '100%',
    borderRadius: 6,
    height: '100%',
  },
});

export default Card;
