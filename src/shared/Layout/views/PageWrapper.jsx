import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Header from './Header';

const PageWrapper = (props) => {
  const { imageCoverPath, imageCoverAltText, imageBrand } = props;
  const classes = useStyles();
  const {} = classes;

  return (
    <div className={classes.container}>
      <div className={classes.containerHader}>
        <Header />
      </div>
      <div className={classes.containerImageCover}>
        <img src={imageCoverPath} alt="" className={classes.imageCover} />
      </div>

      <main className={classes.content}>
        <div>
          <div className={classes.contaienrImageBrand}>
            <div>
              <img src={imageBrand} alt="" />
            </div>
          </div>
        </div>
        {props.children}
      </main>
      <div className={classes.containerFooter}>footer</div>
    </div>
  );
};

PageWrapper.propTypes = {
  imageCoverPath: PropTypes.string,
  imageAltText: PropTypes.string,
};

const useStyles = makeStyles({
  container: () => ({
    height: '100vh',
    width: '100vw',
    overflowX: 'hidden',
    overflowY: 'scroll',
    zIndex: -1,
    backgroundImage: `linear-gradient(0deg, rgba(26, 29, 41,1) 5%, rgba(255,255,255,0) 50%)`,
  }),
  containerHader: {
    position: 'fixed',
    width: '100%',
  },
  containerImageCover: {
    position: 'fixed',
    left: 0,
    top: 0,
    zIndex: -1,
    transition: 'opacity 200ms ease 0s',
  },

  imageCover: {
    maxWidth: '100vw',
  },

  content: {
    display: 'grid',
    gridTemplateColumns: '100vw',
    gridTemplateRows: '33vw auto',
  },
  contaienrImageBrand: {
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    '& > div': {
      paddingBottom: 24,
      height: '100%',
      width: '90%',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center',

      '& > img': {
        width: '23vw',
        height: '30vh',
      },
    },
  },

  containerChildren: {},
  containerFooter: {
    backgroundColor: '#000',
    height: '25vh',
  },
});

export default PageWrapper;
