import React from 'react';
import PageTitle from '../../components/PageTitle';
import CandidatesList from './CandidatesList';
import TripInfoCard from './TripInfoCard';
import { ContentContainer } from './styles';

const TripDetailPage = () => {
  return (
    <div>
      <PageTitle title={'Trip Details'} />
      <ContentContainer>
        <TripInfoCard />
        <CandidatesList />
      </ContentContainer>
    </div>
  );
};
export default TripDetailPage;
