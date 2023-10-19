import { logoutThunk } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import sprite from '../../assets/sprite.svg';
import { Button, Text, SVG } from './LogoutBtn.styled';

const LogoutBtn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleClick() {
    dispatch(logoutThunk());
    navigate('/', { replace: true });
  }

  return (
    <Button type="button" onClick={handleClick}>
      <Text>Log out </Text>
      <SVG>
        <use href={`${sprite}#icon-log-out`} />
      </SVG>
    </Button>
  );
};

export default LogoutBtn;
