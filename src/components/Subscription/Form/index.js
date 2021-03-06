/* eslint-disable no-useless-escape */
import React, { useState } from 'react';
import './styles.css';
import api from '../../../api';
import { Grid, Slide, TextField} from '@material-ui/core';
import { usePushingGutterStyles } from '@mui-treasury/styles/gutter/pushing';
import { makeStyles } from '@material-ui/core/styles';
import GradientButton from '../GradientButton';

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiInputBase-root": {
      color: `var(--back-color)`, //or try theme.palette.primary.main
      backgroundColor: `var(--main-dark-color2)`, //It should be white by default
    },
    '& label.Mui-focused': {
      color: `var(--main-dark-color2)`,
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: `var(--main-light-color2)`,
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: `var(--main-dark-color2)`,
      },
      '&:hover fieldset': {
        borderColor: `var(--main-dark-color2)`,
      },
      '&.Mui-focused fieldset': {
        borderColor: `var(--main-light-color2)`,
      },
    },
  },
}));

export default function SubscriptionForm({ checked, setSubscribed }) {
  const txtStyles = useStyles();
  const gutterStyles = usePushingGutterStyles({ cssProp: 'marginBottom', space: 2 });
  const [subscription, setSubscription] = useState({ name: "", email: "" });
  const [error, setError] = useState({ nameError: false, emailError: false });

  const validateEmail = (emailField) => {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return !(reg.test(emailField) === false) ;
  }

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setSubscription(prev => ({
      ...prev,
      [name]: value
    }));
  }

  const handleClick = () => {
    if (subscription !== undefined && subscription.name.length > 0 && validateEmail(subscription.email)) {
      api.RegisterSubscription(subscription)
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err);
        });
      setError({ nameError: false, emailError: false });
      setSubscribed(true);
    }
    else {
      setError({
        nameError: subscription.name.length === 0,
        emailError: !validateEmail(subscription.email),
        name: subscription.name.length === 0 ? "?? necess??rio preencher seu nome!" : "",
        email: !validateEmail(subscription.email) ? "?? necess??rio preencher um e-mail v??lido!" : "",
      })
    }
  }

  return (
    <div className='register-form'>
      <Slide direction="left" timeout={500} in={!checked} mountOnEnter unmountOnExit>
        <Grid container justifyContent='center'>
          <Grid item xs={12} md={10}>
            <TextField
              id='txtName'
              name='name'
              variant='outlined'
              placeholder={'Digite seu nome...'}
              fullWidth
              margin={'normal'}
              onChange={handleChange}
              value={subscription.name}
              className={txtStyles.root}
              error={error.nameError}
              helperText={(error && error.name) ?? ""}
            />
          </Grid>
          <Grid item xs={12} md={10}>
            <TextField
              id='txtEmail'
              name='email'
              variant='outlined'
              placeholder={'Digite seu melhor e-mail...'}
              fullWidth
              type="email"
              margin={'normal'}
              onChange={handleChange}
              value={subscription.email}
              className={txtStyles.root}
              error={error.emailError}
              helperText={(error && error.email) ?? ""}
            />
          </Grid>
          <Grid item xs={12} md={10} className={gutterStyles.parent}>
            <GradientButton onClick={handleClick}>
              QUERO ME INSCREVER!
            </GradientButton>
          </Grid>
        </Grid>
      </Slide>
    </div>
  );
}