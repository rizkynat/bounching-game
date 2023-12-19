import {MaxWidthContainer, ResponsiveSpacer} from 'axelra-react-utilities';
import {NextSeo} from 'next-seo';
import {ReactElement} from 'react';
import styled from 'styled-components';
import BounchingMaterial from '../components/BounchingMaterial';
import Stage from '../components/Stage';
import {FancyTitle} from '../components/ui/FancyTitle';
import MainLayout from '../layouts/main.layout';

const Container = styled(MaxWidthContainer)`
  overflow: hidden;
  height: 100%;
`;

const Home = () => {
  return (
    <Container>
      <NextSeo title={'Home'} />
      <ResponsiveSpacer x={4} lg={12} />
        <Stage/>
    </Container>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Home;
