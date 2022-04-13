import React from 'react';
import './styles.css';
import { Grid } from '@material-ui/core';

export default function SubscriptionHeader({nomeProduto, descricaoProduto, dataEvento}) {
  return (
    <div className='register-title'>
      <Grid container>
        <Grid item md={10}>
          <Grid container justifyContent='center' spacing={2}>
            <Grid item md={10}>
              <h1>{nomeProduto}</h1>
            </Grid>
            <Grid item md={10}>
              <h2>
                {descricaoProduto}
              </h2>
            </Grid>
            <Grid item md={10}>
              { dataEvento() }
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <div className='gradientback' ></div>
    </div>
  );
}