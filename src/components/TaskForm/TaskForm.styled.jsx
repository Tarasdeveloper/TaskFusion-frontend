import styled from 'styled-components';

import { ReactComponent as IconClose } from '../../assets/img/x-close.svg';

import {
  Form as FormikForm,
  Field,
  ErrorMessage as FormikErrorMessage,
} from 'formik';

export const Form = styled(FormikForm)`
  position: relative;
  width: 303px;
  max-height: 420px;
  padding: 48px 18px 40px;
  background-color: var(--modal-background-color);

  border-radius: 8px;
  border: 1px solid var(--calendar-day-addTask-btn-border-color: );
  box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.1);

  @media (min-width: 768px) {
    width: 396px;
    padding: 40px 28px;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;

  color: var(--modal-primary-text-color);
  font-size: 12px;
  font-family: Inter;
  font-weight: 500;
  line-height: 14px;
`;

export const InputTitle = styled(Field)`
  width: 267px;
  height: 42px;
  padding: 12px 14px;
  border-radius: 8px;
  background: var(--modal-input-background-color);
  border: 1px solid var(--modal-feedback-input-border-color);

  color: var(--secondary-text-color);
  font-size: 14px;
  font-family: Inter;
  font-weight: 600;
  line-height: 18px;
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    border: 1px solid var(--modal-feedback-input-border-color-hover);
  }

  @media (min-width: 768px) {
    width: 340px;
    height: 46px;
    padding: 14px 18px;
  }

  &::placeholder {
    opacity: 1;
    color: var(--secondary-text-color);
    font-size: 14px;
    font-family: Inter;
    font-weight: 600;
    line-height: 18px;
  }
`;

export const TimeWrapper = styled.div`
  display: flex;
  gap: 14px;
  margin-top: 16px;

  @media (min-width: 768px) {
    margin-top: 18px;
  }
`;

export const InputTime = styled(Field)`
  width: 126px;
  height: 42px;
  padding: 12px 14px;
  border-radius: 8px;
  background: var(--modal-input-background-color);
  border: 1px solid var(--modal-feedback-input-border-color);
  cursor: pointer;

  color: var(--input-time-color);
  font-size: 14px;
  font-family: Inter;
  font-weight: 600;
  line-height: 18px;
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    border: 1px solid var(--modal-feedback-input-border-color-hover);
  }

  @media (min-width: 768px) {
    width: 163px;
    height: 46px;
    padding: 14px 18px;
  }

  &::-webkit-calendar-picker-indicator {
    display: none;
  }
`;

export const RadioWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const RadioField = styled(Field)`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

export const RadioLabel = styled.label`
  position: relative;
  padding-left: 16px;
  display: flex;
  align-items: center;
  margin-top: 16px;

  color: var(--secondary-text-color);
  font-size: 12px;
  font-family: Inter;
  font-weight: 600;
  line-height: 14px;
  cursor: pointer;

  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 18px;
    margin-top: 28px;
  }
`;

export const RadioSpan = styled.span`
  position: absolute;
  left: 0;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => {
    switch (props.value) {
      case 'low':
        return '#72C2F8';
      case 'medium':
        return '#F3B249';
      case 'high':
        return '#EA3D65';
      default:
        return 'black';
    }
  }};

  ${RadioLabel}:nth-child(1) ${RadioField}:checked + & {
    outline: 1.2px solid #72c2f8;
    outline-offset: 1px;
  }

  ${RadioLabel}:nth-child(2) ${RadioField}:checked + & {
    outline: 1.2px solid #f3b249;
    outline-offset: 1px;
  }

  ${RadioLabel}:nth-child(3) ${RadioField}:checked + & {
    outline: 1.2px solid #ea3d65;
    outline-offset: 1px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 14px;
  margin-top: 32px;
`;

export const ButtonAction = styled.button`
  display: flex;
  width: 135px;
  height: 42px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 12px;
  stroke: #111;

  border-radius: 8px;
  border: none;
  background-color: #efefef;
  cursor: pointer;

  color: #111;
  text-align: center;
  font-size: 14px;
  font-family: Inter;
  font-weight: 600;
  line-height: 18px;

  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: var(--btn-task-form-background-color-hover);
    color: #fff;
    stroke: #fff;
  }

  @media (min-width: 768px) {
    width: 182px;
    height: 48px;
    padding: 15px;
  }
`;

export const ButtonCancel = styled.button`
  width: 118px;
  height: 42px;
  padding: 12px;

  border-radius: 8px;
  border: none;
  background: #efefef;
  cursor: pointer;

  color: #111;
  text-align: center;
  font-size: 14px;
  font-family: Inter;
  font-weight: 600;
  line-height: 18px;

  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: var(--btn-task-form-background-color-hover);
    color: #fff;
  }

  @media (min-width: 768px) {
    width: 182px;
    height: 48px;
    padding: 15px;
  }
`;

export const ButtonCloseWrap = styled.button`
  position: absolute;
  top: 14px;
  right: 18px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const ErrorMessage = styled(FormikErrorMessage)`
  margin-left: 18px;
  max-width: 100%;
  color: #da1414;
  font-size: 12px;
  font-family: Inter;
  line-height: 14px;
`;

export const CloseIcon = styled(IconClose)`
  transition: stroke 300ms cubic-bezier(0.4, 0, 0.2, 1);
  stroke: var(--modal-feedback-icon-close-btn-color);

  &:hover,
  &:focus {
    stroke: #3e85f3;
  }
`;
