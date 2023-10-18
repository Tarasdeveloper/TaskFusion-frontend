import goose from '../../assets/img/header/goose.jpg';
import sprite from '../../assets/sprite.svg';
import LogoutBtn from './LogoutBtn';
import {
  SidebarWrapper,
  SidebarHeader,
  GooseImage,
  LogoTitle,
  CloseIcon,
  SidebarSubTitle,
  Span,
} from './SideBar.styled';

const SideBar = ({ onToggle }) => {
  return (
    <SidebarWrapper>
      <SidebarHeader>
        <GooseImage src={goose} alt="goose" />
        <LogoTitle>
          G<Span>oo</Span>seTrack
        </LogoTitle>
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
      <LogoutBtn />
    </SidebarWrapper>
  );
};
// add user panel and logout button
export default SideBar;
