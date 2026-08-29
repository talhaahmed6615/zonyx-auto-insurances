import { useState } from 'react';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import Categories from '../components/Categories';
import WhyUs from '../components/WhyUs';
import CoverLevels from '../components/CoverLevels';
import WorkProcess from '../components/WorkProcess';
import Testimonials from '../components/Testimonials';
import QuoteForm from '../components/QuoteForm';
import Faq from '../components/Faq';
import CtaBand from '../components/CtaBand';

const Home = () => {
  // Lifted so the hero's vehicle picker can seed the quote form below.
  const [startVehicle, setStartVehicle] = useState(null);

  const handleStartQuote = (vehicle) => {
    setStartVehicle(vehicle);
    document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <Hero onStartQuote={handleStartQuote} />
      <TrustBar />
      <Categories />
      <WhyUs />
      <CoverLevels />
      <WorkProcess />
      <Testimonials />
      <QuoteForm startVehicle={startVehicle} />
      <Faq />
      <CtaBand />
    </>
  );
};

export default Home;
