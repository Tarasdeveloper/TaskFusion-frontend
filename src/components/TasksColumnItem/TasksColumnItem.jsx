import { Wrapper, Title, PlusCircleIcon } from './TasksColumnItem.styled';

const TasksColumnItem = ({ title }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <PlusCircleIcon fill="none">
        <use href="../../assets/sprite.svg#icon-plus-circle"></use>
      </PlusCircleIcon>
      {/* <svg width="22" height="22" fill="none">
        <g
        //  clip-path="url(#a)"
        >
          <path
            stroke="#111"
            // stroke-linecap="round"
            // stroke-linejoin="round"
            // stroke-width="2"
            d="M10.9997 7.3333v7.3333M7.333 11h7.3333m5.5 0c0 5.0626-4.104 9.1666-9.1666 9.1666-5.0626 0-9.1667-4.104-9.1667-9.1666 0-5.0626 4.104-9.1667 9.1667-9.1667 5.0626 0 9.1666 4.104 9.1666 9.1667Z"
          />
        </g>
        <defs>
          <clipPath id="a">
            <path fill="#fff" d="M0 0h22v22H0z" />
          </clipPath>
        </defs>
      </svg> */}
    </Wrapper>
  );
};

export default TasksColumnItem;
