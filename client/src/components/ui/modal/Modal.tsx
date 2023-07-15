import { styled } from 'styled-components';
import ReactDOM from 'react-dom';
import React from 'react';

import { Props } from '../../../types/type';
import CloseButton from '../button/CloseButton';
import cssToken from '../../../styles/cssToken';

interface IModalContainer {
  width?: string;
  height?: string;
  borderradius?: string;
  gap?: string;
  position?: string;
}

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  z-index: 1000;

  @media screen and (max-width: 768px) {
    align-items: end;
  }
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000000;
  opacity: 0.3;
  z-index: 1001;
`;

const ModalContainer = styled.section<IModalContainer>`
  position: relative;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.borderradius};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${(props) => props.gap};
  background-color: #ffffff;
  z-index: 1002;

  @media screen and (max-width: 768px) {
    height: 15.5625rem;
    border-top-left-radius: ${cssToken.BORDER['rounded-md']};
    border-top-right-radius: ${cssToken.BORDER['rounded-md']};
    justify-content: space-around;
    font-weight: ${cssToken.FONT_WEIGHT.medium};

    > div {
      padding-top: ${cssToken.SPACING['gap-50']};
      padding-left: ${cssToken.SPACING['gap-20']};
      padding-right: ${cssToken.SPACING['gap-20']};
      align-items: center;
    }

    p {
      display: flex;
      justify-content: center;
      font-size: ${cssToken.TEXT_SIZE['text-32']};
      font-weight: ${cssToken.FONT_WEIGHT.medium};
    }

    button {
      height: 3rem;
    }

    .gray {
      width: 10rem;
    }

    .skyblue {
      width: 10rem;
    }
  }

  @media screen and (max-width: 500px) {
    p {
      font-size: ${cssToken.TEXT_SIZE['text-24']};
    }

    button {
      height: 2.1875rem;
    }

    .gray {
      padding-left: 1.25rem;
      padding-right: 1.25rem;
      width: 8.5rem;
    }

    .skyblue {
      padding-left: 1.25rem;
      padding-right: 1.25rem;
      width: 8.5rem;
    }
  }
`;

const CloseButtonDiv = styled.div`
  width: fit-content;
  height: fit-content;
  position: absolute;
  padding: 8px;
  top: 0;
  right: 0;
`;

const Modal = ({
  children,
  displayclosebtn,
  styles,
  backdropCallback,
  handleCloseBtn,
}: {
  children?: Props['children'];
  displayclosebtn?: boolean;
  styles?: IModalContainer;
  backdropCallback?: (e: React.MouseEvent<HTMLDivElement>) => void;
  handleCloseBtn?: () => void;
}) => {
  return ReactDOM.createPortal(
    <ModalWrapper>
      <Backdrop onClick={backdropCallback} />
      <ModalContainer {...styles}>
        {children}
        {displayclosebtn && (
          <CloseButtonDiv>
            <CloseButton onClick={handleCloseBtn} />
          </CloseButtonDiv>
        )}
      </ModalContainer>
    </ModalWrapper>,
    document.getElementById('overlay-root')!
  );
};

export default Modal;
