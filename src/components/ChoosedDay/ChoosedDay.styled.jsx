import styled from 'styled-components';
//! (375, 768, 1440)
//! на ширині екрану до 375 блоки розмітки повинні тягнутись

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 0px 20px 20px 20px;
  width: 100%;
  //   overflow: visible;

  @media (min-width: 375px) {
  }
  @media (min-width: 768px) {
    padding: 0 32px 18px 32px;
  }
  @media (min-width: 1440px) {
    // padding-top: 116px;
    padding: 0 32px 50px 32px;
  }
`;

export { Wrap };

// import styled from 'styled-components';

// const Wrap = styled.div`
//   //   overflow: scroll;
//   min-height: 100vh;
//   width: 100%;
// `;

// export { Wrap };
