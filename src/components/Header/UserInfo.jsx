import { useSelector } from 'react-redux';
import { useState } from 'react';
import { selectUser } from '../../redux/auth/selectors';
import { Avatar, Wrapper, UserName, UserIcon } from './UserInfo.styled';
import sprite from '../../assets/sprite.svg';

const UserInfo = () => {
  const { name, avatar } = useSelector(selectUser);
  const userName = name?.trim().split('');
  // const [userPhotoPreview, setUserPhotoPreview] = useState(false);
  // const handleImageError = () => {
  //   setUserPhotoPreview(true);
  // };
  return (
    <Wrapper>
      <UserName>{userName}</UserName>
      {avatar ? (
        <Avatar>
          <img src={avatar} alt="Avatar" />
        </Avatar>
      ) : (
        <UserIcon>
          <use href={`${sprite}#icon-user`}></use>
        </UserIcon>
      )}
    </Wrapper>
  );
};

export default UserInfo;
