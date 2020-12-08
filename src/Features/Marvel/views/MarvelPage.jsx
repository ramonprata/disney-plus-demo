import React from 'react';
import marvelCover from '../../../images/marvelCover.jpg';
import marvelBrand from '../../../images/marvelBrand.png';
import { makeStyles } from '@material-ui/styles';
import { PageWrapper } from '../../../shared/Layout';
import { Typography, Card, SliderSection } from '../../../shared/Components';

const MarvelPage = (props) => {
  const {} = props;
  const classes = useStyles(props);

  return (
    <PageWrapper imageCoverPath={marvelCover} imageBrand={marvelBrand}>
      <SliderSection>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </SliderSection>
      <SliderSection>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </SliderSection>
    </PageWrapper>
  );
};

const useStyles = makeStyles({});

export default MarvelPage;
