import styled from '@emotion/styled';

export const ErrorPageSecion = styled.section`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 375px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-left: 48px;
  padding-right: 48px;
  @media (min-width: 768px) {
    width: 768px;
    padding-left: 132px;
    padding-right: 132px;
  }
`;

export const ErrorImage = styled.div`
  width: 252px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: #3e85f3;
  text-shadow:
    0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);
  font-family: Inter;
  font-size: 100px;
  font-weight: 700;
  line-height: 150px; /* 150% */
  @media (min-width: 768px) {
    width: 503px;
    font-size: 200px;
    line-height: 250px; /* 125% */
    margin-bottom: 40px;
  }
`;

export const ErrorText = styled.p`
  display: inline-block;
  margin-bottom: 24px;
  color: rgba(17, 17, 17, 0.7);

  text-align: center;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 128.571% */
  @media (min-width: 768px) {
    width: 387px;
    margin-bottom: 32px;
  }
`;

export const ErrorPageBtn = styled.button`
  padding: 14px 32px;

  border-radius: 16px;
  border: none;
  background: #3e85f3;
  box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);

  color: #fff;
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px; /* 128.571% */
  letter-spacing: -0.28px;

  transition:
    background 0.3s,
    color 0.3s;

  &:hover {
    background: #21222c;
    color: #3e85f3;
  }
  &:focus {
    background: #21222c;
    color: #3e85f3;
  }
  @media (min-width: 768px) {
    padding: 16px 48px;
  }
`;

export const ErrorImageItem = styled.img`
  display: inline-block;
  position: absolute;
  left: 42px;
  @media (min-width: 768px) {
    height: 435px;
    left: 70px;
  }
`;
