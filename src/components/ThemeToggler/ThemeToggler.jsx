import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { themeSelect } from '../../redux/theme/selectors';
import { setTheme } from '../../redux/theme/themeSlise';

const ThemeToggler = () => {
  const dispatch = useDispatch();
  const stateTheme = useSelector(themeSelect);

  const handleToggleButtonClick = () => {
    const newTheme = stateTheme === 'light' ? 'dark' : 'light';
    dispatch(setTheme(newTheme));
  };

  useEffect(() => {
    stateTheme === 'light'
      ? document.body.classList.remove('dark')
      : document.body.classList.add('dark');
  }, [stateTheme]);

  return (
    <button
      onClick={handleToggleButtonClick}
      style={{ background: 'none', border: 'none', cursor: 'pointer' }}
    >
      {stateTheme === 'light' ? (
        <svg width="32" height="32" viewBox="0 0 27 27" fill="#3E85F3">
          <use xlinkHref="/src/images/sprite.svg#profile-moon-f" />
        </svg>
      ) : (
        <svg width="32" height="32" viewBox="0 0 27 27" fill="#3E85F3">
          <use xlinkHref="/src/images/sprite.svg#profile-sun-f" />
        </svg>
      )}
    </button>
  );
};

export default ThemeToggler;
