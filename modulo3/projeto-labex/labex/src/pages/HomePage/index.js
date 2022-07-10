import React from 'react';
import PageTitle from '../../components/PageTitle';
import { Button } from '@mui/material';
import { ButtonsContainer } from './styles';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <PageTitle title={'LabeX'} />
      <ButtonsContainer>
        <Link to={'/login'}>
          <Button variant={'outlined'} color={'secondary'}>
            Area do Administrador
          </Button>
        </Link>
        <Link to={'/inscricao'}>
          <Button variant={'contained'} color={'primary'}>
            Quero me Candidatar
          </Button>
        </Link>
      </ButtonsContainer>
    </div>
  );
};
export default HomePage;
