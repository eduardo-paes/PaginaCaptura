import React, { useState } from 'react';
import './styles.css';
import { SubscriptionContainer, SubscriptionFooter, SubscriptionForm, SubscriptionHeader, WhatsappGroup } from '../../components';

const nomeProduto = "Viva Leve e Plena";
const descricaoProduto = "Descubra o passo a passo prático e eficaz para emagrecer, se livrar do inchaço abdominal e acabar de vez com a TPM começando pelo tratamento do seu intestino.";
const descricaoFinal = "Método prático e eficaz para perder peso, se livrar do inchaço abdominal e acabar de vez com a TPM.";

const gruposWhatsapp = [
  "https://chat.whatsapp.com/DnZ3k4CSi3L5DY1vKZxKHU",
  "https://chat.whatsapp.com/KuiG3fl1mOKH1kIS3QilxX",
  "https://chat.whatsapp.com/K47QWeNz0M2E8C3Mb3D9Dv"
];

export default function Subscription() {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <SubscriptionContainer>
      <SubscriptionHeader nomeProduto={nomeProduto} descricaoProduto={descricaoProduto} />
      {
        subscribed
          ? <WhatsappGroup nomeProduto={nomeProduto} grupos={gruposWhatsapp}/>
          : <SubscriptionForm setSubscribed={setSubscribed} />
      }
      <SubscriptionFooter descricaoFinal={descricaoFinal} />
    </SubscriptionContainer>
  );
}