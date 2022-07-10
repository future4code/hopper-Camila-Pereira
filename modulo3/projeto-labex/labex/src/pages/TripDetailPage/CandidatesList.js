import React from 'react';
import List from '@mui/material/List';

import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CandidateItem from './CandidateItem';

const CandidatesList = () => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          List of travellers
        </Typography>

        <List>
          <CandidateItem candidate={'Mario'} />
          <CandidateItem candidate={'Cami'} />
          <CandidateItem candidate={'Ashton'} />
          <CandidateItem candidate={'Lucas'} />
        </List>
      </CardContent>
    </Card>
  );
};
export default CandidatesList;
