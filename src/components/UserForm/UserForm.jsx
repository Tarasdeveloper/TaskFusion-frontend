import { useEffect, useRef, useState } from 'react';
import {
  Avatar,
  AvatarButton,
  AvatarContainer,
  ButtonSaveChanges,
  Container,
  ErrorInputMessage,
  FormUser,
  IconPlus,
  IconUser,
  Input,
  InputPhoto,
  Label,
  LabelText,
  ProfileContainer,
  UserInfoColumn,
  UserInfoContainer,
  UserName,
  UserText,
  WithoutAvatar,
} from './UserForm.styled';
import StyledDatepicker from './StyledDatepicker';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsUpdating, selectUser } from '../../redux/auth/selectors';
import { format, parse } from 'date-fns';
import { updateUserThunk } from '../../redux/auth/operations';
import { useFormik } from 'formik';
import { userInfoSchema } from '../../schemas';
import sprite from '../../assets/sprite.svg';

const initialState = {
  newUserName: '',
  newEmail: '',
  newUserPhotoURL: '',
  newPhone: '',
  newSkype: '',
  newBirthday: '',
};

export const UserForm = () => {
  const { userName, email, userPhotoURL, phone, skype, birthDay } =
    useSelector(selectUser);
  const isUpdating = useSelector(selectIsUpdating);
  const [state, setState] = useState(initialState);
  const [selectedDate, setSelectedDate] = useState(
    birthDay === null ? new Date() : parse(birthDay, 'dd/MM/yyyy', new Date()),
  );
  const [userPhotoPreview, setUserPhotoPreview] = useState('');
  const userPhotoInputRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      if (userPhotoPreview) {
        URL.revokeObjectURL(userPhotoPreview);
      }
    };
  }, [userPhotoPreview]);

  const changeDate = (date) => {
    setSelectedDate(date);
  };

  const changes =
    userName !== state.newUserName ||
    email !== state.newEmail ||
    phone !== state.newPhone ||
    skype !== state.newSkype ||
    birthDay !== format(selectedDate, 'dd/MM/yyyy') ||
    userPhotoPreview !== '';

  const onClickAvatarButton = () => {
    if (userPhotoInputRef.current) {
      userPhotoInputRef.current.click();
    }
  };

  const onClickIconPlus = (e) => {
    const photo = e.target.files[0];
    setState((prevState) => ({
      ...prevState,
      newUserPhotoURL: photo,
    }));

    if (photo) {
      const previewUrl = URL.createObjectURL(photo);
      setUserPhotoPreview(previewUrl);
    } else {
      setUserPhotoPreview(userPhotoURL);
    }
  };

  const handleSaveChanges = async () => {
    if (!changes) return;
    const formData = new FormData();
    if (userName !== state.newUserName) {
      formData.append('userName', state.newUserName);
    }
    if (email !== state.newEmail) {
      formData.append('email', state.newEmail);
    }
    if (userPhotoPreview !== '') {
      formData.append('avatar', state.newUserPhotoURL);
    }
    if (phone !== state.newPhone) {
      formData.append('phone', state.newPhone);
    }
    if (skype !== state.newSkype) {
      formData.append('skype', state.newSkype);
    }
    if (birthDay !== format(selectedDate, 'dd/MM/yyyy')) {
      formData.append('birthDay', format(selectedDate, 'dd/MM/yyyy'));
    }
    dispatch(updateUserThunk(formData));
  };

  const {
    values,
    errors,
    touched,
    dirty,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
    setSubmitting,
  } = useFormik({
    initialValues: {
      userName: '',
      email: '',
      userPhotoURL: '',
      phone: '',
      skype: '',
      birthday: '',
    },
    validationSchema: userInfoSchema,
    onSubmit: (event) => handleSaveChanges(event),
  });

  return (
    <Container>
      <ProfileContainer>
        <FormUser onSubmit={handleSubmit}>
          {userPhotoPreview ? (
            <AvatarContainer>
              <Avatar src={userPhotoPreview} alt="User Photo" />
              <AvatarButton onClick={onClickAvatarButton}>
                <IconPlus>
                  <use href={`${sprite}#icon-plus`}></use>
                </IconPlus>
              </AvatarButton>
              <input
                type="file"
                accept="image/*"
                ref={userPhotoInputRef}
                onBlur={handleBlur}
                onChange={(event) => {
                  onClickIconPlus(event);
                  setSubmitting(false);
                }}
                style={{ display: 'none' }}
                name="avatar"
              />
            </AvatarContainer>
          ) : (
            <AvatarContainer>
              <WithoutAvatar>
                <IconUser>
                  <use href={`${sprite}#icon-user`}></use>
                </IconUser>
              </WithoutAvatar>
              <AvatarButton onClick={onClickAvatarButton}>
                <IconPlus>
                  <use href={`${sprite}#icon-plus`}></use>
                </IconPlus>
              </AvatarButton>
              <InputPhoto
                type="file"
                accept="image/*"
                ref={userPhotoInputRef}
                onBlur={handleBlur}
                onChange={(event) => {
                  onClickIconPlus(event);
                  setSubmitting(false);
                }}
                name="avatar"
              />
            </AvatarContainer>
          )}
          <UserName>
            {values.userName.length > 1 ? values.userName : 'Name'}
          </UserName>
          <UserText>User</UserText>
          <UserInfoContainer>
            <UserInfoColumn>
              <Label>
                <LabelText htmlFor="user-name">User Name</LabelText>
                <Input
                  id="userName"
                  name="userName"
                  placeholder="Your name"
                  type="text"
                  value={values.userName}
                  onBlur={handleBlur}
                  onChange={(event) => {
                    handleChange(event);
                    setSubmitting(false);
                  }}
                  className={
                    errors.userName && touched.userName ? 'input-error' : ''
                  }
                />
                {errors.userName && touched.userName ? (
                  <ErrorInputMessage>{errors.userName}</ErrorInputMessage>
                ) : (
                  <ErrorInputMessage />
                )}
              </Label>
              <Label>
                <LabelText htmlFor="birthday">Birthday</LabelText>
                <StyledDatepicker
                  selectedDate={selectedDate}
                  setSelectedDate={changeDate}
                />
                {errors.birthday && touched.birthday ? (
                  <ErrorInputMessage>{errors.birthday}</ErrorInputMessage>
                ) : (
                  <ErrorInputMessage />
                )}
              </Label>
              <Label>
                <LabelText htmlFor="email">Email</LabelText>
                <Input
                  id="email"
                  name="email"
                  placeholder="Your email"
                  type="email"
                  value={values.email}
                  onBlur={handleBlur}
                  onChange={(event) => {
                    handleChange(event);
                    setSubmitting(false);
                  }}
                  className={errors.email && touched.email ? 'input-error' : ''}
                  required
                />
                {errors.email && touched.email ? (
                  <ErrorInputMessage>{errors.email}</ErrorInputMessage>
                ) : (
                  <ErrorInputMessage />
                )}
              </Label>
            </UserInfoColumn>
            <UserInfoColumn>
              <Label>
                <LabelText htmlFor="phone">Phone</LabelText>
                <Input
                  placeholder="Your phone"
                  type="tel"
                  id="phone"
                  name="phone"
                  value={values.phone}
                  onBlur={handleBlur}
                  onChange={(event) => {
                    handleChange(event);
                    setSubmitting(false);
                  }}
                  className={errors.phone && touched.phone ? 'input-error' : ''}
                />
                {errors.phone && touched.phone ? (
                  <ErrorInputMessage>{errors.phone}</ErrorInputMessage>
                ) : (
                  <ErrorInputMessage />
                )}
              </Label>
              <Label>
                <LabelText htmlFor="skype">Skype</LabelText>
                <Input
                  placeholder="Add a skype number"
                  type="text"
                  id="skype"
                  name="skype"
                  value={values.skype}
                  onBlur={handleBlur}
                  onChange={(event) => {
                    handleChange(event);
                    setSubmitting(false);
                  }}
                  className={errors.skype && touched.skype ? 'input-error' : ''}
                />
                {errors.skype && touched.skype ? (
                  <ErrorInputMessage>{errors.skype}</ErrorInputMessage>
                ) : (
                  <ErrorInputMessage />
                )}
              </Label>
            </UserInfoColumn>
          </UserInfoContainer>
          {isUpdating ? (
            <ButtonSaveChanges type="submit" disabled>
              Submitting...
            </ButtonSaveChanges>
          ) : (
            <ButtonSaveChanges type="submit" disabled={!dirty || isSubmitting}>
              Save changes
            </ButtonSaveChanges>
          )}
        </FormUser>
      </ProfileContainer>
    </Container>
  );
};
