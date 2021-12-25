import type { Component } from 'solid-js';
import { css } from '@stitches/core';

const button = css({
  backgroundColor: 'gainsboro',
  borderRadius: '9999px',
  fontSize: '13px',
  padding: '10px 15px',
  '&:hover': {
    backgroundColor: 'lightgray',
  },
});

const App: Component = () => {
  return (
    <>
        <button className={button()}>Stiches Button</button>
        <button className="bg-red-500 text-white rounded-full py-2 px-2">Tailwind Button</button>
    </>
    
  );
};

export default App;
