/* eslint-disable no-useless-escape */
import React from 'react';
import './styles.css';
import { Grid, Slide } from '@material-ui/core';
import GradientButton from '../GradientButton';
import { usePushingGutterStyles } from '@mui-treasury/styles/gutter/pushing';

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export default function WhatsappGroup({checked, nomeProduto, grupos}) {
  const gutterStyles = usePushingGutterStyles({ cssProp: 'marginBottom', space: 2 });

  const handleClick = () => {
    let idx =randomIntFromInterval(0, 2);
    window.open(grupos[idx], "_blank");
  }

  return (
    <Slide direction="left" in={checked} mountOnEnter unmountOnExit>
      <div className='wtp-container'>
        <Grid container justifyContent='center'>
          <Grid item xs={12} md={10}>
            <p className="wtp-title">
              ESTAMOS QUASE LÁ!
            </p>
            <p className="wtp-subtitle">
              <strong>AGORA SÓ FALTA MAIS UM PASSO...</strong>
            </p>
            <p className='wtp-description'>
              1 - Para que a sua inscrição seja confirmada e você garanta a sua 
              participação no evento <strong>{nomeProduto}</strong> você precisa fazer parte 
              do nosso Grupo Exclusivo de WhatsApp.<br/>
              2 - Será através desse Grupo de WhatsApp que você receberá todas as informações, 
              links, conteúdos e materiais complementares do Evento em primeira mão.
            </p>
          </Grid>
          <Grid item xs={12} md={10} className={gutterStyles.parent}>
            <GradientButton onClick={handleClick}>
              ENTRAR NO GRUPO DO WHATSAPP!
            </GradientButton>
          </Grid>
        </Grid>
      </div>
    </Slide>
  );
}
