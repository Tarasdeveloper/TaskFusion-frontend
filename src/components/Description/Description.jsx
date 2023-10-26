import calendarDt from '../../assets/img/mainPageImg/calendar-dt.png';
import calendarDtX2 from '../../assets/img/mainPageImg/calendar-dt-x2.png';
import calendarTabl from '../../assets/img/mainPageImg/calendar-tabl.png';
import calendarTablX2 from '../../assets/img/mainPageImg/calendar-tabl-x2.png';
import calendarMob from '../../assets/img/mainPageImg/calendar-mob.png';
import calendarMobX2 from '../../assets/img/mainPageImg/calendar-mob-x2.png';
import sidebarDt from '../../assets/img/mainPageImg/sidebar-dt.png';
import sidebarDtX2 from '../../assets/img/mainPageImg/sidebar-dt-x2.png';
import sidebarTabl from '../../assets/img/mainPageImg/sidebar-tabl.png';
import sidebarTablX2 from '../../assets/img/mainPageImg/sidebar-tabl-x2.png';
import sidebarMob from '../../assets/img/mainPageImg/sidebar-mob.png';
import sidebarMobX2 from '../../assets/img/mainPageImg/sidebar-mob-x2.png';
import oneDt from '../../assets/img/mainPageImg/one-dt.png';
import oneDtX2 from '../../assets/img/mainPageImg/one-dt-x2.png';
import oneTabl from '../../assets/img/mainPageImg/one-tabl.png';
import oneTablX2 from '../../assets/img/mainPageImg/one-tabl-x2.png';
import oneMob from '../../assets/img/mainPageImg/one-mob.png';
import oneMobX2 from '../../assets/img/mainPageImg/one-mob-x2.png';
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
              srcSet={`${calendarMob} 335w,${calendarMobX2} 2x 335w, ${calendarTabl} 704w,${calendarTablX2} 2x 704w, ${calendarDt} 604w , ${calendarDtX2} 2x 604w`}
              sizes="(min-width: 1024px) 604px, (min-width: 480px) 704px, 335px"
              src={calendarMob}
              alt="calendar"
              type="image/png"
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
              srcSet={`${sidebarMob} 335w,${sidebarMobX2} 2x 335w, ${sidebarTabl} 704w,${sidebarTablX2} 2x 704w, ${sidebarDt} 604w, ${sidebarDtX2} 2x 604w`}
              sizes="(min-width: 1024px) 604px, (min-width: 480px) 704px, 335px"
              src={sidebarMob}
              alt="sidebar"
              type="image/png"
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
              srcSet={`${oneMob} 335w,${oneMobX2} 2x 335w, ${oneTabl} 704w,${oneTablX2} 2x 704w, ${oneDt} 604w, ${oneDtX2} 2x 604w`}
              sizes="(min-width: 1024px) 604px, (min-width: 480px) 704px, 335px"
              src={oneMob}
              alt="one"
              type="image/png"
            />
          </DescrImgWrap>
        </DescrItem>
      </DescrList>
    </DescrWrap>
  );
};

export default Description;
