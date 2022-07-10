import React from 'react';
import PageTitle from '../../components/PageTitle';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import { TripsListPageContainer } from './styles';

const TripListPage = () => {
  return (
    <TripsListPageContainer>
      <PageTitle title={'Travel destination'} />
      <Link to={'/viagens/criar'}>
        <Button variant={'contained'} color={'primary'}>
          Get started
        </Button>
      </Link>

      <nav aria-label="secondary mailbox folders">
        <List>
          <Link to={'/viagens/detalhe'}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Trip to Mars" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to={'/viagens/detalhe'}>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#simple-list">
                <ListItemText primary="Trip to the Moon" />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
      </nav>
    </TripsListPageContainer>
  );
};
export default TripListPage;
