import React from 'react';
import ColorBox from './Color';

export default function Ex04() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <ColorBox color="red" />
        <div style={{ marginTop: '5px' }}><code>red</code></div>
      </div>

      <div style={{ textAlign: 'center' }}>
        <ColorBox color="blue" />
        <div style={{ marginTop: '5px' }}><code>blue</code></div>
      </div>

      <div style={{ textAlign: 'center' }}>
        <ColorBox color="green" />
        <div style={{ marginTop: '5px' }}><code>green</code></div>
      </div>
    </div>
  );
}
