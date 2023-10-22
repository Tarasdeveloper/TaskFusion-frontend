import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { Avatar, Wrapper, UserName } from './UserInfo.styled';

const UserInfo = () => {
  const { name, avatar } =
    useSelector(selectUser);
  const userName = name?.trim().split('')[0];

  return (
    <Wrapper>
      <UserName>{userName}</UserName>
      <Avatar>
        <img src={avatar} alt="Avatar" />
      </Avatar>
    </Wrapper>
  );
};

export default UserInfo;
