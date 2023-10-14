import {
  DescrImage,
  DescrImgWrap,
  DescrItem,
  DescrItemMid,
  DescrList,
  DescrSpan,
  DescrText,
  DescrTitle,
} from './Description.styled';

const Description = () => {
  return (
    <DescrList>
      <DescrItem>
        <DescrSpan>1.</DescrSpan>
        <p>Calendar</p>
        <DescrTitle>VIEW</DescrTitle>
        <DescrText>
          GooseTrack&apos;s Calendar view provides a comprehensive overview of
          your schedule, displaying all your tasks, events, and appointments in
          a visually appealing and intuitive layout.
        </DescrText>
        <DescrImgWrap>
          <DescrImage src="" alt="" />
        </DescrImgWrap>
      </DescrItem>
      <DescrItemMid>
        <DescrSpan>2.</DescrSpan>
        <DescrTitle>SIDEBAR</DescrTitle>
        <DescrText>
          GooseTrack offers easy access to your account settings, calendar, and
          filters. The &quot;My Account&quot; section allows you to manage your
          profile information and preferences, while the calendar provides a
          quick and convenient way to view your upcoming events and tasks.
        </DescrText>
        <DescrImgWrap>
          <DescrImage src="" alt="" />
        </DescrImgWrap>
      </DescrItemMid>
      <DescrItem>
        <DescrSpan>3.</DescrSpan>
        <p>All in</p>
        <DescrTitle>ONE</DescrTitle>
        <DescrText>
          GooseTrack is an all-in-one productivity tool that helps you stay on
          top of your tasks, events, and deadlines. Say goodbye to scattered
          to-do lists and hello to streamlined productivity with GooseTrack.
        </DescrText>
        <DescrImgWrap>
          <DescrImage src="" alt="" />
        </DescrImgWrap>
      </DescrItem>
    </DescrList>
  );
};

export default Description;
