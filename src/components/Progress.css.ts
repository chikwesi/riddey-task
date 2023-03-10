import { style } from '@vanilla-extract/css'

export const progressBar = style({
  height: 3,
  width: '70%',
  backgroundColor: 'lightgrey',
  position: 'relative',
  marginRight: 'auto',
  marginLeft: 'auto',
  marginBottom: "2.5em",
  fontSize: "1rem",
})

export const progressTrack = style({
  position: 'absolute',
  left: 0,
  top: 0,
  height: '100%',
  backgroundColor: 'var(--primary-color)',
})

export const progressInfo = style({
  color: "var(--primary-color)",
  fontSize: '1.2rem',
  fontWeight: 'bolder',
  padding: '.5em'
})
