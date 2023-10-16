import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  background-color: #f7f6f9;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 64px;

  @media (min-width: 768px) {
    padding-top: 64px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 38px;
  }

  @media (min-width: 1440px) {
    padding-top: 33px;
    padding-bottom: 32px;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  padding-left: 18px;
  padding-right: 18px;
  padding-bottom: 40px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  //   gap: 40px;
  //   margin-top: 147px;
  background-color: #fff;
  border-radius: 16px;

  @media (min-width: 375px) {
  }
  @media (min-width: 768px) {
    padding-top: 40px;
    padding-left: 175px;
    padding-right: 175px;
  }
  @media (min-width: 1440px) {
    padding-top: 60px;
    padding-bottom: 60px;
    padding-left: 165px;
    padding-right: 165px;
    flex-shrink: 0;
  }
`;

export const AvatarContainer = styled.div`
  align-items: center;
  justify-content: center;
  margin-bottom: 14px;
`;

export const Avatar = styled.img`
  width: 72px;
  height: 72px;
  margin-top: -36px;
  border-radius: 50%;

  @media (min-width: 768px) {
    width: 124px;
    height: 124px;
    margin-top: unset;
  }
`;

export const WithoutAvatar = styled.div`
  width: 72px;
  height: 72px;
  margin-top: -36px;
  border-radius: 50%;
  border: 2px solid #3e85f3;
  background-color: #f8f8f8;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    margin-top: unset;
    width: 124px;
    height: 124px;
  }
`;

export const IconUser = styled.svg`
  width: 48px;
  height: 48px;
  fill: #3e85f3;
  fill-opacity: 0.18;
`;

export const IconPlus = styled.svg`
  width: 18px;
  height: 18px;
  fill: #fff;
`;

export const AvatarButton = styled.button`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: #3e85f3;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -15px;
  margin-left: 51px;

  @media (min-width: 768px) {
    width: 24px;
    height: 24px;
    margin-top: -20px;
    margin-left: 80px;
  }
`;

export const UserName = styled.h2`
  color: #343434;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.29;
  margin-bottom: 4px;

  @media (min-width: 768px) {
    margin-bottom: 8px;
  }
`;

export const UserText = styled.h2`
  color: #343434;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.17;
  margin-bottom: 40px;

  @media (min-width: 1440px) {
    margin-bottom: 44px;
  }
`;

export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1440px) {
    flex-direction: unset;
    gap: 50px;
  }
`;

export const UserInfoColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  color: #111;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.17;
  margin-bottom: 8px;

  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 1.29;
  }
`;

export const Input = styled.input`
  border-radius: 8px;
  border: 1px solid rgba(17, 17, 17, 0.1);
  background: #fff;
  width: 100%;
  height: 42px;
  padding: 12px 14px 12px 14px;
  color: #111;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.29;
  margin-bottom: 18px;

  @media (min-width: 768px) {
    height: 46px;
    padding: 14px 18px 14px 18px;
    font-size: 16px;
    line-height: 1.13;
    margin-bottom: 24px;
  }

  &::placeholder {
    color: rgba(17, 17, 17, 0.15);
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 1.13;
  }
  &:hover {
    border: 1px solid #111;
  }
  &:focus {
    border: 1px solid #111;
  }
`;

export const ButtonSaveChanges = styled.button`
  width: 195px;
  height: 46px;
  padding: 10px 20px 10px 20px;
  border-radius: 16px;
  background-color: #3e85f3;
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.29;
  box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
  border: none;
  margin-top: 22px;

  @media (min-width: 768px) {
    width: 100%;
    height: 48px;
    margin-top: 16px;
  }

  @media (min-width: 1440px) {
    width: 262px;
    margin-top: 64px;
  }

  &:hover {
    background-color: #2b78ef;
  }
`;

export const Form = styled.form`
  //   display: flex;
  //   margin: 0;
  //   padding: 30px 18px;
  //   flex-direction: column;
  //   justify-content: center;
  //   align-items: flex-start;
  //   gap: 32px;

  //   border-radius: 8px;
  //   background: #fff;

  //   font-family: Inter;
  //   font-style: normal;
  //   @media (min-width: 375px) {
  //     width: 335px;
  //     padding: 40px 24px;
  //   }
  //   @media (min-width: 768px) {
  //     width: 480px;
  //     padding: 40px;
  //   }
`;
