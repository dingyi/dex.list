import { keyframes } from 'styled-components'

const flicker = keyframes`
  0% { opacity: 0.3; }
  50% { opacity: 1; }
  100% { opacity: 0.3; }
`

const transitions = {
  default: 'cubic-bezier(0.23, 1, 0.32, 1)',
  defaultSpeed: '0.25',
  in: 'cubic-bezier(0.47, 0, 0.745, 0.715)',
  inBack: 'cubic-bezier(0.6, -0.28, 0.735, 0.045)',
  out: 'cubic-bezier(0.23, 1, 0.32, 1)',
  outBack: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  inOut: 'cubic-bezier(0.86, 0, 0.07, 1)',
  inOutBack: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
}

const theme = {
  colors: {
    background: '#fdf3f6',
    blue: '#6d434c',
    pink: '#F7417A',
    tertiary: '#8c8c8c'
  },
  breakpoints: [ 480, 952, 1208, 1736, 2264 ], //152+800, 152+1056, 152+1584
  shadows: {
    card: '0 1px 0 rgba(0, 0, 0, .05), 0 2px 4px rgba(0, 0, 0, .05), 0 6px 12px rgba(249, 103, 103, .05)',
    hover: '0 1px 0 rgba(0, 0, 0, .05), 0 4px 8px rgba(0, 0, 0, .1), 0 12px 24px rgba(249, 103, 103, .25)'
  },
  animations: {
    flicker
  },
  transitions,
}

export default theme
