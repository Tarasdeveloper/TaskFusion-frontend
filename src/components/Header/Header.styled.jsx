import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 64px;

  @media screen and (min-width: 768px) {
    margin-bottom: 65px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 32px;
  }
`;
export const Info = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;
export const SectionTitle = styled.h1`
  display: none;
  @media screen and (min-width: 1440px) {
    display: block;
    color: #111;
    font-weight: 700;
    font-size: 32px;
    text-shadow:
      0px 9.4px 57.7px rgba(0, 0, 0, 0.04),
      0px 47px 355px rgba(0, 0, 0, 0.07);
  }
`;
export const Toggler = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  border: none;
  background-color: transparent;

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;
export const GooseMentor = styled.img`
  display: none;

  @media screen and (min-width: 1440px) {
    weight: 64px;
    display: block;
    margin-right: 8px;
  }
`;
export const MotivationTask = styled.p`
  display: none;
  @media screen and (min-width: 1440px) {
    display: block;
    font-family: 'Inter';
    color: #111;
    font-weight: 600;
    font-size: 14px;
    line-height: 1.3;
  }
`;
export const Span = styled.p`
  color: #3e85f3;
`;
