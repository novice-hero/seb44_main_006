import { styled } from 'styled-components';

import { Props, TextStyleT } from '../../../types/type';
import { TextStyle } from '../../../styles/styles';

const P = styled(TextStyle).attrs({ as: 'p' })`
  display: flex;
  align-items: center;
  word-break: break-word;
  line-height: 1.5rem;
`;

const Text = ({
  children,
  styles,
}: {
  children: Props['children'];
  styles?: TextStyleT;
}) => {
  return <P {...styles}>{children}</P>;
};

export default Text;
