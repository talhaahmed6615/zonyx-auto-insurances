import Hero from '../components/Hero';
import Categories from '../components/Categories';
import IntroAbout from '../components/IntroAbout';
import WorkProcess from '../components/WorkProcess';
import Testimonials from '../components/Testimonials';
import QuoteForm from '../components/QuoteForm';
import GetInTouch from '../components/GetInTouch';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      
      <Categories />
      <IntroAbout />
      <WorkProcess />
      <Testimonials />
      <QuoteForm />
      <GetInTouch />
    </div>
  );
};

export default Home;
