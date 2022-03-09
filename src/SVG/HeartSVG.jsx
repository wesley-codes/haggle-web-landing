


import React from 'react'

const HeartSVG = (props) => {
  return (
    <svg
    width={props.width}
    height={props.height}
    viewBox='0 0 41 37'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M29.172 2c-2.008 0-3.849.643-5.471 1.91C22.145 5.127 21.11 6.675 20.5 7.8c-.61-1.126-1.645-2.674-3.2-3.89C15.676 2.643 13.835 2 11.827 2 6.225 2 2 6.63 2 12.77c0 6.633 5.271 11.171 13.251 18.042a448.989 448.989 0 0 1 4.488 3.9 1.148 1.148 0 0 0 1.522 0 451.01 451.01 0 0 1 4.489-3.901C33.729 23.94 39 19.403 39 12.77 39 6.63 34.775 2 29.172 2Z'
      stroke='#000'
      strokeWidth={3}
    />
  </svg>
  )
}

export default HeartSVG