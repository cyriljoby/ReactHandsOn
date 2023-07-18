import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const user = useSelector(state => state.user);

  // Check if the user is stored in localStorage
  const storedUser = localStorage.getItem('user');
  const storedToken = localStorage.getItem('token');

  if (!user && !storedUser && !storedToken) {
    return <Navigate to='/register' />;
  }

  return children;
};

export default ProtectedRoute;
