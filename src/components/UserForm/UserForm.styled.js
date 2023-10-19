import styled from '@emotion/styled';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  background-color: var(--secondary-background-color);
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
  padding-left: 18px;
  padding-right: 18px;
  padding-bottom: 40px;
  background-color: var(--primary-background-color);
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
  }
`;

export const FormUser = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

export const AvatarContainer = styled.div`
  position: relative;
  align-items: center;
  justify-content: center;
  margin-bottom: 14px;
`;

export const Avatar = styled.img`
  width: 72px;
  height: 72px;
  margin-top: -36px;
  border-radius: 50%;
  object-fit: cover;

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
  border: 2px solid var(--accent-span-text-color);
  background-color: var(--avatar-background-color);
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
  fill: var(--accent-span-text-color);
  fill-opacity: 0.18;
`;

export const IconPlus = styled.svg`
  width: 18px;
  height: 18px;
  fill: var(--primary-background-color);
`;

export const AvatarButton = styled.button`
  position: absolute;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: var(--accent-span-text-color);
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -15px;
  margin-left: 51px;
  color: var(--primary-text-color);
  font-size: 18px;

  @media (min-width: 768px) {
    width: 24px;
    height: 24px;
    margin-top: -20px;
    margin-left: 80px;
  }
`;

export const InputPhoto = styled.input`
  display: none;
`;

export const UserName = styled.h2`
  color: var(--label-text);
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
  color: var(--label-text);
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
  gap: 18px;

  @media (min-width: 768px) {
    gap: 24px;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

export const LabelText = styled.span`
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
  border: var(--border-account-input);
  background: var(--primary-background-color);
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

export const InputDatePicker = styled(DatePicker)`
  border-radius: 8px;
  border: var(--border-account-input);
  background: var(--primary-background-color);
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
  background-color: var(--accent-span-text-color);
  color: var(--btn-text-color);
  text-align: center;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.29;
  box-shadow: var(--shadow-logout-btn);
  border: none;
  margin-top: 22px;

  &:hover {
    background-color: var(--hover-btn-background-color);
  }

  &:focus {
    background-color: var(--hover-btn-background-color);
  }

  &:disabled {
    background-color: var(--secondary-background-color);
    color: var(--feedback-text);
    border: 1px solid var(--border-color);
    cursor: not-allowed;
  }

  @media (min-width: 768px) {
    width: 100%;
    height: 48px;
    margin-top: 16px;
  }

  @media (min-width: 1440px) {
    width: 262px;
    margin-top: 64px;
  }
`;

export const ErrorInputMessage = styled.p`
  color: var(--status-error);
  font-family: Inter;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.17;
  margin-top: -16px;
`;
