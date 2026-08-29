import PageHero from './PageHero';
import Categories from '../components/Categories';
import CoverLevels from '../components/CoverLevels';
import Faq from '../components/Faq';
import CtaBand from '../components/CtaBand';

const Cover = () => (
  <>
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
