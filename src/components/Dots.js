export const Dots = ({ size = 50, fill = "rgb(255, 255, 255)" }) => (
  <svg
    width={size * 2.2}
    height={size}
    viewBox="0 0 110 50"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="5" cy="5" r="5" opacity="1" />
    <circle cx="5" cy="25" r="5" opacity="1" />
    <circle cx="5" cy="45" r="5" opacity="1" />
    <circle cx="25" cy="5" r="5" opacity="1" />
    <circle cx="25" cy="25" r="5" opacity="1" />
    <circle cx="25" cy="45" r="5" opacity="1" />
    <circle cx="45" cy="5" r="5" opacity=".8" />
    <circle cx="45" cy="25" r="5" opacity=".8" />
    <circle cx="45" cy="45" r="5" opacity=".8" />
    <circle cx="65" cy="5" r="5" opacity=".6" />
    <circle cx="65" cy="25" r="5" opacity=".6" />
    <circle cx="65" cy="45" r="5" opacity=".6" />
    <circle cx="85.5" cy="5" r="5" opacity=".4" />
    <circle cx="85.5" cy="25" r="5" opacity=".4" />
    <circle cx="85.5" cy="45" r="5" opacity=".4" />
    <circle cx="105.5" cy="5" r="5" opacity=".2" />
    <circle cx="105.5" cy="25" r="5" opacity=".2" />
    <circle cx="105.5" cy="45" r="5" opacity=".2" />
  </svg>
);
