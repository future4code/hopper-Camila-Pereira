import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import styled from 'styled-components';

const PrimeiraSection = styled.div`
  width: 40vw;
  margin: 10px 0;
`;
const Titulo = styled.h2`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

function App() {
  return (
    <div
      className="App"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '30px',
      }}
    >
      <PrimeiraSection>
        <Titulo>Personal Details</Titulo>
        <CardGrande
          imagem="img/Cami2.jpg"
          nome="Camila Donda"
          descricao="Hi, I'm Camila Donda. I'm currently a student at Labenu Web Dev School. I am on my first trimester and already learnt Hmtl, Css, Javascript and React. I am a motivated and multitasking professional with over 11 years of experience working in customer service, looking for an opportunity to connect my vast expertise to IT activities."
        />

        <ImagemButton imagem="img/down.png" texto=" See more" />
      </PrimeiraSection>
      <CardPequeno
        imagem="img/email.png"
        texto="Email: camiladonda@gmail.com"
      />
      <CardPequeno imagem="img/home.png" texto="Address: Sydney- Australia" />
      <PrimeiraSection>
        <Titulo>Professional Experiences</Titulo>
        <CardGrande
          imagem="img/labenu.jpg"
          nome="Labenu"
          descricao="Formando desenvolvedores para o mercado de trabalho!"
        />

        <CardGrande
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg"
          nome="NASA"
          descricao="Apontando defeitos."
        />
      </PrimeiraSection>

      <PrimeiraSection>
        <Titulo>Social Media </Titulo>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </PrimeiraSection>
    </div>
  );
}

export default App;
