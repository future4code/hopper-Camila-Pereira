import React from 'react';

import styled from 'styled-components';

const CardPequenoDiv = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
  width: 40vw;
  padding: 15px 10px;
  margin: 10px;
`;
const PequenoImagem = styled.img`
  width: 30px;
  margin-right: 10px;
`;
const CardDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: flex-start;
`;

function CardPequeno(props) {
  return (
    <CardPequenoDiv>
      <CardDiv>
        <PequenoImagem src={props.imagem}></PequenoImagem>
        <p>{props.texto}</p>
      </CardDiv>
    </CardPequenoDiv>
  );
}

export default CardPequeno;
