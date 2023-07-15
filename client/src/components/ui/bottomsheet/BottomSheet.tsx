import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import Content from './Content';

import cssToken from '../../../styles/cssToken';

const Wrapper = styled.div<{
  ishide: boolean;
  contentHeight: number;
  param?: string;
}>`
  width: 100%;
  height: 100vh;
  background-color: ${cssToken.COLOR.white};
  overflow: hidden;
  transition: height 0.3s ease-in-out;
  flex: 0 0 25rem;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 999;
    overflow: ${(props) => props.param === 'detail' && 'auto'};
    height: ${(props) => {
      if (props.ishide) {
        return `calc(${cssToken.HEIGHT['bottomsheet-header']} + ${cssToken.HEIGHT['mo-nav-height']})`;
      }
      if (props.param === 'detail') {
        return `${props.contentHeight / 2 + 360}px`;
      }
      return `${props.contentHeight - 48}px`;
    }};
    border-top-left-radius: ${cssToken.BORDER['rounded-md']};
    border-top-right-radius: ${cssToken.BORDER['rounded-md']};
    border: ${cssToken.BORDER['weight-1']} solid ${cssToken.COLOR['gray-500']};
  }
`;

const Header = styled.section<{
  ishide: boolean;
}>`
  display: none;

  @media (max-width: 768px) {
    height: ${(props) => {
      if (props.ishide) {
        return `calc(${cssToken.HEIGHT['bottomsheet-header']} + ${cssToken.HEIGHT['mo-nav-height']})`;
      }
      return cssToken.HEIGHT['bottomsheet-header'];
    }};
    display: flex;
    justify-content: center;
    padding-top: 1rem;
    width: 100%;
    background-color: ${cssToken.COLOR.white};
    cursor: pointer;
  }
`;

const Handle = styled.div`
  width: 2rem;
  height: 4px;
  border-radius: ${cssToken.BORDER['rounded-s']};
  background-color: ${cssToken.COLOR['gray-700']};
`;

interface Prop {
  children: React.ReactNode;
  param?: string;
}

const BottomSheet = ({ children, param }: Prop) => {
  const [isHide, setIsHide] = useState(true);
  const [contentHeight, setContentHeight] = useState(window.innerHeight);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setIsHide(!isHide);
  };

  useEffect(() => {
    const handleResize = () => {
      setContentHeight(window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Wrapper ishide={isHide} contentHeight={contentHeight} param={param}>
      <Header ishide={isHide} onClick={handleClick}>
        <Handle />
      </Header>
      <Content ref={contentRef} wrapperHeight={contentHeight}>
        {children}
      </Content>
    </Wrapper>
  );
};

export default BottomSheet;
