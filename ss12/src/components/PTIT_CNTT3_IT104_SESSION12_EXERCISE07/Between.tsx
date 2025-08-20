import React from 'react';

function Cart() {
  return (
    <div style={{
      backgroundColor: 'white',
      border: '1px solid #ccc',
      padding: '20px',
      textAlign: 'center',
      margin: '10px',
      flex: '0 0 30%'
    }}>
      Cart
    </div>
  );
}

export default function Between() {
  return (
    <>
      <Cart />
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        backgroundColor: '#fef2f2',
        justifyContent: 'space-around',
        padding: '10px',
        flex: 1
      }}>
        {Array.from({ length: 12 }).map((_, index) => (
          <Cart key={index} />
        ))}
      </div>
    </>
  );
}