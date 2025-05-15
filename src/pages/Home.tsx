import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import Highlights from '../components/home/Highlights';
import FeaturedCampsites from '../components/home/FeaturedCampsites';
import Testimonials from '../components/home/Testimonials';
import GalleryPreview from '../components/home/GalleryPreview';
import WeatherWidget from '../components/home/WeatherWidget';
import CallToAction from '../components/home/CallToAction';

const Home: React.FC = () => {
  // Change page title on component mount
  useEffect(() => {
    document.title = 'Plumeria Retreat - Lakeside Camping & Cottages';
  }, []);
  
  return (
    <div>
      <Hero />
      <Highlights />
      <FeaturedCampsites />
      <WeatherWidget />
      <Testimonials />
      <GalleryPreview />
      <CallToAction />
    </div>
  );
};

export default Home;