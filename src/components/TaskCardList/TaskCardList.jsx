import { useDispatch, useSelector } from 'react-redux'
import * as ReactDOM from 'react-dom';
import { useState } from 'react';
import {
  TaskListContainer,
  TaskContainer,
  TaskText,
  UserFoto,
  StatusContainer,
  UserContainer,
  StatusText,
  SubContainer,
  IconContainer,
  SvgButton,
  SvgIcon,
  MainContainer,
  TaskItem,
} from './TaskCardList.styled';
import Icon from '../../assets/sprite.svg';
import useAuth from '../../hooks/useAuth';
import { deleteTaskOperation } from '../../redux/calendar/calendar.operations';
import { TaskModal } from '../TaskModal/TaskModal';
import defUser from '../../assets/img/calendar/defuser.jpg';

const TaskCardList = props => {
  const [isOpen, setIsOpen] = useState(false);
  const [taskStatus, setTaskStatus] = useState('');
  const load = useSelector(state => state.calendar.isLoading);
  const { user } = useAuth();

  // console.log(taskStatus);
  const dispatch = useDispatch();
  const colorStatus = status => {
    switch (status) {
      case 'low':
        return ' #72C2F8;';

      case 'medium':
        return ' #F3B249;';

      case 'high':
        return ' #EA3D65;';

      default:
        break;
    }
  };

  const onClose = () => {
    setIsOpen(false);
  };
  const onOpen = e => {
    setIsOpen(true);
    setTaskStatus(e.currentTarget.name);
  };

  /*const defUser = require('../../assets/img/calendar/defuser.jpg')*/


  return (
    <MainContainer>
      {!load && (
        <TaskListContainer>
          <ul>
            {props.task.map(({ _id, title, priority }) => (
              
              <TaskItem key={_id}>
                <TaskContainer>
                  <TaskText>{title}</TaskText>
                  <SubContainer>
                    <UserContainer>
                      {user.avatarUrl ? (
                        <UserFoto src={user.avatarUrl} alt="userFoto" />
                      ) : (
                        <UserFoto src={defUser} alt="userFoto" />
                      )}
                      <StatusContainer $status={colorStatus(priority)}>
                        <StatusText>{priority}</StatusText>
                      </StatusContainer>
                    </UserContainer>
                    <IconContainer>
                      <SvgButton>
                        <SvgIcon>
                          <use href={Icon + '#arrow'} />
                        </SvgIcon>
                      </SvgButton>

                      <SvgButton name={_id} onClick={onOpen}>
                        <SvgIcon>
                          <use href={Icon + '#pencil'} />
                        </SvgIcon>
                      </SvgButton>

                      <SvgButton
                        onClick={() => dispatch(deleteTaskOperation(_id))}
                      >
                        <SvgIcon>
                          <use href={Icon + '#trash'} />
                        </SvgIcon>
                      </SvgButton>
                    </IconContainer>
                  </SubContainer>

                  {isOpen &&
                    ReactDOM.createPortal(
                      <TaskModal
                        onClose={onClose}
                        status={taskStatus}
                      />,
                      document.querySelector('#modal-root')
                    )}
                </TaskContainer>
              </TaskItem>
            ))}
          </ul>
        </TaskListContainer>
      )}
    </MainContainer>
  );
};

export default TaskCardList;
