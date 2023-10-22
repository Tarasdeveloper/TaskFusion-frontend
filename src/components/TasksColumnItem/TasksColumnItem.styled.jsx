import styled from 'styled-components';
//! (375, 768, 1440)

const Wrapper = styled.div`
  padding-top: 18px;
  padding-left: 18px;
  padding-right: 18px;
  padding-bottom: 20px;
  @media (min-width: '375') {
  }
`;

const Title = styled.p`
  color: #111;
  font-family: 'Inter';
  font-size: 18px;
  font-weight: 700;
  line-height: 20px;
`;

const PlusCircleIcon = styled.svg`
  width: 22px;
  height: 22px;
  fill: rgba(17, 17, 17, 1);
  stroke: rgba(17, 17, 17, 1);
  @media (min-width: '375') {
  }

  @media (min-width: '768') {
  }

  @media (min-width: '1440') {
  }
`;

export { Wrapper, Title, PlusCircleIcon };
