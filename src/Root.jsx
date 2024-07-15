import { useLocation, Redirect } from 'react-router-dom';
import App from './App';

const Root = () => {
  const location = useLocation();

  // Check if the URL contains the redirect parameter
  const searchParams = new URLSearchParams(location.search);
  const redirect = searchParams.get('redirect');

  if (redirect) {
    return <Redirect to="/projets" />;
  }

  return <App />;
};

export default Root;
