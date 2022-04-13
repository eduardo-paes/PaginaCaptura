import React from 'react';
import './styles.css';
import { Grid } from '@material-ui/core';

export default function SubscriptionFooter({descricaoFinal}) {
  return (
    <div className='register-final-message'>
      <Grid container justifyContent='center' spacing={2}>
        <Grid item md={6} xs={12}>
          <h3>{descricaoFinal}</h3>
        </Grid>
      </Grid>
    </div>
  )
}