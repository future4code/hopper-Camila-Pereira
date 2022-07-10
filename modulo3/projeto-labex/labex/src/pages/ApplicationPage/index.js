import React from 'react';
import PageTitle from '../../components/PageTitle';
import {
  Button,
  FormControl,
  TextField,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { FormContainer } from '../../components/PageTitle/FormContainer';

const ApplicationPage = () => {
  return (
    <div>
      <PageTitle title={'New Trip Application'} />
      <FormContainer>
        <TextField label={"Candidates's name"} />
        <TextField label={'Age'} type={'number'} />
        <TextField
          label={'Application Reasons'}
          helperText="Reasons why you should be selected "
        />
        <TextField label={'Profession'} />
        <FormControl>
          <InputLabel id="select-paises">Country</InputLabel>

          <Select labelId="select-paises">
            <MenuItem value={'Brasil'}>Brasil</MenuItem>
            <MenuItem value={'Australia'}>Australia</MenuItem>
            <MenuItem value={'Canada'}>Canada</MenuItem>
          </Select>
        </FormControl>

        <FormControl>
          <InputLabel id="select-viagens">Trips</InputLabel>

          <Select labelId="select-viagens">
            <MenuItem value={'1'}>Pluton</MenuItem>
            <MenuItem value={'2'}>Mars</MenuItem>
            <MenuItem value={'3'}>Urano</MenuItem>
          </Select>
        </FormControl>

        <Button variant={'contained'} color={'primary'} type={'submit'}>
          Sign up
        </Button>
      </FormContainer>
    </div>
  );
};
export default ApplicationPage;
