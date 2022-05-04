/* eslint-disable no-useless-escape */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useBtnStyles = makeStyles({
  root: {
    padding: '1rem',
    transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
    marginTop: '1rem',
    background:
      `linear-gradient(to right, var(--main-light-color1), var(--main-dark-color1))`,
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  label: {
    color: `var(--back-color)`,
    textTransform: 'none',
    fontSize: 15,
    fontWeight: 700,
  },
  contained: {
    minHeight: 30,
    boxShadow: '#555555',
    '&:active': {
      boxShadow: '#555',
    },
  },
});

export default function GradientButton(props) {
  const btnStyles = useBtnStyles();
  return (
    <Button 
      fullWidth 
      onClick={props.onClick}
      classes={btnStyles}>
        {props.children}
    </Button>
  )
}
