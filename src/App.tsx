import type { Component } from 'solid-js'
import { css } from '@stitches/core'

const button = css({
  backgroundColor: 'gainsboro',
  borderRadius: '9999px',
  fontSize: '13px',
  padding: '10px 15px',
  '&:hover': {
    backgroundColor: 'lightgray',
  },
})

const App: Component = () => {
  return (
    <>
      <button className={button()}>Stiches Button</button>
      <button className="px-2 py-2 text-white bg-red-500 rounded-full">
        Tailwind Button
      </button>
    </>
  )
}

export default App
