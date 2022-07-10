import React from 'react';
import PageTitle from '../../components/PageTitle';

import { Button, TextField } from '@mui/material';
import { FormContainer } from '../../components/PageTitle/FormContainer';

const CreateTripPage = () => {
  return (
    <div>
      <PageTitle title={'New Trip'} />
      <FormContainer>
        <TextField label={'Name'} type={'text'} />
        <TextField label={'Planet'} type={'text'} />
        <TextField label={''} type={'date'} />
        <TextField label={'Description'} type={'text'} />
        <TextField label={'Duration in days'} type={'number'} />

        <Button variant={'contained'} color={'primary'} type={'submit'}>
          Sign in
        </Button>
      </FormContainer>
    </div>
  );
};
export default CreateTripPage;
