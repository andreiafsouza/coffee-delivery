import { useTheme } from "styled-components";

export const Logo = () => {
  const theme = useTheme();
  return (
    <svg width="34" height="34" fill="none" viewBox="0 0 34 34">
      <ellipse
        cx="17"
        cy="17"
        fill="url(#paint0_linear_20_54)"
        rx="17"
        ry="17"
      ></ellipse>
      <circle cx="17" cy="17" r="12" fill={theme.base.text}></circle>
      <circle cx="17" cy="17" r="10" fill={theme.brand.yellow}></circle>
      <circle cx="17" cy="17" r="8" fill={theme.base.background}></circle>
      <rect
        width="7"
        height="2"
        x="27"
        y="16"
        fill={theme.base.text}
        rx="1"
      ></rect>
      <defs>
        <linearGradient
          id="paint0_linear_20_54"
          x1="24.403"
          x2="5.484"
          y1="2.194"
          y2="34.96"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={theme.base.text}></stop>
          <stop offset="1" stopColor={theme.base.text} stopOpacity="0"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};
