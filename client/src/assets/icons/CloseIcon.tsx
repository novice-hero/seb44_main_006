import { IconStyle } from '../../types/type';

const CloseIcon = ({ style }: { style: IconStyle }) => {
  return (
    <svg
      width={style.iconWidth}
      height={style.iconHeight}
      viewBox="0 0 19 19"
      fill={style.color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.098 0.699341C18.3749 0.976206 18.5304 1.35172 18.5304 1.74326C18.5304 2.13481 18.3749 2.51032 18.098 2.78718L11.4865 9.39868L18.098 16.0102C18.3749 16.287 18.5304 16.6626 18.5304 17.0541C18.5304 17.4456 18.3749 17.8212 18.098 18.098C17.8212 18.3749 17.4456 18.5304 17.0541 18.5304C16.6626 18.5304 16.287 18.3749 16.0102 18.098L9.39868 11.4865L2.78718 18.098C2.51032 18.3749 2.13481 18.5304 1.74326 18.5304C1.35172 18.5304 0.976206 18.3749 0.699341 18.098C0.422476 17.8212 0.266934 17.4456 0.266934 17.0541C0.266934 16.6626 0.422476 16.287 0.699341 16.0102L7.31084 9.39868L0.699341 2.78718C0.422476 2.51032 0.266934 2.13481 0.266934 1.74326C0.266934 1.35172 0.422476 0.976206 0.699341 0.699341C0.976206 0.422476 1.35172 0.266935 1.74326 0.266935C2.13481 0.266935 2.51032 0.422476 2.78718 0.699341L9.39868 7.31084L16.0102 0.699342C16.287 0.422477 16.6626 0.266935 17.0541 0.266935C17.4456 0.266935 17.8212 0.422476 18.098 0.699341Z"
        fill="black"
      />
    </svg>
  );
};
export default CloseIcon;
