import sprite from '../../assets/sprite.svg';
import { NavList, CurrentLink, Icon } from './UserNav.styled';
import useWindowSize from '../../hooks/useWindowSize';

 const UserNav = ({ closeSideBar }) => {
    const windowSize = useWindowSize();
    function closeSideBarMobile() {
      if (windowSize.width < 1440) {
        closeSideBar();
      }
    }
    return (
      <>
        <NavList>
          <CurrentLink
            to="/account"
            onClick={() => {
              closeSideBarMobile();
            }}
          >
            <Icon>
              <use href={`${sprite}#icon-user-check-01`} />
            </Icon>
            <span>My account</span>
          </CurrentLink>
          <CurrentLink
            to= "/calendar"
            onClick={() => {
              closeSideBarMobile();
            }}
          >
            <Icon>
              <use href={`${sprite}#icon-calendar-check-02`} />
            </Icon>
            <span>Calendar</span>
          </CurrentLink>
          <CurrentLink
            to= "/statistics"
            onClick={() => {
              closeSideBarMobile();
            }}
          >
            <Icon>
              <use href={`${sprite}#icon-chart`} />
            </Icon>
            <span>Statistics</span>
          </CurrentLink>
        </NavList>
      </>
    );
  };
  export default UserNav;