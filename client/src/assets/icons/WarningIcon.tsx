import { IconStyle } from '../../types/type';

const WarningIcon = ({ style }: { style: IconStyle }) => {
  return (
    <svg
      width={style.iconWidth}
      height={style.iconHeight}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="12" fill="#FD6868" />
      <path
        d="M12.8087 14.6153L11.4007 14.6116L11.1179 6.57881L13.1499 6.58417L12.8087 14.6153ZM10.9942 17.0585C10.9953 16.6425 11.1028 16.3495 11.3165 16.1794C11.5303 16.0093 11.7919 15.9246 12.1012 15.9254C12.3892 15.9262 12.6397 16.0122 12.8525 16.1834C13.0761 16.3547 13.1873 16.6483 13.1862 17.0643C13.1851 17.4803 13.0723 17.7787 12.8478 17.9594C12.634 18.1402 12.3831 18.2302 12.0951 18.2294C11.7858 18.2286 11.5247 18.1373 11.3119 17.9554C11.099 17.7735 10.9931 17.4745 10.9942 17.0585Z"
        fill="white"
      />
    </svg>
  );
};
export default WarningIcon;
