import React from 'react';
import Header from './Header';
import Footer from './Footer';
import MenuLeft from './MenuLeft';
import MenuRight from './MenuRight';
import Between from './Between';

export default function Layout() {
  return (
    <div style={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <div style={{ display: 'flex', flex: 1 }}>
        <MenuLeft />
        <Between/>
        <MenuRight />
      </div>
      <Footer />
    </div>
  );
}
