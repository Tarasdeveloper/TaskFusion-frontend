import { NavigationLink } from "./AuthNavigate.styled";

export const AuthNavigate = ({route, content}) => {
  return <NavigationLink to={route}>{content}</NavigationLink>;
}
