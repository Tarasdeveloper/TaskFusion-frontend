import {
  Wrapper,
  TitleWrap,
  Title,
  PlusCircleIcon,
  AddTaskBtn,
  BtnContentWrap,
  AddTaskText,
  TasksWrap,
  Task,
  TaskTitle,
  TaskBottomWrap,
  AvatarPriorWrap,
  Avatar,
  Priority,
  IconBtnsWrap,
  IconBtnWrap,
} from './TasksColumnItem.styled';
import { useState } from 'react';
import TaskModal from '../TaskModal/TaskModal';

const TasksColumnItem = ({ title }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [action, setAction] = useState('add');

  const openModal = (e) => {
    const condition = [...e.currentTarget.classList].includes('addTaskBtn');
    condition ? setAction('add') : setAction('edit');
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  const isTasksAdded = true;
  const priority = 'High';

  return (
    <Wrapper $isTasksAdded={isTasksAdded}>
      <TitleWrap $isTasksAdded={isTasksAdded}>
        <Title>{title}</Title>
        <PlusCircleIcon onClick={openModal} className="addTaskBtn">
          <svg
            style={{
              width: 'inherit',
              height: 'inherit',
              fill: 'inherit',
              stroke: 'inherit',
            }}
          >
            <g clipPath="url(#a)">
              <path
                stroke="rgba(17, 17, 17, 1)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10.9997 7.3333v7.3333M7.333 11h7.3333m5.5 0c0 5.0626-4.104 9.1666-9.1666 9.1666-5.0626 0-9.1667-4.104-9.1667-9.1666 0-5.0626 4.104-9.1667 9.1667-9.1667 5.0626 0 9.1666 4.104 9.1666 9.1667Z"
              />
            </g>
            <defs>
              <clipPath id="a">
                <path fill="none" d="M0 0h22v22H0z" />
              </clipPath>
            </defs>
          </svg>
        </PlusCircleIcon>
      </TitleWrap>
      {isTasksAdded && (
        <TasksWrap>
          {
            // ! Here is must be an array of tasks that should return task like in example on every iteration
          }
          <Task>
            <TaskTitle>Task 1: Learning TS ... </TaskTitle>
            <TaskBottomWrap>
              <AvatarPriorWrap>
                <Avatar></Avatar>
                <Priority $priority={priority}>{priority}</Priority>
              </AvatarPriorWrap>
              <IconBtnsWrap>
                <IconBtnWrap>
                  <svg
                    style={{
                      width: 'inherit',
                      height: 'inherit',
                      fill: 'inherit',
                      stroke: 'inherit',
                      display: 'inherit',
                      alignItems: 'inherit',
                      justifyContent: 'inherit',
                    }}
                  >
                    <g clipPath="url(#clip0_124_1579)">
                      <path
                        d="M1.94727 4.08332C2.95588 2.33974 4.84105 1.16666 7.0002 1.16666C10.2219 1.16666 12.8335 3.77833 12.8335 6.99999C12.8335 10.2217 10.2219 12.8333 7.0002 12.8333C4.84105 12.8333 2.95588 11.6602 1.94727 9.91666"
                        stroke="#111111"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7 9.33332L9.33333 6.99999L7 4.66666"
                        stroke="#111111"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M1.16699 7L9.33366 7"
                        stroke="#111111"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_124_1579">
                        <rect width="14" height="14" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </IconBtnWrap>
                <IconBtnWrap onClick={openModal}>
                  <svg
                    style={{
                      width: 'inherit',
                      height: 'inherit',
                      fill: 'inherit',
                      stroke: 'inherit',
                    }}
                  >
                    <g clipPath="url(#clip0_124_1583)">
                      <path
                        d="M1.45801 12.5417L4.69508 11.2966C4.90213 11.217 5.00565 11.1772 5.10251 11.1252C5.18854 11.079 5.27056 11.0257 5.3477 10.9659C5.43455 10.8985 5.51298 10.82 5.66984 10.6632L12.2497 4.08334C12.894 3.43901 12.894 2.39434 12.2497 1.75C11.6054 1.10567 10.5607 1.10567 9.91636 1.75L3.33651 8.32984C3.17964 8.4867 3.10121 8.56513 3.03382 8.65198C2.97396 8.72912 2.92066 8.81114 2.87448 8.89717C2.82249 8.99403 2.78267 9.09755 2.70304 9.3046L1.45801 12.5417ZM1.45801 12.5417L2.65858 9.42023C2.74449 9.19686 2.78744 9.08518 2.86112 9.03402C2.92551 8.98931 3.00518 8.9724 3.08218 8.98711C3.17029 9.00393 3.2549 9.08855 3.42412 9.25777L4.74193 10.5756C4.91115 10.7448 4.99576 10.8294 5.01259 10.9175C5.02729 10.9945 5.01038 11.0742 4.96568 11.1386C4.91452 11.2122 4.80283 11.2552 4.57947 11.3411L1.45801 12.5417Z"
                        stroke="#111111"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_124_1583">
                        <rect width="14" height="14" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </IconBtnWrap>
                <IconBtnWrap>
                  <svg
                    style={{
                      width: 'inherit',
                      height: 'inherit',
                      fill: 'inherit',
                      stroke: 'inherit',
                    }}
                  >
                    <path
                      d="M5.25 1.75H8.75"
                      stroke="#111111"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1.75 3.5H12.25"
                      stroke="#111111"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2.91699 3.5L3.26751 8.75775C3.31065 9.40488 3.33222 9.72844 3.40201 9.99909C3.69263 11.1261 4.60892 11.9834 5.75279 12.1984C6.02748 12.25 6.35176 12.25 7.00033 12.25V12.25C7.64889 12.25 7.97317 12.25 8.24786 12.1984C9.39174 11.9834 10.308 11.1261 10.5986 9.99909C10.6684 9.72844 10.69 9.40488 10.7331 8.75775L11.0837 3.5"
                      stroke="#111111"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </IconBtnWrap>
              </IconBtnsWrap>
            </TaskBottomWrap>
          </Task>
          <Task>
            <TaskTitle>Task 1: Learning TS ... </TaskTitle>
            <TaskBottomWrap>
              <AvatarPriorWrap>
                <Avatar></Avatar>
                <Priority $priority={priority}>{priority}</Priority>
              </AvatarPriorWrap>
              <IconBtnsWrap>
                <IconBtnWrap>
                  <svg
                    style={{
                      width: 'inherit',
                      height: 'inherit',
                      fill: 'inherit',
                      stroke: 'inherit',
                      display: 'inherit',
                      alignItems: 'inherit',
                      justifyContent: 'inherit',
                    }}
                  >
                    <g clipPath="url(#clip0_124_1579)">
                      <path
                        d="M1.94727 4.08332C2.95588 2.33974 4.84105 1.16666 7.0002 1.16666C10.2219 1.16666 12.8335 3.77833 12.8335 6.99999C12.8335 10.2217 10.2219 12.8333 7.0002 12.8333C4.84105 12.8333 2.95588 11.6602 1.94727 9.91666"
                        stroke="#111111"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7 9.33332L9.33333 6.99999L7 4.66666"
                        stroke="#111111"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M1.16699 7L9.33366 7"
                        stroke="#111111"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_124_1579">
                        <rect width="14" height="14" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </IconBtnWrap>
                <IconBtnWrap onClick={openModal}>
                  <svg
                    style={{
                      width: 'inherit',
                      height: 'inherit',
                      fill: 'inherit',
                      stroke: 'inherit',
                    }}
                  >
                    <g clipPath="url(#clip0_124_1583)">
                      <path
                        d="M1.45801 12.5417L4.69508 11.2966C4.90213 11.217 5.00565 11.1772 5.10251 11.1252C5.18854 11.079 5.27056 11.0257 5.3477 10.9659C5.43455 10.8985 5.51298 10.82 5.66984 10.6632L12.2497 4.08334C12.894 3.43901 12.894 2.39434 12.2497 1.75C11.6054 1.10567 10.5607 1.10567 9.91636 1.75L3.33651 8.32984C3.17964 8.4867 3.10121 8.56513 3.03382 8.65198C2.97396 8.72912 2.92066 8.81114 2.87448 8.89717C2.82249 8.99403 2.78267 9.09755 2.70304 9.3046L1.45801 12.5417ZM1.45801 12.5417L2.65858 9.42023C2.74449 9.19686 2.78744 9.08518 2.86112 9.03402C2.92551 8.98931 3.00518 8.9724 3.08218 8.98711C3.17029 9.00393 3.2549 9.08855 3.42412 9.25777L4.74193 10.5756C4.91115 10.7448 4.99576 10.8294 5.01259 10.9175C5.02729 10.9945 5.01038 11.0742 4.96568 11.1386C4.91452 11.2122 4.80283 11.2552 4.57947 11.3411L1.45801 12.5417Z"
                        stroke="#111111"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_124_1583">
                        <rect width="14" height="14" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </IconBtnWrap>
                <IconBtnWrap>
                  <svg
                    style={{
                      width: 'inherit',
                      height: 'inherit',
                      fill: 'inherit',
                      stroke: 'inherit',
                    }}
                  >
                    <path
                      d="M5.25 1.75H8.75"
                      stroke="#111111"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1.75 3.5H12.25"
                      stroke="#111111"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2.91699 3.5L3.26751 8.75775C3.31065 9.40488 3.33222 9.72844 3.40201 9.99909C3.69263 11.1261 4.60892 11.9834 5.75279 12.1984C6.02748 12.25 6.35176 12.25 7.00033 12.25V12.25C7.64889 12.25 7.97317 12.25 8.24786 12.1984C9.39174 11.9834 10.308 11.1261 10.5986 9.99909C10.6684 9.72844 10.69 9.40488 10.7331 8.75775L11.0837 3.5"
                      stroke="#111111"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </IconBtnWrap>
              </IconBtnsWrap>
            </TaskBottomWrap>
          </Task>
        </TasksWrap>
      )}

      <AddTaskBtn
        $isTasksAdded={isTasksAdded}
        onClick={openModal}
        className="addTaskBtn"
      >
        <BtnContentWrap>
          <svg width="24" height="24" fill="none">
            <path
              stroke="#111"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 5v14m-7-7h14"
            />
          </svg>
          <AddTaskText>Add Task</AddTaskText>
        </BtnContentWrap>
      </AddTaskBtn>

      {modalOpen && <TaskModal onClose={closeModal} action={action} />}
    </Wrapper>
  );
};

export default TasksColumnItem;

//! Task example
//  <Task>
//    <TaskTitle>Task 1: Learning TS ... </TaskTitle>
//    <TaskBottomWrap>
//      <AvatarPriorWrap>
//        <Avatar></Avatar>
//        <Priority $priority={priority}>{priority}</Priority>
//      </AvatarPriorWrap>
//      <IconBtnsWrap>
//        <IconBtnWrap>
//          <svg
//            style={{
//              width: 'inherit',
//              height: 'inherit',
//              fill: 'inherit',
//              stroke: 'inherit',
//              display: 'inherit',
//              alignItems: 'inherit',
//              justifyContent: 'inherit',
//            }}
//          >
//            <g clipPath="url(#clip0_124_1579)">
//              <path
//                d="M1.94727 4.08332C2.95588 2.33974 4.84105 1.16666 7.0002 1.16666C10.2219 1.16666 12.8335 3.77833 12.8335 6.99999C12.8335 10.2217 10.2219 12.8333 7.0002 12.8333C4.84105 12.8333 2.95588 11.6602 1.94727 9.91666"
//                stroke="#111111"
//                strokeWidth="1.2"
//                strokeLinecap="round"
//                strokeLinejoin="round"
//              />
//              <path
//                d="M7 9.33332L9.33333 6.99999L7 4.66666"
//                stroke="#111111"
//                strokeWidth="1.2"
//                strokeLinecap="round"
//                strokeLinejoin="round"
//              />
//              <path
//                d="M1.16699 7L9.33366 7"
//                stroke="#111111"
//                strokeWidth="1.2"
//                strokeLinecap="round"
//                strokeLinejoin="round"
//              />
//            </g>
//            <defs>
//              <clipPath id="clip0_124_1579">
//                <rect width="14" height="14" fill="white" />
//              </clipPath>
//            </defs>
//          </svg>
//        </IconBtnWrap>
//        <IconBtnWrap onClick={openModal}>
//          <svg
//            style={{
//              width: 'inherit',
//              height: 'inherit',
//              fill: 'inherit',
//              stroke: 'inherit',
//            }}
//          >
//            <g clipPath="url(#clip0_124_1583)">
//              <path
//                d="M1.45801 12.5417L4.69508 11.2966C4.90213 11.217 5.00565 11.1772 5.10251 11.1252C5.18854 11.079 5.27056 11.0257 5.3477 10.9659C5.43455 10.8985 5.51298 10.82 5.66984 10.6632L12.2497 4.08334C12.894 3.43901 12.894 2.39434 12.2497 1.75C11.6054 1.10567 10.5607 1.10567 9.91636 1.75L3.33651 8.32984C3.17964 8.4867 3.10121 8.56513 3.03382 8.65198C2.97396 8.72912 2.92066 8.81114 2.87448 8.89717C2.82249 8.99403 2.78267 9.09755 2.70304 9.3046L1.45801 12.5417ZM1.45801 12.5417L2.65858 9.42023C2.74449 9.19686 2.78744 9.08518 2.86112 9.03402C2.92551 8.98931 3.00518 8.9724 3.08218 8.98711C3.17029 9.00393 3.2549 9.08855 3.42412 9.25777L4.74193 10.5756C4.91115 10.7448 4.99576 10.8294 5.01259 10.9175C5.02729 10.9945 5.01038 11.0742 4.96568 11.1386C4.91452 11.2122 4.80283 11.2552 4.57947 11.3411L1.45801 12.5417Z"
//                stroke="#111111"
//                strokeWidth="1.2"
//                strokeLinecap="round"
//                strokeLinejoin="round"
//              />
//            </g>
//            <defs>
//              <clipPath id="clip0_124_1583">
//                <rect width="14" height="14" fill="white" />
//              </clipPath>
//            </defs>
//          </svg>
//        </IconBtnWrap>
//        <IconBtnWrap>
//          <svg
//            style={{
//              width: 'inherit',
//              height: 'inherit',
//              fill: 'inherit',
//              stroke: 'inherit',
//            }}
//          >
//            <path
//              d="M5.25 1.75H8.75"
//              stroke="#111111"
//              strokeWidth="1.2"
//              strokeLinecap="round"
//              strokeLinejoin="round"
//            />
//            <path
//              d="M1.75 3.5H12.25"
//              stroke="#111111"
//              strokeWidth="1.2"
//              strokeLinecap="round"
//              strokeLinejoin="round"
//            />
//            <path
//              d="M2.91699 3.5L3.26751 8.75775C3.31065 9.40488 3.33222 9.72844 3.40201 9.99909C3.69263 11.1261 4.60892 11.9834 5.75279 12.1984C6.02748 12.25 6.35176 12.25 7.00033 12.25V12.25C7.64889 12.25 7.97317 12.25 8.24786 12.1984C9.39174 11.9834 10.308 11.1261 10.5986 9.99909C10.6684 9.72844 10.69 9.40488 10.7331 8.75775L11.0837 3.5"
//              stroke="#111111"
//              strokeWidth="1.2"
//              strokeLinecap="round"
//              strokeLinejoin="round"
//            />
//          </svg>
//        </IconBtnWrap>
//      </IconBtnsWrap>
//    </TaskBottomWrap>
//  </Task>;
