import { createTheme, style } from '@vanilla-extract/css'

export const [themeClass, themeVars] = createTheme({
  color: {
    'very-peri': '#6868ac',
  },
})

export const exampleStyle = style({
  backgroundColor: themeVars.color['very-peri'],
  color: 'white',
  padding: 10,
  borderRadius: '9999px',
})
