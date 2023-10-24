import styled from '@emotion/styled';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  position: relative;
  background-color: var(--secondary-background-color);
  padding-left: 20px;
  padding-right: 20px;

  transition: var(--transition-changetheme-background-color);

  @media (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 38px;
  }

  @media (min-width: 1440px) {
    padding-bottom: 32px;
  }
`;

export const ProfileContainer = styled.div`
  flex: 1;
  padding-left: 18px;
  padding-right: 18px;
  padding-bottom: 40px;
  background-color: var(--tetriary-background-color);
  border-radius: 16px;
  transition: var(--transition-changetheme-background-color);

  @media (min-width: 768px) {
    padding: 40px 0;
  }
  @media (min-width: 1440px) {
    padding-top: 60px;
    padding-bottom: 60px;
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
  border: 2px solid var(--userprofile-photo-border-color);
  background-color: var(--userprofile-no-photo-color);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: var(--transition-changetheme-background-color);
  @media (min-width: 768px) {
    margin-top: unset;
    width: 124px;
    height: 124px;
  }
`;

export const IconUser = styled.svg`
  width: 48px;
  height: 48px;
  fill: var(--btn-background-color);
  fill-opacity: 0.18;
`;

export const IconPlus = styled.svg`
  width: 18px;
  height: 18px;
  fill: var(--btn-text-color);
`;

export const AvatarButton = styled.button`
  position: absolute;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: var(--btn-background-color);
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -15px;
  margin-left: 51px;
  color: var(--btn-text-color);
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
  color: var(--secondary-text-color);
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.29;
  margin-bottom: 4px;
  transition: var(--transition-changetheme-color);

  @media (min-width: 768px) {
    margin-bottom: 8px;
  }
`;

export const UserText = styled.h2`
  color: var(--userprofile-text-user-color);
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.17;
  margin-bottom: 40px;
  transition: var(--transition-changetheme-color);

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
  color: var(--userprofile-text-input-label-color);
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.17;
  margin-bottom: 8px;
  transition: var(--transition-changetheme-color);

  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 1.29;
  }
`;

export const Input = styled.input`
  border-radius: 8px;
  border: 1px solid var(--userprofile-input-border-color);
  background-color: var(--userprofile-input-background-color);
  width: 100%;
  height: 42px;
  padding: 12px 14px 12px 14px;
  color: var(--primary-text-color);
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.29;
  margin-bottom: 18px;
  transition: var(--transition-changetheme-background-color),
    var(--transition-changetheme-color),
    var(--transition-changetheme-border-color);

  @media (min-width: 768px) {
    height: 46px;
    padding: 14px 18px 14px 18px;
    font-size: 16px;
    line-height: 1.13;
    margin-bottom: 24px;
  }

  &::placeholder {
    color: var(--userprofile-input-placeholder-color);
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 1.13;
    transition: var(--transition-changetheme-color);
  }
  &:hover {
    border: 1px solid var(--userprofile-text-input-label-color);
  }
  &:focus {
    border: 1px solid var(--userprofile-text-input-label-color);
  }
`;

export const InputDatePicker = styled(DatePicker)`
  border-radius: 8px;
  border: 1px solid var(--userprofile-input-border-color);
  background-color: var(--userprofile-input-background-color);
  width: 100%;
  height: 42px;
  padding: 12px 14px 12px 14px;
  color: var(--primary-text-color);
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.29;
  margin-bottom: 18px;

  transition: var(--transition-changetheme-background-color),
    var(--transition-changetheme-color),
    var(--transition-changetheme-border-color);

  @media (min-width: 768px) {
    height: 46px;
    padding: 14px 18px 14px 18px;
    font-size: 16px;
    line-height: 1.13;
    margin-bottom: 24px;
  }

  &::placeholder {
    color: var(--userprofile-input-placeholder-color);
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 1.13;
    transition: var(--transition-changetheme-color);
  }
  &:hover {
    border: 1px solid var(--userprofile-text-input-label-color);
  }
  &:focus {
    border: 1px solid var(--userprofile-text-input-label-color);
  }
`;

export const ButtonSaveChanges = styled.button`
  max-width: 195px;
  height: 46px;
  padding: 10px 20px 10px 20px;
  border-radius: 16px;
  background-color: var(--btn-background-color);
  color: var(--btn-text-color);
  text-align: center;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.29;
  box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
  border: none;
  margin-top: 22px;

  &:hover {
    background-color: var(--btn-hover-color);
  }

  &:focus {
    background-color: var(--btn-hover-color);
  }

  &:disabled {
    background-color: var(--secondary-background-color);
    color: var(--error-text-color);
    border: 1px solid var(--calendar-month-border-color);
    cursor: not-allowed;
  }

  @media (min-width: 768px) {
    width: 262px;
    height: 48px;
    margin-top: 16px;
  }

  @media (min-width: 1440px) {
    margin-top: 64px;
  }
`;

export const ErrorInputMessage = styled.p`
  color: #da1414;
  font-family: Inter;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.17;
  margin-top: -16px;
`;
