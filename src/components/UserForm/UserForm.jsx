import { useEffect, useRef, useState } from 'react';
import {
  Avatar,
  AvatarButton,
  AvatarContainer,
  ButtonSaveChanges,
  Container,
  IconPlus,
  IconUser,
  Input,
  InputPhoto,
  Label,
  ProfileContainer,
  UserInfoColumn,
  UserInfoContainer,
  UserName,
  UserText,
  WithoutAvatar,
} from './UserForm.styled';
import StyledDatepicker from './StyledDatepicker';

export const UserForm = () => {
  const [image, setImage] = useState('');
  // const [newUserName, setNewUserName] = useState('');
  // const [newEmail, setNewEmail] = useState('');
  // const [newPhone, setNewPhone] = useState('');
  // const [newSkype, setNewSkype] = useState('');
  const [userPhotoPreview, setUserPhotoPreview] = useState('');
  const userPhotoInputRef = useRef(null);

  useEffect(() => {
    return () => {
      if (userPhotoPreview) {
        URL.revokeObjectURL(userPhotoPreview);
      }
    };
  }, [userPhotoPreview]);

  const onClickAvatarButton = () => {
    if (userPhotoInputRef.current) {
      userPhotoInputRef.current.click();
    }
  };

  const onClickIconPlus = (e) => {
    const file = e.target.files[0];
    setImage(file);

    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setUserPhotoPreview(previewUrl);
    }
  };

  return (
    <Container>
      <ProfileContainer>
        {userPhotoPreview ? (
          <AvatarContainer>
            <Avatar src={userPhotoPreview} alt="User Photo" />
            <AvatarButton onClick={onClickAvatarButton}>
              <IconPlus>
                <use href="/src/assets/sprite.svg#icon-plus"></use>
              </IconPlus>
            </AvatarButton>
            <input
              type="file"
              accept="image/*"
              ref={userPhotoInputRef}
              onChange={onClickIconPlus}
              style={{ display: 'none' }}
              name="avatar"
            />
          </AvatarContainer>
        ) : (
          <AvatarContainer>
            <WithoutAvatar>
              <IconUser>
                <use href="/src/assets/sprite.svg#icon-user"></use>
              </IconUser>
            </WithoutAvatar>
            <AvatarButton onClick={onClickAvatarButton}>
              <IconPlus>
                <use href="/src/assets/sprite.svg#icon-plus"></use>
              </IconPlus>
            </AvatarButton>
            <InputPhoto
              type="file"
              accept="image/*"
              ref={userPhotoInputRef}
              onChange={onClickIconPlus}
              name="avatar"
            />
          </AvatarContainer>
        )}
        <UserName>Username</UserName>
        <UserText>User</UserText>
        <UserInfoContainer>
          <UserInfoColumn>
            <Label htmlFor="user-name">User Name</Label>
            <Input id="name" name="name" placeholder="Your name" type="text" />
            <Label htmlFor="birthday">Birthday</Label>
            <StyledDatepicker />
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              placeholder="Your email"
              type="email"
            />
          </UserInfoColumn>
          <UserInfoColumn>
            <Label htmlFor="phone">Phone</Label>
            <Input
              placeholder="Your phone"
              type="tel"
              id="phone"
              name="phone"
            />
            <Label htmlFor="skype">Skype</Label>
            <Input
              placeholder="Add a skype number"
              type="text"
              id="skype"
              name="skype"
            />
          </UserInfoColumn>
        </UserInfoContainer>
        <ButtonSaveChanges id="save-button">Save changes</ButtonSaveChanges>
      </ProfileContainer>
    </Container>
  );
};
