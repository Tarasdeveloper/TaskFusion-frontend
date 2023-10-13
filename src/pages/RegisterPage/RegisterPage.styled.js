import styled from '@emotion/styled';

export const FormContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding-left: 20px;
  padding-right: 20px;
  background: #dcebf7;
`;

export const RegisterPageImage = styled.img`
  display: inline-block;
  position: absolute;
  bottom: 0;
  left: 50px;
  @media (max-width: 1439px) {
    display: none;
  }
`;