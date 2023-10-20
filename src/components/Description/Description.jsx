import calendarDt from '../../assets/img/mainPageImg/calendar-dt.png';
import calendarTabl from '../../assets/img/mainPageImg/calendar-tabl.png';
import calendarMob from '../../assets/img/mainPageImg/calendar-mob.png';
import sidebarDt from '../../assets/img/mainPageImg/sidebar-dt.png';
import sidebarTabl from '../../assets/img/mainPageImg/sidebar-tabl.png';
import sidebarMob from '../../assets/img/mainPageImg/sidebar-mob.png';
import oneDt from '../../assets/img/mainPageImg/one-dt.png';
import oneTabl from '../../assets/img/mainPageImg/one-tabl.png';
import oneMob from '../../assets/img/mainPageImg/one-mob.png';
import {
  DescrImage,
  DescrImgWrap,
  DescrItem,
  DescrItemMid,
  DescrList,
  DescrName,
  DescrSpan,
  DescrText,
  DescrTextWrap,
  DescrTextWrapMid,
  DescrTitle,
  DescrWrap,
} from './Description.styled';

const Description = () => {
  return (
    <DescrWrap>
      <DescrList>
        <DescrItem>
          <DescrTextWrap>
            <DescrSpan>1.</DescrSpan>
            <DescrName>Calendar</DescrName>
            <DescrTitle>VIEW</DescrTitle>
            <DescrText>
              GooseTrack&apos;s Calendar view provides a comprehensive overview
              of your schedule, displaying all your tasks, events, and
              appointments in a visually appealing and intuitive layout.
            </DescrText>
          </DescrTextWrap>
          <DescrImgWrap>
            <DescrImage
              srcSet={`${calendarMob} 335w, ${calendarTabl} 704w, ${calendarDt} 604w`}
              sizes="(min-width: 1024px) 604px, (min-width: 765px) 704px, 335px"
              src={calendarMob}
              alt="calendar"
            />
          </DescrImgWrap>
        </DescrItem>
        <DescrItemMid>
          <DescrTextWrapMid>
            <DescrSpan>2.</DescrSpan>
            <DescrTitle>SIDEBAR</DescrTitle>
            <DescrText>
              GooseTrack offers easy access to your account settings, calendar,
              and filters. The &quot;My Account&quot; section allows you to
              manage your profile information and preferences, while the
              calendar provides a quick and convenient way to view your upcoming
              events and tasks.
            </DescrText>
          </DescrTextWrapMid>
          <DescrImgWrap>
            <DescrImage
              srcSet={`${sidebarMob} 335w, ${sidebarTabl} 704w, ${sidebarDt} 604w`}
              sizes="(min-width: 1024px) 604px, (min-width: 765px) 704px, 335px"
              src={sidebarMob}
              alt="sidebar"
            />
          </DescrImgWrap>
        </DescrItemMid>
        <DescrItem>
          <DescrTextWrap>
            <DescrSpan>3.</DescrSpan>
            <DescrName>All in</DescrName>
            <DescrTitle>ONE</DescrTitle>
            <DescrText>
              GooseTrack is an all-in-one productivity tool that helps you stay
              on top of your tasks, events, and deadlines. Say goodbye to
              scattered to-do lists and hello to streamlined productivity with
              GooseTrack.
            </DescrText>
          </DescrTextWrap>
          <DescrImgWrap>
            <DescrImage
              srcSet={`${oneMob} 335w, ${oneTabl} 704w, ${oneDt} 604w`}
              sizes="(min-width: 1024px) 604px, (min-width: 765px) 704px, 335px"
              src={oneMob}
              alt="one"
            />
          </DescrImgWrap>
        </DescrItem>
      </DescrList>
    </DescrWrap>
  );
};

export default Description;
