import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: var(--secondary-background-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 24px;
  padding-bottom: 64px;

  // width: 100%;
  // text-align: center;
  transition: var(--transition-changetheme-background-color);

  @media screen and (min-width: 768px) {
    padding-top: 25px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 40px;
    padding-bottom: 33px;
  }
`;
export const Info = styled.div`
  display: flex;
  // align-items: center;
  margin-left: auto;
  padding-right: 20px;
  @media screen and (min-width: 768px) {
    padding-right: 32px;
  }
`;
export const SectionTitle = styled.h1`
  display: none;

  transition: var(--transition-changetheme-color);
  @media screen and (min-width: 1440px) {
    margin-left: 300px;
    align-items: center;
    display: block;
    color: var(--secondary-text-color);
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
  position: absolute;
  margin: 0;
  padding-left: 20px;
  border: none;
  background-color: transparent;
  @media screen and (min-width: 768px) {
    padding-left: 32px;
  }

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

export const AddFeedbackBtn = styled.button`
  padding: 8px 20px;
  font-family: Inter;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.33;
  text-align: center;
  text-transform: none;
  color: #fff;
  background-color: #3e85f3;
  border: none;
  border-radius: 10px;
  margin-right: 18px;
  cursor: pointer;
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #2b78ef;
    // transform: translateY(-2px);
    // box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.1);
  }

  @media screen and (min-width: 768px) {
    padding: 12px 32px;
    font-size: 14px;
    border-radius: 12px;
    margin-right: 24px;
  }
`;
