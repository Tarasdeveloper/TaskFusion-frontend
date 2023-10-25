// import { useState } from 'react';
import {
  TaskDropDownContainer,
  ChangeCategoryWrapper,
  MoveBtn,
  MoveToInProgress,
  MoveToDone,
  PopoverStyled,
} from './TaskDropDown.styled';

const TaskDropDown = ({ isPopoverOpen, closePopover }) => {
  const handleBackdropClick = (e) => {
    if (isPopoverOpen && e.target.classList.contains('popover')) {
      closePopover();
    }
  };

  const handleKeyDown = (e) => {
    if (isPopoverOpen && e.key === 'Escape') {
      closePopover();
    }
  };

  return (
    <TaskDropDownContainer
      className={`popover ${isPopoverOpen ? 'open' : ''}`}
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <PopoverStyled
        open={isPopoverOpen} // Используйте переданное значение isPopoverOpen
        // anchorEl={anchorEl} // Определите и передайте anchorEl, если это необходимо
        onClose={closePopover} // Используйте переданную функцию для закрытия
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <ChangeCategoryWrapper>
          <MoveToInProgress>
            <button type="button">
              In progress <MoveBtn />
            </button>
          </MoveToInProgress>
          <MoveToDone>
            <button type="button">
              To do <MoveBtn />
            </button>
          </MoveToDone>
        </ChangeCategoryWrapper>
      </PopoverStyled>
    </TaskDropDownContainer>
  );
};

export default TaskDropDown;
