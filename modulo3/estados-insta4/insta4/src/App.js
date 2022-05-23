import React from 'react';
import styled from 'styled-components';
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  input {
    font-size: 20px;
    padding: 0 10px;
    margin-bottom: 10px;
  }
`;
const InputPost = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
class App extends React.Component {
  state = {
    valorInputNomeUser: '',
    valorInputFotoUser: '',
    valorInputFotoPost: '',

    post: [
      {
        nomeUsuario: 'Paulinha',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150',
      },
      {
        nomeUsuario: 'Marininha',
        fotoUsuario: 'https://picsum.photos/50/51',
        fotoPost: 'https://picsum.photos/200/151',
      },
      {
        nomeUsuario: 'Robertinha',
        fotoUsuario: 'https://picsum.photos/50/52',
        fotoPost: 'https://picsum.photos/200/152',
      },
    ],
  };

  adicionaPost = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputNomeUser,
      fotoUsuario: this.state.valorInputFotoUser,
      fotoPost: this.state.valorInputFotoPost,
    };
    const postNovo = [...this.state.post, novoPost];

    this.setState({
      post: postNovo,
      valorInputNomeUser: '',
      valorInputFotoUser: '',
      valorInputFotoPost: '',
    });
  };
  onChangeInputUser = (event) => {
    this.setState({ valorInputNomeUser: event.target.value });
  };
  onChangeInputFotoUser = (event) => {
    this.setState({ valorInputFotoUser: event.target.value });
  };
  onChangeInputFotoPost = (event) => {
    this.setState({ valorInputFotoPost: event.target.value });
  };

  render() {
    const listaDeComponents = this.state.post.map((post) => {
      return (
        <Post
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
        />
      );
    });
    return (
      <MainContainer>
        <InputPost>
          <input
            placeholder="Usuario"
            value={this.state.valorInputNomeUser}
            onChange={this.onChangeInputUser}
          />
          <input
            placeholder="Foto"
            value={this.state.valorInputFotoUser}
            onChange={this.onChangeInputFotoUser}
          />
          <input
            placeholder="Post"
            value={this.state.valorInputFotoPost}
            onChange={this.onChangeInputFotoPost}
          />
          <button onClick={this.adicionaPost}> Adicionar</button>
        </InputPost>
        <div>{listaDeComponents}</div>
      </MainContainer>
    );
  }
}

export default App;
