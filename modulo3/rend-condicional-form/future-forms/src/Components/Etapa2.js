import React from 'react';
import styled from 'styled-components';

export class Etapa2 extends React.Component {
  render() {
    return (
      <>
        <h1>Informações do Ensino Superior</h1>
        <li>Qual curso?</li>
        <input placeholder="Digite o curso"></input>
        <li>Qual a unidade de ensino?</li>
        <input placeholder="Digite a unidade"></input>
      </>
    );
  }
}
