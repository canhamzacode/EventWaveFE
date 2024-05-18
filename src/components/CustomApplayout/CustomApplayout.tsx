import React from 'react';
import { AppHeader } from '../AppHeader';
import { Footer } from '../Footer';
import { Filter } from '../Filter';

const CustomApplayout = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <div>
    <AppHeader />
    <Filter />
    {children}
    <Footer />
  </div>
);

export default CustomApplayout;
