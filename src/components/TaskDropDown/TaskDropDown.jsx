import { useDispatch, useSelector } from 'react-redux';
import {
  TaskDropDownContainer,
  ChangeCategoryWrapper,
  MoveBtn,
  MoveToInProgress,
  PopoverStyled,
} from './TaskDropDown.styled';
import { selectTasks } from '../../redux/tasks/selectors';
import { editTaskThunk } from '../../redux/tasks/operations';

const TaskDropDown = ({ isPopoverOpen, closePopover, anchorEl, setOnEdit }) => {
  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks);
  const { category, _id } = tasks.find((task) => {
    return task._id === anchorEl.getAttribute('_id');
  });

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
        open={isPopoverOpen}
        anchorEl={anchorEl}
        onClose={closePopover}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <ChangeCategoryWrapper>
          {category !== 'to-do' && (
            <MoveToInProgress>
              <button
                type="button"
                onClick={async () => {
                  await dispatch(
                    editTaskThunk({ _id, values: { category: 'to-do' } }),
                  );
                  closePopover();
                  setOnEdit(true);
                }}
              >
                To do <MoveBtn />
              </button>
            </MoveToInProgress>
          )}
          {category !== 'in-progress' && (
            <MoveToInProgress>
              <button
                type="button"
                onClick={async () => {
                  await dispatch(
                    editTaskThunk({ _id, values: { category: 'in-progress' } }),
                  );
                  closePopover();
                  setOnEdit(true);
                }}
              >
                In progress <MoveBtn />
              </button>
            </MoveToInProgress>
          )}
          {category !== 'done' && (
            <MoveToInProgress>
              <button
                type="button"
                onClick={async () => {
                  await dispatch(
                    editTaskThunk({ _id, values: { category: 'done' } }),
                  );
                  closePopover();
                  setOnEdit(true);
                }}
              >
                Done <MoveBtn />
              </button>
            </MoveToInProgress>
          )}
        </ChangeCategoryWrapper>
      </PopoverStyled>
    </TaskDropDownContainer>
  );
};

export default TaskDropDown;
