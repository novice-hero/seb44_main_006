import { IconStyle } from '../types/type';

export const Thumbnail = ({ style }: { style: IconStyle }) => {
  return (
    <svg
      width={style.iconWidth || 125}
      height={style.iconHeight || 103}
      viewBox="0 0 125 103"
      fill={style.color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M114.062 0.875H10.9375C8.20245 0.875 5.57943 1.76395 3.64546 3.34629C1.71149 4.92862 0.625 7.07474 0.625 9.3125V93.6875C0.625 95.9253 1.71149 98.0714 3.64546 99.6537C5.57943 101.236 8.20245 102.125 10.9375 102.125H114.062C116.798 102.125 119.421 101.236 121.355 99.6537C123.289 98.0714 124.375 95.9253 124.375 93.6875V9.3125C124.375 7.07474 123.289 4.92862 121.355 3.34629C119.421 1.76395 116.798 0.875 114.062 0.875ZM114.062 93.6875H10.9375V68.375L36.7188 47.2812L65.5422 70.8641C67.4744 72.4356 70.0881 73.3176 72.8125 73.3176C75.5369 73.3176 78.1506 72.4356 80.0828 70.8641L88.2812 64.1562L114.062 85.25V93.6875ZM114.062 73.3109L95.5516 58.1656C93.6194 56.5941 91.0057 55.7121 88.2812 55.7121C85.5568 55.7121 82.9431 56.5941 81.0109 58.1656L72.8125 64.8734L43.9891 41.2906C42.0569 39.7191 39.4432 38.8371 36.7188 38.8371C33.9943 38.8371 31.3806 39.7191 29.4484 41.2906L10.9375 56.4359V9.3125H114.062V73.3109Z"
        fill="#DDDDDD"
      />
    </svg>
  );
};
