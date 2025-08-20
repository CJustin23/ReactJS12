import React from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

export default function Sum() {
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column',width:'900px' }}>
      <Header />
      <div style={{ display: 'flex', flex: 1 }}>
        <Body></Body>
      </div>
      <Footer />
    </div>
  );
}