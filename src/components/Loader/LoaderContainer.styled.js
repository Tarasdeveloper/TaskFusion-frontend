import styled from 'styled-components';

export const LoaderContainer = styled.div`
  height: 100vh;
  width: 100vw;

  position: fixed;
  top: 0;
  left: 0;

  background: radial-gradient(
    circle,
    rgba(251, 250, 249, 1) 1%,
    rgba(62, 133, 243, 0.4767156862745098) 100%
  );

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;
