import { useLocation, Navigate } from 'react-router-dom'; // Remplacer Redirect par Navigate
import App from './App';

const Root = () => {
  const location = useLocation();

  // Check if the URL contains the redirect parameter
  const searchParams = new URLSearchParams(location.search);
  const redirect = searchParams.get('redirect');

  if (redirect) {
    return <Navigate to="/projets" />;
  }

  return <App />;
};

export default Root;
