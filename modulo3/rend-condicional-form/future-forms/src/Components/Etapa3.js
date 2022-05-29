import React from 'react';
import styled from 'styled-components';

export class Etapa3 extends React.Component {
  render() {
    return (
      <>
        <li>Porque nao terminou um curso de graduacao?</li>
        <input placeholder="Digite aqui"></input>
        <li>Voce fez algum curso complementar?</li>
        <select>
          <option>Nenhum</option>
          <option>Curso Tecnico</option>
          <option>Curso de ingles</option>
        </select>
      </>
    );
  }
}
