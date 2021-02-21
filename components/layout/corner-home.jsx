/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
function SvgCornerHome({ color, ...props }) {
  return (
    <svg
      viewBox="0 0 214 222"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M214 22.1c-27.5-.001-52.715 5.094-77.116 15.035a200.68 200.68 0 00-65.336 43.099 200.452 200.452 0 00-43.854 64.796C17.477 169.296 12.144 195.675 12 222l162.001.001c22.091 0 40-17.909 40-40V122.5L214 22.1z"
        fill={color}
      />
      <circle cx={80} cy={80} r={80} fill="#BCA0AD" fillOpacity={0.6} />
    </svg>
  )
}

export default SvgCornerHome
