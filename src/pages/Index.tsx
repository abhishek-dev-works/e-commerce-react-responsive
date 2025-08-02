import { Navigate } from 'react-router-dom';

const Index = () => {
  // Redirect to Home page since we now have a proper home page
  return <Navigate to="/home" replace />;
};

export default Index;
