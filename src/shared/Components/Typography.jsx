import React from 'react';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';

const Typography = (props) => {
  const { component, variant, bold, className, color, align, style, uppercase } = props;

  const classes = useStyles(uppercase);

  const boldClass = bold ? classes.bold : '';
  const colorClass = classes[color];
  const classesApply = [
    classes.font,
    classes[variant],
    boldClass,
    colorClass,
    classes[align],
    className,
  ].join(' ');

  return React.createElement(
    component,
    {
      className: classesApply,
      style,
    },
    props.children
  );
};

Typography.propTypes = {
  component: PropTypes.string,
  variant: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.string,
  align: PropTypes.string,
  bold: PropTypes.bool,
  style: PropTypes.object,
};

Typography.defaultProps = {
  component: 'span',
  variant: 'body1',
  className: '',
  color: 'light',
  align: 'left',
  bold: false,
  uppercase: true,
  style: {},
};

const useStyles = makeStyles({
  font: (uppercase) => ({
    fontFamily: 'Avenir-Heavy, sans-serif',
    textTransform: uppercase ? 'uppercase' : 'none',
  }),

  center: {
    textAlign: 'center',
  },

  left: {
    textAlign: 'center',
  },

  right: {
    textAlign: 'center',
  },

  bold: {
    fontWeight: 'bold',
  },

  default: {
    color: '#212b36',
  },

  light: {
    color: '#fff',
  },

  h4: {
    fontSize: '20px',
    fontStretch: 'normal',
    fontStyle: 'normal',
    letterSpacing: 'normal',
    lineHeight: '1.4',
  },
  body1: {
    fontSize: 14,
    letterSpacing: '1.42px',
    lineHeight: 1.8,
  },
});
export default Typography;
