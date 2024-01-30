import React, { useEffect } from 'react';
import { useNavigate, Navigate, useLocation } from 'react-router-dom';
import logo from '../assets/cubie.png';

interface UserDetails {
  id: string;
  email: string;
  fullName: string;
  isActive: boolean;
  roles: string[];
  token: string;
}

const ViewComponent: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation<{ userDetails: UserDetails }>();
  const userDetails = location.state?.userDetails;

  // Redirect to the login page if userDetails is not present
  if (!userDetails) {
    return <Navigate to="/login" />;
  }

  // Retrieve the JWT token from the URL query parameters
  const urlParams = new URLSearchParams(window.location.search);
  const jwtToken = urlParams.get('jwt');

  // Save the JWT token to local storage when the component mounts
  useEffect(() => {
    if (jwtToken) {
      localStorage.setItem('jwtToken', jwtToken);

      // Delayed redirection to /test after 3 seconds
      const timeoutId = setTimeout(() => {
        navigate('/test');
      }, 3000);

      // Clear the timeout when the component unmounts
      return () => clearTimeout(timeoutId);
    }
  }, [jwtToken, navigate]);

  return (
    <div className="max-w-sm rounded-sm overflow-hidden shadow-lg m-16 flex flex-col flex-center justify-center bg-">
      <div className="h-64 bg-cover hover:bg-gray" style={{
        backgroundImage: `url(${logo})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
      }} />
      <div className="mx-6 my-4 border-b border-gray-light">
        <div className="font-medium text-base text-gray-darker mb-4">Welcome, {userDetails.fullName}!</div>
        <p className="font-normal text-gray-dark text-sm mb-4">
          Email: {userDetails.email}!
        </p>
        <p className="font-normal text-gray-dark text-sm mb-2">
          Role: {userDetails.roles}!
        </p>
      </div>
    </div>
  );
};

export default ViewComponent;
