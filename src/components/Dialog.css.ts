import { style, globalStyle } from '@vanilla-extract/css'

export const container = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  height: '100%',
})

export const dialog = style({
  background: 'white',
  padding: '1.4em 1em',
  width: 350,
  textAlign: 'center',
  fontWeight: 400,
  color: 'var(--font-grey-color, grey)',
})

export const list = style({
  selectors: {
    [`${dialog} & `]: {
      listStyle: 'none',
      paddingLeft: 0,
      textAlign: 'left',
      width: '70%',
      marginLeft: 'auto',
      marginRight: 'auto',
      fontSize: '1.4rem',
    },
  },
})

export const listItem = style({
  selectors: {
    [`${list} & `]: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '0.25em',
      marginBottom: '1em',
    },
  },
})

export const listIcon = style({
  selectors: {
    [`${listItem} & `]: {
      width: '3em',
    },
  },
})

globalStyle(`${dialog} h2`, {
  padding: '.625em 0',
  fontSize: '2rem',
})
