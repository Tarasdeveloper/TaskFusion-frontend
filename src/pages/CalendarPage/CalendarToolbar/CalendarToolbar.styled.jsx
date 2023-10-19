import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  @media (max-width: 767px) {
    flex-direction: column;
    gap: 18px;
  }
  @media (min-width: 768px) {
    align-items: center;
    justify-content: space-between;
  }
`;