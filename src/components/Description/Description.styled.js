import styled from 'styled-components';

export const DescrList = styled.ul`
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

export const DescrItem = styled.li`
  padding: 0 15px;
  margin-top: 64px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const DescrItemMid = styled.li`
  padding: 0 15px;
  margin-top: 64px;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  flex-wrap: wrap;
`;

export const DescrTextWrap = styled.div`
  width: 275px;
`;

export const DescrSpan = styled.span`
  color: var(--blue1, #3e85f3);
  font-family: Inter;
  font-size: clamp(80px, 10vw, 104px);
  font-weight: 700;
  line-height: 1.04;
  letter-spacing: -4px;
  display: block;
  margin-bottom: 14px;
`;

export const DescrTitle = styled.h2`
  color: #171820;
  font-family: Inter;
  font-size: 40px;
  font-weight: 700;
  line-height: 1.1;
  text-transform: uppercase;
  margin-bottom: 24px;
`;

export const DescrName = styled.p`
  color: var(--blue1, #3e85f3);
  font-family: Inter;
  font-size: clamp(32px, 10vw, 40px);
  font-weight: 700;
  line-height: 1.1;
  text-transform: uppercase;
  border-radius: 44px;
  background: var(--blue-2, #dcebf7);
  padding: 6px 18px;
  display: inline-flex;
  margin-bottom: 8px;
`;

export const DescrText = styled.p`
  color: rgba(17, 17, 17, 0.9);
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29; /* 128.571% */
  margin-bottom: 48px;
`;

export const DescrImgWrap = styled.div`
  display: block;
`;

export const DescrImage = styled.img`
  display: block;
`;
