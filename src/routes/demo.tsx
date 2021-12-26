import { JSX } from 'solid-js'
import { css } from '@stitches/core'
import * as styles from '../styles/button.css'

const button = css({
  backgroundColor: 'gainsboro',
  borderRadius: '9999px',
  fontSize: '13px',
  padding: '10px 15px',
  '&:hover': {
    backgroundColor: 'lightgray',
  },
})

export default function DemoPage(): JSX.Element {
  return (
    <div className="flex flex-col">
      <h1 className="text-5xl">DEMO PAGE</h1>
      <div className="flex">
        <button className={button()}>Stiches Button</button>
        <button className="px-2 py-2 text-white bg-red-500 rounded-full">
          Tailwind Button
        </button>
        <div className={styles.themeClass}>
          <button className={styles.exampleStyle}>Vanilla Extract</button>
        </div>
      </div>
    </div>
  )
}
