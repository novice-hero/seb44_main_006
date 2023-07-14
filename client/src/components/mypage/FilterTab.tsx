import { styled } from 'styled-components';

import cssToken from '../../styles/cssToken';
import Text from '../ui/text/Text';

const FilterDiv = styled.div<{ selected: boolean }>`
  padding-bottom: 0.5rem;
  border-bottom: 0.375rem solid
    ${(props) => (props.selected ? cssToken.COLOR['point-500'] : 'transparent')};
  cursor: pointer;
`;
const FilterTab = ({
  selectTab,
  tab,
  content,
  onClick,
}: {
  selectTab: 'First' | 'Second';
  tab: 'First' | 'Second';
  content: string;
  onClick: (tab: 'First' | 'Second') => void;
}) => {
  return (
    <FilterDiv
      onClick={() => {
        onClick(tab);
      }}
      selected={selectTab === tab}
    >
      <Text
        styles={{
          size: cssToken.TEXT_SIZE['text-24'],
          color: selectTab === tab ? 'black' : '#DCDCDC',
        }}
      >
        {content}
      </Text>
    </FilterDiv>
  );
};

export default FilterTab;
