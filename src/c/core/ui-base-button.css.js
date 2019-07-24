import c from "c/core/ui-colors.css.js";

const baseButton = {
  appearance: 'none',
	border: 'none',
	borderRadius: 0,
  cursor: 'pointer',
  display: 'inline-block',
  font: 'inherit',
  maxWidth: '100%',
  padding: '0.5rem 1rem',
  width: 'auto'
}

export const basic = {
  ...baseButton,
  backgroundColor: c.teal
}

export const none = {
  ...baseButton,
  backgroundColor: c.mintGreen
}

export default {
  basic,
  none,
}