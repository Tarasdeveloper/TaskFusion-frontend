import { useEffect, useRef, useState } from 'react';
import StyledDatepicker from './StyledDatepicker';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsUpdating, selectUser } from '../../redux/auth/selectors';
import { format, isValid, parse, parseISO } from 'date-fns';
import { updateUserThunk } from '../../redux/auth/operations';
import { useFormik } from 'formik';
import { userInfoSchema } from '../../schemas';
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
import sprite from '../../assets/sprite.svg';

export const UserForm = () => {
  const { name, email, userPhotoURL, phone, skype, birthDay } =
    useSelector(selectUser);
  const isUpdating = useSelector(selectIsUpdating);
  const initialValues = {
    newUserName: name ? name : '',
    newEmail: email ? email : '',
    newUserPhotoURL: userPhotoURL ? userPhotoURL : '',
    newPhone: phone ? phone : '',
    newSkype: skype ? skype : '',
    newBirthday: birthDay ? parseISO(birthDay) : '',
  };
  const [state, setState] = useState(initialValues);
  const initialDate =
    birthDay === '' ? new Date() : parse(birthDay, 'dd/MM/yyyy', new Date());
  const [selectedDate, setSelectedDate] = useState(
    isValid(initialDate) ? initialDate : new Date(),
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
    name !== state.newUserName ||
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
    if (name !== state.newUserName) {
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
    initialValues,
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
              <AvatarButton type="button" onClick={onClickAvatarButton}>
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
              <AvatarButton type="button" onClick={onClickAvatarButton}>
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
            {values.newUserName.length > 1 ? values.newUserName : 'Name'}
          </UserName>
          <UserText>User</UserText>
          <UserInfoContainer>
            <UserInfoColumn>
              <Label>
                <LabelText htmlFor="user-name">User Name</LabelText>
                <Input
                  id="newUserName"
                  name="newUserName"
                  placeholder="Your name"
                  type="text"
                  value={values.newUserName}
                  onBlur={handleBlur}
                  onChange={(event) => {
                    handleChange(event);
                    setSubmitting(false);
                  }}
                  className={
                    errors.newUserName && touched.newUserName
                      ? 'input-error'
                      : ''
                  }
                />
                {errors.newUserName && touched.newUserName ? (
                  <ErrorInputMessage>{errors.newUserName}</ErrorInputMessage>
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
                {errors.newBirthday && touched.newBirthday ? (
                  <ErrorInputMessage>{errors.newBirthday}</ErrorInputMessage>
                ) : (
                  <ErrorInputMessage />
                )}
              </Label>
              <Label>
                <LabelText htmlFor="email">Email</LabelText>
                <Input
                  id="newEmail"
                  name="newEmail"
                  placeholder="Your email"
                  type="email"
                  value={values.newEmail}
                  onBlur={handleBlur}
                  onChange={(event) => {
                    handleChange(event);
                    setSubmitting(false);
                  }}
                  className={
                    errors.newEmail && touched.newEmail ? 'input-error' : ''
                  }
                  required
                />
                {errors.newEmail && touched.newEmail ? (
                  <ErrorInputMessage>{errors.newEmail}</ErrorInputMessage>
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
                  id="newPhone"
                  name="newPhone"
                  value={values.newPhone}
                  onBlur={handleBlur}
                  onChange={(event) => {
                    handleChange(event);
                    setSubmitting(false);
                  }}
                  className={
                    errors.newPhone && touched.newPhone ? 'input-error' : ''
                  }
                />
                {errors.newPhone && touched.newPhone ? (
                  <ErrorInputMessage>{errors.newPhone}</ErrorInputMessage>
                ) : (
                  <ErrorInputMessage />
                )}
              </Label>
              <Label>
                <LabelText htmlFor="skype">Skype</LabelText>
                <Input
                  placeholder="Add a skype number"
                  type="text"
                  id="newSkype"
                  name="newSkype"
                  value={values.newSkype}
                  onBlur={handleBlur}
                  onChange={(event) => {
                    handleChange(event);
                    setSubmitting(false);
                  }}
                  className={
                    errors.newSkype && touched.newSkype ? 'input-error' : ''
                  }
                />
                {errors.newSkype && touched.newSkype ? (
                  <ErrorInputMessage>{errors.newSkype}</ErrorInputMessage>
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
