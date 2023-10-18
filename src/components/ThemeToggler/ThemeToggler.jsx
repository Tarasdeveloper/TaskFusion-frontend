import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { themeSelect } from '../../redux/theme/selectors';
import { setTheme } from '../../redux/theme/themeSlise';

import {
  ToggleButton,
  AnimatedIcon,
  DisappearingIcon,
} from './ThemeToggler.styled';

const ThemeToggler = () => {
  const dispatch = useDispatch();
  const stateTheme = useSelector(themeSelect);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleToggleButtonClick = () => {
    const newTheme = stateTheme === 'light' ? 'dark' : 'light';
    dispatch(setTheme(newTheme));
  };

  useEffect(() => {
    stateTheme === 'light'
      ? document.body.classList.remove('dark')
      : document.body.classList.add('dark');
    setIsLoaded(true);
  }, [stateTheme, setIsLoaded]);

  return (
    <ToggleButton onClick={handleToggleButtonClick}>
      {stateTheme === 'light' ? (
        <AnimatedIcon className={isLoaded ? 'animate' : ''}>
          <use xlinkHref="/src/assets/sprite.svg#profile-moon-f" />
        </AnimatedIcon>
      ) : (
        <DisappearingIcon className={isLoaded ? 'animate' : ''}>
          <use xlinkHref="/src/assets/sprite.svg#profile-sun-f" />
        </DisappearingIcon>
      )}
    </ToggleButton>
  );
};

export default ThemeToggler;
