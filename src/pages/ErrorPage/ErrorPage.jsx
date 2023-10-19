import { useNavigate } from 'react-router-dom';
import {
  Container,
  ErrorImage,
  ErrorImageItem,
  ErrorPageBtn,
  ErrorPageSecion,
  ErrorText,
} from './ErrorPage.styled';
import image from './ErrorPage.svg';

const ErrorPage = () => {
  const navigate = useNavigate();
  
  function handleClick() {
    navigate('/', { replace: true });
  }

  return (
    <ErrorPageSecion>
      <Container>
        <ErrorImage>
          4<ErrorImageItem alt="" src={image} />4
        </ErrorImage>
        <ErrorText>
          We’re sorry, the page you requested could not be found. Please go back
          to the homepage.
        </ErrorText>
        <ErrorPageBtn onClick={handleClick}>Back to home</ErrorPageBtn>
      </Container>
    </ErrorPageSecion>
  );
};

export default ErrorPage;
