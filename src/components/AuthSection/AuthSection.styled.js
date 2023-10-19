import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #3e85f3;
`;

export const MainTitle = styled.h1`
  font-size: clamp(44px, 10vw, 120px);
  line-height: 1.25;
  text-shadow:
    0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);
  color: #fff;
  font-style: normal;
`;

export const Ospan = styled.span`
  /* font-size: 120px; */
  font-size: clamp(44px, 10vw, 120px);
  line-height: 1.25;
  color: #fff;
  font-style: italic;
`;

export const LinkWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const SignLink = styled(NavLink)`
  color: #fff;
  text-shadow:
    0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.28;
  text-decoration-line: underline;
`;

export const LogLink = styled(NavLink)`
  color: #3e85f3;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.28;
  letter-spacing: -0.28px;
  padding: 14px 22px;
  border-radius: 16px;
  background-color: #fff;
  box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
  display: flex;
  gap: 6px;
`;
