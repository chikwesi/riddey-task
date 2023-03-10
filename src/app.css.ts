import { style, globalStyle } from '@vanilla-extract/css'

export const container = style({
  backgroundColor: 'gray',
  height: '100%',
})

globalStyle('html, body', {
  margin: 0,
  padding: 0,
  height: '100%',
  vars: {
    '--primary-color': '#E26559',
    '--primary-color-active': '#883D35',
    '--primary-color-hover': '#B55147'
  },
})
globalStyle('html', {
  fontSize: '62.5%'
})

globalStyle('body', {
  fontSize: '1.6rem'
})

globalStyle('*', {
  boxSizing: 'border-box'
})

globalStyle('h1, h2,h3, p', {
  marginBottom: 0,
  marginTop: 0
})
