import React from 'react';
import PageTitle from '../../components/PageTitle';
import { LoginForm } from './styles';
import { Button, TextField } from '@mui/material';

const LoginPage = () => {
  return (
    <div>
      <PageTitle title={'Login'} />
      <LoginForm>
        <TextField label={'Email'} type={'email'} />
        <TextField label={'Password'} type={'password'} />

        <Button variant={'contained'} color={'primary'} type={'submit'}>
          Sign in
        </Button>
      </LoginForm>
    </div>
  );
};
export default LoginPage;
