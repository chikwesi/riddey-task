import { container } from './Button.css'

type ButtonT = {
  onClick?: () => void,
  children?: React.ReactNode,
  disabled?: boolean
}

function Button(prop: ButtonT) {
  const {disabled, onClick, children} = prop
  return (
    <button className={container} disabled={disabled} onClick={onClick}>{children}</button>
  )
}

export default Button
