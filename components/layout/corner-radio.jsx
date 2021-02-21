/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

function SvgCornerRadio({ color, ...props }) {
  return (
    <svg
      viewBox="0 0 78 79"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M78.079.485a77.292 77.292 0 00-29.765 5.76 77.53 77.53 0 00-25.29 16.775A77.988 77.988 0 006.058 48.255C2.108 57.708.05 68.743 0 79h78L78.08.485z"
        fill={color}
      />
      <path
        d="M50 24.5C50 38.031 38.807 49 25 49S0 38.031 0 24.5 11.193 0 25 0s25 10.969 25 24.5z"
        fill="#A8AAAC"
        fillOpacity={0.5}
      />
    </svg>
  )
}

export default SvgCornerRadio
