import { Discover, Faq, Footer, Hero, Navbar, Newsletter } from '@/components';
import React from 'react';

const Home = () => (
  <div>
    <Navbar />
    <Hero />
    <Discover />
    <Faq />
    <Newsletter />
    <Footer />
  </div>
);

export default Home;
