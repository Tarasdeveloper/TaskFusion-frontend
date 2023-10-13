import { Link } from 'react-router-dom';
import goose from '../../assets/img/mainPageImg/goose-desk.png';

const MainPage = () => {
  return (
    <div>
      <div>
        <img src={goose} alt="goose" />
        <h1>GooseTrack</h1>
        <Link>Sign up </Link>
        <Link>Log in </Link>
      </div>
    </div>
  );
};

export default MainPage;
