import React from 'react';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';

import TripInfoItem from './TripInfoItem';

const TripInfoCard = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" color="text.secondary" gutterBottom>
          Trip Details
        </Typography>
      </CardContent>
      <TripInfoItem infoTitle={'Name'} info={'Trip to Mars'} />
      <TripInfoItem infoTitle={'Planet'} info={'Mars'} />
      <TripInfoItem infoTitle={'Date'} info={'01/12/2022'} />
      <TripInfoItem
        infoTitle={'Description'}
        info={'Amazing trip with the Martians '}
      />
      <TripInfoItem infoTitle={'Durantion in days'} info={'528 days'} />
    </Card>
  );
};

export default TripInfoCard;
