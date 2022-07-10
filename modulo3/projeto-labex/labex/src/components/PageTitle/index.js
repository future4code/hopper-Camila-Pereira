import React from 'react';
import { Typography } from '@mui/material';

const PageTitle = (props) => {
  return (
    <Typography variant="h1" align={'center'} gutterBottom>
      {props.title}
    </Typography>
  );
};
export default PageTitle;
