import styled from 'styled-components';

export const Wrapper = styled.div`
  // overflow: hidden;
`;
export const WrapperForFixSideBar = styled.div`
  // overflow: hidden;
`;
export const MainWrapper = styled.div`
  @media screen and (min-width: 1440px) {
    margin-left: 289px;
    padding: 0 32px;
    // overflow: hidden;
  }
`;

export const Main = styled.main`
  @media screen and (min-width: 1440px) {
    height: 80vh;
    overflow-y: auto;
  }
`;
