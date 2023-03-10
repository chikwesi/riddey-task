import { style } from '@vanilla-extract/css'

export const container = style({
  padding: 10,
  color: 'white',
  outline: 'none',
  fontWeight: 'bolder',
  border: 'none',
  width: '100%',
  backgroundColor: 'var(--primary-color)',
  ':hover': {
    backgroundColor: 'var(--primary-color-hover)',
    cursor: 'pointer',
  },
  ':active': {
    backgroundColor: 'var(--primary-color-active)',
  },
  ':disabled': {
    opacity: 0.4,
  },
  selectors: {
    '&:hover, &:active, &:disabled': {
      transition: 'ease-in 200ms',
    },
  },
})

export const dialog = style({
  background: 'white',
  padding: 10,
  width: 400,
})
