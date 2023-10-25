import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const SidebarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  display: block;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  background-color: var(--primary-background-color);
  width: 225px;
  min-height: 100%;
  padding: 24px 20px;
  transition: var(--transition-changetheme-background-color);

  @media screen and (min-width: 768px) {
    width: 289px;
    padding: 24px 32px;
  }

  @media screen and (min-width: 1440px) {
    z-index: 0;
    padding: 32px 24px 24px 24px;
  }
`;
export const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 64px;

  @media screen and (min-width: 768px) {
    margin-bottom: 50px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 32px;
  }
`;
export const GooseImage = styled.img`
  transition: var(--transition-changetheme-background-color);
  margin-right: 6px;
  width: 36px;
  height: 35px;

  background-color: var(--primary-background-color);
  @media screen and (min-width: 768px) {
    width: 60px;
    height: 58px;
  }
  @media screen and (min-width: 1440px) {
    width: 71px;
    height: 68px;
  }
`;
export const LogoTitle = styled.h2`
  display: flex;
  font-family: Inter;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.37;
  color: var(--navigation-text-gooseTrack-color);

  transition: var(--transition-changetheme-color);

  @media screen and (min-width: 768px) {
    line-height: 1.5;
  }
  @media screen and (min-width: 1440px) {
    font-size: 24px;
    line-height: 1;
  }
`;
export const Span = styled.p`
  font-style: italic;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.37;
  @media screen and (min-width: 768px) {
    line-height: 1.5;
  }
  @media screen and (min-width: 1440px) {
    font-size: 24px;
    line-height: 1;
  }
`;
export const CloseIcon = styled.svg`
  justify-content: center;
  text-align: center;
  align-items: center;
  border: none;
  cursor: pointer;
  height: 24px;
  width: 24px;
  pading-right: 20px;
  margin-left: 25px;
  @media screen and (min-width: 768px) {
    height: 34px;
    width: 34px;
  }
  @media screen and (min-width: 1440px) {
    display: none;
  }
`;
export const SidebarSubTitle = styled.h3`
  color: var(--navigation-text-userPanel-color);
  font-weight: 600;
  line-height: 1.2;
  font-size: 12px;
  margin-bottom: 24px;

  transition: var(--transition-changetheme-color);

  @media screen and (min-width: 768px) {
    font-size: 14px;
    margin-bottom: 32px;
  }
`;