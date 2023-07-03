import styled, { css } from 'styled-components';

import cssToken from '../../../styles/cssToken';
import TagButton from '../button/TagButton';

const ContensCardContainer = styled.section`
  display: flex;
  gap: ${cssToken.SPACING['gap-24']};
  flex-direction: column;
  justify-content: space-between;
  border: 0.0625rem solid ${cssToken.COLOR['gray-500']};
  border-radius: ${cssToken.BORDER['rounded-md']};
  padding: 1.25rem;
  flex-grow: 0;
  width: 25.2813rem;
`;

const UserName = styled.span`
  font-size: ${cssToken.TEXT_SIZE['text-16']};
  font-weight: ${cssToken.FONT_WEIGHT.medium};
`;

const ContensTop = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ContensHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${cssToken.SPACING['gap-10']};
`;

const TextLimit = css`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`;

const ContensTitle = styled.h3`
  line-height: 120%;
  font-size: ${cssToken.TEXT_SIZE['text-24']};
  height: 3.4375rem;
  flex: 1;
  ${TextLimit};
`;

const ContensText = styled.p`
  line-height: 120%;
  color: ${cssToken.COLOR['gray-500']};
  font-size: ${cssToken.TEXT_SIZE['text-16']};
  font-weight: ${cssToken.FONT_WEIGHT.light};
  height: 2.1875rem;
  ${TextLimit};
`;

const Tags = styled.div`
  display: flex;
  gap: ${cssToken.SPACING['gap-10']};
`;

const Thumbnail = styled.div`
  position: relative;
  border-radius: ${cssToken.BORDER['rounded-s']};
  overflow: hidden;
  width: ${cssToken.WIDTH['w-full']};
  height: 0;
  padding-bottom: 50%;
`;

export const Img = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  object-fit: cover;
  width: ${cssToken.WIDTH['w-full']};
  height: ${cssToken.HEIGHT['h-full']};
`;

const ContensBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DataText = styled.span`
  font-size: ${cssToken.TEXT_SIZE['text-14']};
`;

interface ContCard {
  title?: string;
  text?: string;
  heartCount?: string;
  tag?: string[];
}

const ContensCard = ({ title, text, heartCount, tag }: ContCard) => {
  return (
    <ContensCardContainer>
      <ContensTop>
        <UserName>하루하루</UserName>
        <button>더보기 버튼</button>
      </ContensTop>

      <ContensHeader>
        <ContensTitle>{title}</ContensTitle>
        <button>즐찾 위치</button>
      </ContensHeader>

      <ContensText>{text}</ContensText>

      <Tags>
        {tag?.map((tagItem, idx: number) => (
          <TagButton key={idx}>{tagItem}</TagButton>
        ))}
      </Tags>

      <Thumbnail>
        <Img src="https://www.sungsimdangmall.co.kr/data/sungsimdang/goods/sungsimdang/big/202310454292163523295.jpg" />
      </Thumbnail>

      <ContensBottom>
        <div>
          <button>하트버튼</button>
          <DataText>{heartCount}개</DataText>
        </div>
        <DataText>23.06.30</DataText>
      </ContensBottom>
    </ContensCardContainer>
  );
};

export default ContensCard;
