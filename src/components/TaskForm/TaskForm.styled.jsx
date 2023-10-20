import styled from 'styled-components';


export const Container = styled.div`
     position: relative;   
    margin: 40px 28px;  
    font-size:12px;
    font-weight: 600;
    line-height: 14px;  
   
`
export const TaskInput = styled.input`
     width: 95%;
    padding: 14px;
    padding-left: 8px;
    margin-top: 8px;
    border: 1px solid #F6F6F6;
    color: ${({ theme }) => theme.textColors.modalText};
    background-color: ${({ theme }) => theme.bgColors.modalInputBg};
    border-radius: 8px;
`
export const Errors = styled.p`
  margin-top: 4px;
  margin-bottom: 2px;
  color: #DA1414;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.17;
  `
 export const None = styled.p`
 margin-top: 4px;
 margin-bottom: 2px;
 color: transparent;
 font-family: 'Inter';
 font-style: normal;
 font-weight: 400;
 font-size: 12px;
 line-height: 1.17;
 `
export const TimeInput = styled.input`
     width: 90px;
     padding: 14px;
    padding-left: 8px;
    margin-top: 8px;
    border: 1px solid #F7F7F7;
    color: ${({ theme }) => theme.textColors.modalText}; 
    background-color: ${({ theme }) => theme.bgColors.modalInputBg};
    border-radius: 8px;
`

export const Lable = styled.label`
    text-align: left;
    color: rgba(52, 52, 52, 0.8);
`

export const RadioName = styled.span`
  padding-left: 20px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.17;
  color: ${({ theme }) => theme.textColors.modalText};
  cursor: pointer;
`

export const Text = styled.p`
  color: rgba(52, 52, 52, 0.8);
margin:0;
   `
export const StartWrapper = styled.div`
    margin-right: 14px;
`

export const RadioGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 21px;
  gap: 16px;
  padding-bottom: 20px;
  @media (max-width: 375px){
    margin-top: 5px;
    padding-bottom: 15px;
  }
  
`

export const RadioButton = styled.input`
  appearance: none;
  position: absolute;
  height: 0;
  width: 0;
  

  &::before {
    content: '';
    position: absolute;
    top: 0px;
    left: -17px;

    border-radius: 50%;
    height: 10px;
    width: 10px;
    border: 1px solid var(--primary-background-color);
    ${({ value }) => {
      switch (value) {
        case 'low':
          return 'background-color: #72c2f8; color: rgba(114, 194, 248, 0.3)';
        case 'medium':
          return 'background-color: #f3b249; color: rgba(243, 178, 73, 0.3)';
        case 'high':
          return 'background-color: #ea3d65; color: rgba(234, 61, 101, 0.3)';
        default:
          return 'background-color: #72c2f8; color: rgba(114, 194, 248, 0.3)';
      }
    }}
  }

  &:checked::before {
    content: '';
    position: absolute;
    height: 12px;
    width: 12px;
    outline: 2px solid;
 
  }
`;

export const CancelBtn = styled.button`
   height: 48px;
   justify-content: center;
    align-items: center;
    margin-left: 14px;
    padding: 16px;
    width: 100%;
    cursor: pointer;
    border: 2px solid white;
    background: #EFEFEF;
    box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.48);
    border-radius: 8px;

    Font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.02em;
    color:black;
    cursor: pointer; 
    transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  :focus {
    box-shadow: 4px 2px 16px rgba(136, 165, 191, 1)};
`

export const Flex = styled.div`
   display: flex;    
    margin-top: 7px; 
`


export const AddBtn = styled.button`
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;    
    padding: 16px;
    width: 100%;
    cursor: pointer;

    border: none;
    background: #3e85f3;
    box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.48);
    border-radius: 8px;

    Font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.02em;
    color: white;
    cursor: pointer;

    transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  :focus {
    box-shadow: 4px 2px 16px rgba(136, 165, 191, 1)};
    
`
export const Plus = styled.span`
  margin-right: 10px;

`
export const Close = styled.span`
    position: absolute;
    top:-22px;
    right:-5px;
    cursor: pointer; 
`
