import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import arrowbackward from '../../images/arrowbackward.svg';
import arrowforward from '../../images/arrowforward.svg';
import Typography from './Typography';

const SliderSection = (props) => {
  const [page, setPage] = useState(0);
  const {} = props;
  const classes = useStyles(page);

  const handleBackward = () => {
    if (page > 0) {
      setPage((page) => (page -= 1));
    }
  };

  const handleForward = () => {
    setPage((page) => (page += 1));
  };

  return (
    <div className={classes.slider}>
      <div>
        <Typography bold uppercase={false} variant="h4">
          Universo Cinematográfico Marvel
        </Typography>
      </div>
      <div className={classes.cardsContainer}>
        <div
          className={`${classes.containerArrow} ${classes.arrowbackward}`}
          style={{ left: 0 }}
          onClick={handleBackward}
        >
          <div>
            <img src={arrowbackward} alt="" />
          </div>
        </div>
        {props.children.map((child, idx) => (
          <div
            key={`child-${idx}`}
            className={classes.child}
            style={{ marginLeft: idx === 0 ? window.innerWidth * 0.025 + 24 : 0 }}
          >
            {child}
          </div>
        ))}
        <div
          className={`${classes.containerArrow} ${classes.arrowforward}`}
          style={{ right: 0 }}
          onClick={handleForward}
        >
          <div>
            <img src={arrowforward} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

const useStyles = makeStyles({
  container: {},
  slider: {
    width: '100%',
  },
  cardsContainer: {
    padding: '12px 0 64px 0px',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
  },
  containerArrow: {
    width: 'calc(2.5vw + 24px)',
    height: '100%',
    position: 'absolute',
    // backgroundColor: 'rgba(255,255,255,0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
    cursor: 'pointer',
    '& > div': {
      width: 48,
      height: 48,
    },
  },
  arrowbackward: (page) => ({
    visibility: page > 0 ? 'visible' : 'hidden',
  }),
  arrowforward: {},
  child: (page) => ({
    position: 'relative',
    left: page === 0 ? 0 : window.innerWidth * 0.19 * page * -1,
    transition: 'all .3s',
    marginRight: '1.6rem',
  }),
});

export default SliderSection;
