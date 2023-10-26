import styled from 'styled-components';

import { Field, ErrorMessage as FormikErrorMessage } from 'formik';

export const Wrap = styled.div`
  position: relative;
  text-align: left;
  padding: 28px 20px;
  border-radius: 8px;
  width: 335px;
  background-color: var(--modal-background-color);
  box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.1);

  transition: var(--transition-changetheme-background-color);
  @media (min-width: 768px) {
    width: 468px;
    padding: 32px;
  }
`;

export const RatingWrap = styled.div`
  width: 128px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-bottom: 24px;
  }
`;

export const Label = styled.label`
  color: var(--modal-primary-text-color);
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  font-size: 12px;
  line-height: calc((14 / 12) * 100%);
`;

export const WrapForReview = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const WrapForEdit = styled.div`
  display: flex;
  gap: 8px;
`;

export const EditBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => {
    return props.$isActive
      ? '#3E85F3'
      : 'var(--modal-feedback-edit-btn-inactive-color)';
  }};
  border: none;
  width: 30px;
  height: 30px;
  padding: 7px;
  border-radius: 50%;
  stroke: ${(props) => {
    return props.$isActive ? '#FFFFFF' : '#3E85F3';
  }};
  cursor: pointer;
  transition:
    stroke 300ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    stroke: #ffffff;
    background-color: #3e85f3;
  }
`;

export const DeleteBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 30px;
  height: 30px;
  padding: 7px;
  background-color: #ea3d6533;
  stroke: #ea3d65;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition:
    stroke 300ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    stroke: #ffffff;
    background-color: #ea3d65;
  }
`;

export const WrapForInput = styled.div`
  margin: 0;
`;

export const InputFeedbackForm = styled(Field)`
  resize: none;
  padding: 12px 14px;
  width: 295px;
  box-sizing: border-box;
  height: 127px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: calc((18 / 14) * 100%);
  color: var(--secondary-text-color);

  background-color: var(--modal-input-background-color);
  border: 1px solid;
  border-color: var(--modal-feedback-input-border-color);
  border-radius: 8px;
  outline: none;

  transition: var(--transition-changetheme-color),
    var(--transition-changetheme-background-color);
  /* transition: 300ms cubic-bezier(0.4, 0, 0.2, 1); */

  @media (min-width: 768px) {
    width: 404px;
    padding: 14px 18px;
  }

  @media (min-width: 1440px) {
    margin-bottom: 18px;
  }

  &:hover,
  &:focus {
    border-color: var(--modal-feedback-input-border-color-hover);
  }
  &:disabled {
    cursor: not-allowed;
  }

  ::placeholder {
    opacity: 1;
    color: rgba(52, 52, 52, 1);
    font-weight: 600;
    font-size: 14px;
  }
`;

export const ErrorMessage = styled(FormikErrorMessage)`
  margin-left: 18px;
  max-width: 100%;
  color: #da1414;
  max-width: 240px;
  font-size: 12px;
  font-weight: 500;
  @media (min-width: 768px) {
    max-width: 330px;
  }
`;

export const FormBtnWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 14px;
  @media (min-width: 768px) {
    margin-top: 18px;
  }
`;

export const FormBtn = styled.button`
  color: #111;
  background-color: #efefef;
  text-transform: none;
  width: 262px;
  height: 48px;
  font-weight: 600;
  font-size: 14px;
  border: none;
  border-radius: 16px;
  cursor: pointer;
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: #2b78ef;
  }

  &:disabled {
    cursor: not-allowed;
  }

  &:hover,
  &:focus {
    background-color: var(--btn-task-form-background-color-hover);
    color: #fff;
  }
`;

export const FormBtnCancel = styled.button`
  color: #111;
  background-color: #efefef;
  text-transform: none;
  width: 262px;
  height: 48px;
  font-weight: 600;
  font-size: 14px;
  border: none;
  border-radius: 16px;
  cursor: pointer;
  transition: var(--transition-changetheme-color),
    var(--transition-changetheme-background-color);

  &:hover,
  &:focus {
    background-color: var(--btn-task-form-background-color-hover);
    color: #fff;
  }
`;

export const BtnCloseWrap = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;

  width: 24px;
  height: 24px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  stroke: var(--modal-feedback-icon-close-btn-color);

  transition: stroke 300ms cubic-bezier(0.4, 0, 0.2, 1);
  @media (min-width: 768px) {
    top: 18px;
    right: 18px;
  }

  &:hover,
  &:focus {
    stroke: #2b78ef;
  }
`;
