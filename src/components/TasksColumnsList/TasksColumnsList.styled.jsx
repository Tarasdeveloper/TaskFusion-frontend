import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  column-gap: 30px;
  justify-content: space-between;
  width: 100%;
  //   padding-left: 20px;
  padding-bottom: 34px;
  // padding-bottom: ${(props) => (props.$isTasksAdded ? '34px' : '311px')}

  overflow-x: auto;

  &::-webkit-scrollbar {
    width: 12px; /* Ширина скролбара для вебкіт-браузерів (Chrome, Safari) */
  }

  &::-webkit-scrollbar-thumb {
    background-color: #e7e5e5; /* Колір пальця скролбара для вебкіт-браузерів */
    border-radius: 12px; /* Закруглені кути пальця скролбара для вебкіт-браузерів */
  }
  &::-webkit-scrollbar-track {
    background-color: #f2f2f2; /* Колір треку скролбара для вебкіт-браузерів */
    border-radius: 12px; /* Закруглені кути треку скролбара для вебкіт-браузерів */
  }

  @media (min-width: 375px) {
  }

  @media (min-width: 768px) {
    padding-left: 0;
    padding-bottom: 15px;
  }

  @media (min-width: 1440px) {
  }
`;

export { Wrap };
