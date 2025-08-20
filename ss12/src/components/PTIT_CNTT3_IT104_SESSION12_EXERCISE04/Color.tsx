import React from 'react';

type ColorBoxProps = {
  color: string;
};

const ColorBox = ({ color }: ColorBoxProps) => {
  const boxStyle: React.CSSProperties = {
    backgroundColor: color,
    width: '200px',
    height: '200px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: 'bold',
    margin: '10px',
    borderRadius: '4px'
  };

  return <div style={boxStyle}>Box</div>;
};

export default ColorBox;
