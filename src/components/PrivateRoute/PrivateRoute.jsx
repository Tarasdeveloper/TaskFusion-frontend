import { useSelector } from 'react-redux';
import { selectAuthenticationStatus } from '../../redux/auth/selectors';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, redirectTo = '/' }) => {
  const authenticated = useSelector(selectAuthenticationStatus);
  return authenticated ? children : <Navigate to={redirectTo} />;
};
export default PrivateRoute;
