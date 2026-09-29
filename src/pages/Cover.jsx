import { Helmet } from 'react-helmet-async';
import PageHero from './PageHero';
import Categories from '../components/Categories';
import CoverLevels from '../components/CoverLevels';
import Faq from '../components/Faq';
import CtaBand from '../components/CtaBand';

const Cover = () => (
  <>
    <Helmet>
      <title>Car, Bike &amp; Van Cover Types | Zonyx Auto Insurance</title>
      <meta name="description" content="Compare Third Party, Fire &amp; Theft and Comprehensive cover across 8 classes of use — social, commuting, courier, food delivery, taxi and private hire." />
    </Helmet>
    <PageHero
      eyebrow="What we arrange"
      title="Cover types"
      intro="From social use through to hire and reward, here is what each class of use means and how far each level of cover goes."
      image="/images/van-road-1400.jpg"
    />
    <Categories />
    <CoverLevels />
    <Faq />
    <CtaBand />
  </>
);

export default Cover;
