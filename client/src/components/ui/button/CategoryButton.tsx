import Button from './Button';

import cssToken from '../../../styles/cssToken';
import { IButtonStyle } from '../../../types/type';

const CategoryButton = ({
  children,
  width,
  height,
  onClick,
  categoryname,
  selectedid,
}: IButtonStyle) => {
  const isActive = !!(selectedid && selectedid === categoryname);

  return (
    <Button
      onClick={() => (onClick ? onClick(categoryname) : '')}
      styles={{
        width,
        height,
        color: isActive ? cssToken.COLOR['point-900'] : cssToken.COLOR.black,
        backgroundColor: isActive
          ? cssToken.COLOR['point-100']
          : cssToken.COLOR.white,
        border: isActive
          ? `${cssToken.BORDER['weight-1']} solid ${cssToken.COLOR['point-900']}`
          : `${cssToken.BORDER['weight-1']} solid ${cssToken.COLOR['gray-300']}`,
        borderRadius: cssToken.BORDER['rounded-none'],
        categoryname,
      }}
    >
      {children}
    </Button>
  );
};

export default CategoryButton;
