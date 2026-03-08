import Hero from '../components/Hero';
import Categories from '../components/Categories';
import QuoteForm from '../components/QuoteForm';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <Categories />
      <QuoteForm />
    </div>
  );
};

export default Home;
