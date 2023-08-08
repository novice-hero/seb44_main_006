import { IconStyle } from '../../types/type';

const Trash = ({ style }: { style: IconStyle }) => {
  return (
    <svg
      width={style.iconWidth}
      height={style.iconHeight}
      viewBox="0 0 16 18"
      fill={style.color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.0938 2.625H11.8125V1.96875C11.8125 1.44661 11.6051 0.945846 11.2359 0.576634C10.8667 0.207421 10.3659 0 9.84375 0H5.90625C5.38411 0 4.88335 0.207421 4.51413 0.576634C4.14492 0.945846 3.9375 1.44661 3.9375 1.96875V2.625H0.65625C0.482202 2.625 0.315282 2.69414 0.192211 2.81721C0.0691406 2.94028 0 3.1072 0 3.28125C0 3.4553 0.0691406 3.62222 0.192211 3.74529C0.315282 3.86836 0.482202 3.9375 0.65625 3.9375H1.3125V15.75C1.3125 16.0981 1.45078 16.4319 1.69692 16.6781C1.94306 16.9242 2.2769 17.0625 2.625 17.0625H13.125C13.4731 17.0625 13.8069 16.9242 14.0531 16.6781C14.2992 16.4319 14.4375 16.0981 14.4375 15.75V3.9375H15.0938C15.2678 3.9375 15.4347 3.86836 15.5578 3.74529C15.6809 3.62222 15.75 3.4553 15.75 3.28125C15.75 3.1072 15.6809 2.94028 15.5578 2.81721C15.4347 2.69414 15.2678 2.625 15.0938 2.625ZM5.25 1.96875C5.25 1.7947 5.31914 1.62778 5.44221 1.50471C5.56528 1.38164 5.7322 1.3125 5.90625 1.3125H9.84375C10.0178 1.3125 10.1847 1.38164 10.3078 1.50471C10.4309 1.62778 10.5 1.7947 10.5 1.96875V2.625H5.25V1.96875ZM13.125 15.75H2.625V3.9375H13.125V15.75ZM6.5625 7.21875V12.4688C6.5625 12.6428 6.49336 12.8097 6.37029 12.9328C6.24722 13.0559 6.0803 13.125 5.90625 13.125C5.7322 13.125 5.56528 13.0559 5.44221 12.9328C5.31914 12.8097 5.25 12.6428 5.25 12.4688V7.21875C5.25 7.0447 5.31914 6.87778 5.44221 6.75471C5.56528 6.63164 5.7322 6.5625 5.90625 6.5625C6.0803 6.5625 6.24722 6.63164 6.37029 6.75471C6.49336 6.87778 6.5625 7.0447 6.5625 7.21875ZM10.5 7.21875V12.4688C10.5 12.6428 10.4309 12.8097 10.3078 12.9328C10.1847 13.0559 10.0178 13.125 9.84375 13.125C9.6697 13.125 9.50278 13.0559 9.37971 12.9328C9.25664 12.8097 9.1875 12.6428 9.1875 12.4688V7.21875C9.1875 7.0447 9.25664 6.87778 9.37971 6.75471C9.50278 6.63164 9.6697 6.5625 9.84375 6.5625C10.0178 6.5625 10.1847 6.63164 10.3078 6.75471C10.4309 6.87778 10.5 7.0447 10.5 7.21875Z"
        fill="black"
      />
    </svg>
  );
};
export default Trash;
