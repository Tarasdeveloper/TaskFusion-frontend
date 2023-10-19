import { useEffect, useRef, useState } from 'react';
import { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './CustomDatePicker.css';
import uk from 'date-fns/locale/uk';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsLoadingStatus,
  selectIsUpdating,
  selectUser,
} from '../../redux/auth/selectors';
import { addDays, format, isWeekend, parseISO } from 'date-fns';
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
  InputDatePicker,
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
import Notiflix from 'notiflix';
import { Loader } from '../Loader/Loader';

registerLocale('uk', uk);

export const UserForm = () => {
  const { name, email, avatar, phone, skype, birthday } =
    useSelector(selectUser);
  const isUpdating = useSelector(selectIsUpdating);
  const isLoading = useSelector(selectIsLoadingStatus);
  const initialValues = {
    name: name ? name : '',
    email: email ? email : '',
    avatar: avatar ? avatar : '',
    phone: phone ? phone : '',
    skype: skype ? skype : '',
    birthday: birthday ? parseISO(birthday) : '',
  };
  const [state, setState] = useState(initialValues);
  const [userPhotoPreview, setUserPhotoPreview] = useState('');
  const [isUploadingPhoto, setIsUploadingPhoto] = useState(false);
  const userPhotoInputRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      if (userPhotoPreview) {
        URL.revokeObjectURL(userPhotoPreview);
      }
    };
  }, [userPhotoPreview]);

  const changes =
    name !== state.name ||
    email !== state.email ||
    phone !== state.phone ||
    skype !== state.skype ||
    birthday !== state.birthday ||
    userPhotoPreview !== '' ||
    avatar !== state.avatar;

  const onClickAvatarButton = () => {
    if (userPhotoInputRef.current) {
      userPhotoInputRef.current.click();
    }
  };

  const onClickIconPlus = (e) => {
    const photo = e.target.files[0];
    setState((prevState) => ({
      ...prevState,
      avatar: photo,
    }));
    setFieldValue('avatar', photo);

    if (photo) {
      setIsUploadingPhoto(true); 
      const previewUrl = URL.createObjectURL(photo);
      Notiflix.Notify.success('User photo successfully added.');
      setUserPhotoPreview(previewUrl);
      setIsUploadingPhoto(false);
    } else {
      setUserPhotoPreview(avatar);
    }
  };

  const handleSaveChanges = async () => {
    // event.preventDefault();
    if (!changes) return;
    const formData = new FormData();
    if (name !== state.name) {
      formData.append('userName', state.name);
    }
    if (email !== state.email) {
      formData.append('email', state.email);
    }
    if (userPhotoPreview !== '' || avatar !== state.avatar) {
      formData.append('avatar', state.avatar);
    }
    if (phone !== state.phone) {
      formData.append('phone', state.phone);
    }
    if (skype !== state.skype) {
      formData.append('skype', state.skype);
    }
    if (birthday !== state.birthday) {
      formData.append('birthDay', state.birthday);
    }
    dispatch(updateUserThunk(formData));
    Notiflix.Notify.success('User information successfully changed.');
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
    setFieldValue,
  } = useFormik({
    initialValues,
    validationSchema: userInfoSchema,
    onSubmit: (event) => handleSaveChanges(event),
  });

  return (
    <Container>
      <ProfileContainer>
        <FormUser onSubmit={handleSubmit}>
          {isLoading && <Loader />}
          {isUploadingPhoto && <Loader />}
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
                name="avatar"
                accept="image/*"
                ref={userPhotoInputRef}
                onBlur={handleBlur}
                onChange={(event) => {
                  onClickIconPlus(event);
                  setSubmitting(false);
                }}
                style={{ display: 'none' }}
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
                name="avatar"
                accept="image/*"
                ref={userPhotoInputRef}
                onBlur={handleBlur}
                onChange={(event) => {
                  onClickIconPlus(event);
                  setSubmitting(false);
                }}
              />
            </AvatarContainer>
          )}
          <UserName>{values.name.length > 1 ? values.name : 'Name'}</UserName>
          <UserText>User</UserText>
          <UserInfoContainer>
            <UserInfoColumn>
              <Label>
                <LabelText htmlFor="user-name">User Name</LabelText>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  type="text"
                  value={values.name}
                  onBlur={handleBlur}
                  onChange={(event) => {
                    handleChange(event);
                    setSubmitting(false);
                  }}
                  className={errors.name && touched.name ? 'input-error' : ''}
                />
                {errors.name && touched.name ? (
                  <ErrorInputMessage>{errors.name}</ErrorInputMessage>
                ) : (
                  <ErrorInputMessage />
                )}
              </Label>
              <Label>
                <LabelText htmlFor="birthday">Birthday</LabelText>
                <InputDatePicker
                  name="birthday"
                  dateFormat="dd/MM/yyyy"
                  placeholderText={format(new Date(), 'dd/MM/yyyy')}
                  selected={values.birthday}
                  value={values.birthday}
                  onBlur={handleBlur}
                  onChange={(date) => {
                    setFieldValue('birthday', date);
                    setSubmitting(false);
                  }}
                  calendarStartDay={1}
                  maxDate={addDays(new Date(), 0)}
                  highlightDates={(date) => isWeekend(date)}
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
            <ButtonSaveChanges
              type="submit"
              disabled={!dirty || isSubmitting || !changes}
            >
              Save changes
            </ButtonSaveChanges>
          )}
        </FormUser>
      </ProfileContainer>
    </Container>
  );
};
