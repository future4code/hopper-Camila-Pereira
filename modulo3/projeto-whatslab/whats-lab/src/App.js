import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
  }
  body{
 
  }
`;
const MainContainer = styled.div`
  background-color: #ece5dd;
  width: 40%;
  margin: 0.5% auto;
  height: 99vh;
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  @media screen and (max-width: 800px) {
    width: 98%;
  }
`;
const WhatsContainer = styled.div`
  border: 1px solid gray;
  width: 45vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #faf0e6;
`;
const CaixaMsg = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column-reverse;
  height: 90%;
  p {
    padding: 10px;
    border-radius: 5px;
    background-color: #fff;
    max-width: 80%;
    word-wrap: break-word;
    font-size: 1.5rem;
  }
`;
const Container = styled.div`
  padding: 15px;
`;
const WhatsFooter = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 5px;
`;

const PrimeiroInput = styled.input`
  width: 15vh;
  border-radius: 10px;
  padding: 5px;
  margin: 0 5px;
`;
const SegundoInput = styled.input`
  width: 100%;
  border-radius: 10px;
  padding: 5px;
  margin: 0 5px;
`;
const StiloButton = styled.button`
  width: 15vh;
  border-radius: 10px;
  padding: 5px;
  margin: 0 5px;
  background-color: #778899;
`;

class App extends React.Component {
  state = {
    appWhats: [
      {
        nome: '',
        msg: '',
      },
      {
        nomePrimeiro: '',
        msgEnviada: '',
      },
    ],
  };

  enviarMsg = () => {
    const novaMensagem = {
      nome: this.state.nomePrimeiro,
      msg: this.state.msgEnviada,
    };

    const novaMsg = [novaMensagem, ...this.state.appWhats];
    this.setState({ appWhats: novaMsg, nomePrimeiro: '', msgEnviada: '' });
  };

  onChangeNome = (event) => {
    this.setState({ nomePrimeiro: event.target.value });
  };

  onChangeMsg = (event) => {
    this.setState({ msgEnviada: event.target.value });
  };

  render() {
    const listaComponents = this.state.appWhats.map((msgs) => {
      return (
        <Container>
          <strong>{msgs.nome} </strong>
          {msgs.msg}
        </Container>
      );
    });
    return (
      <MainContainer>
        <GlobalStyle />
        <WhatsContainer>
          <CaixaMsg>
            <p>{listaComponents}</p>
          </CaixaMsg>

          <WhatsFooter>
            <PrimeiroInput
              placeholder="nome"
              onChange={this.onChangeNome}
              value={this.state.nomePrimeiro}
            />

            <SegundoInput
              placeholder="digite a mensagem"
              onChange={this.onChangeMsg}
              value={this.state.msgEnviada}
            />

            <StiloButton onClick={this.enviarMsg}>Enviar</StiloButton>
          </WhatsFooter>
        </WhatsContainer>
      </MainContainer>
    );
  }
}

export default App;
