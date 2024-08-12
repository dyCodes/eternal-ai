import { googleLogout } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('userAuth');
    if (storedUser) {
      const userJson = JSON.parse(storedUser);
      setUser(userJson);
    }

    // Set the default language to English
    document.documentElement.lang = 'en';
  }, []);

  const onLoginSuccess = (credentialResponse) => {
    console.log('credentialResponse', credentialResponse);

    // Decode the JWT token to get user data
    const decoded = jwtDecode(credentialResponse?.credential);
    setUser(decoded);
    toast.success('Logged in with Google!', { position: 'top-center' });

    // Save user data to local storage
    localStorage.setItem('userAuth', JSON.stringify(decoded));

    console.log('decoded', decoded);
  };

  const onLoginError = (error) => {
    console.log('error', error);
    toast.error('Login with Google failed!', { position: 'top-center' });
  };

  const logOutUser = () => {
    localStorage.removeItem('userAuth');
    setUser(null);
    googleLogout();
    toast.success('Logged out successfully!', { position: 'top-center' });
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser, onLoginSuccess, onLoginError, logOutUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  if (!AuthContext) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return useContext(AuthContext);
};
