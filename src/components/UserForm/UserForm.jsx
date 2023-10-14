import { useState } from 'react';
import {
  Avatar,
  AvatarButton,
  AvatarContainer,
  ButtonSaveChanges,
  Container,
  IconPlus,
  IconUser,
  Input,
  Label,
  ProfileContainer,
  UserInfoColumn,
  UserInfoContainer,
  UserName,
  UserText,
  WithoutAvatar,
} from './UserForm.styled';

export const UserForm = () => {
  const [image, setImage] = useState('');
  return (
    <Container>
      <ProfileContainer>
        {image ? (
          <AvatarContainer>
            <Avatar src="user-profile-image.jpg" alt="User Photo" />
            <AvatarButton>
              <IconPlus>
                <use href="/src/assets/sprite.svg#icon-plus"></use>
              </IconPlus>
            </AvatarButton>
          </AvatarContainer>
        ) : (
          <AvatarContainer>
            <WithoutAvatar>
              <IconUser>
                <use href="/src/assets/sprite.svg#icon-user"></use>
              </IconUser>
            </WithoutAvatar>
            <AvatarButton>
              <IconPlus>
                <use href="/src/assets/sprite.svg#icon-plus"></use>
              </IconPlus>
            </AvatarButton>
          </AvatarContainer>
        )}
        <UserName>Username</UserName>
        <UserText>User</UserText>
        <UserInfoContainer>
          <UserInfoColumn>
            <Label htmlFor="user-name">User Name</Label>
            <Input id="name" name="name" placeholder="Your name" type="text" />
            <Label htmlFor="birthday">Birthday</Label>
            <Input
              dateFormat="dd/MM/yyyy"
              type="date"
              id="birthday"
              name="birthday"
            />
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
