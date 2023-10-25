import gooseLogo from '../../assets/img/goose-logo.png';
import LogoutBtn from './LogoutBtn';
import UserNav from './UserNav';
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
        <GooseImage src={gooseLogo} alt="goose" />
        <LogoTitle>
          G<Span>oo</Span>seTrack
        </LogoTitle>
        <CloseIcon
          onClick={() => {
            onToggle();
          }}
          id="icon-close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 34 34"
            fill="none"
          >
            <path
              d="M25.5 8.5L8.5 25.5"
              stroke="#343434"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.5 8.5L25.5 25.5"
              stroke="#343434"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </CloseIcon>
      </SidebarHeader>
      <SidebarSubTitle>User Panel</SidebarSubTitle>
      <UserNav closeSideBar={onToggle} />
      <LogoutBtn />
    </SidebarWrapper>
  );
};
export default SideBar;
