import goose from '../../images/header/goose.jpg';
import sprite from '../../images/header/sprite.svg';
import {
  SidebarWrapper,
  SidebarHeader,
  GooseImage,
  LogoTitle,
  CloseIcon,
  SidebarSubTitle,
} from './SideBar.styled';

const SideBar = ({ onToggle }) => {
  return (
    <SidebarWrapper>
      <SidebarHeader>
        <GooseImage src={goose} alt="goose" />
        <LogoTitle>Goose Track</LogoTitle>
        <CloseIcon
          onClick={() => {
            onToggle();
          }}
        >
          <svg>
            <use href={`${sprite}#icon-close`} />
          </svg>
        </CloseIcon>
      </SidebarHeader>
      <SidebarSubTitle>User Panel</SidebarSubTitle>
    </SidebarWrapper>
  );
};
// add user panel and logout button
export default SideBar;
