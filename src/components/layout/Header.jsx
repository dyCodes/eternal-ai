import React, { useEffect, useState } from 'react';
import Container from '../ui/Container';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Button from '../ui/Button/Button';
import { MdOutlinePhone } from 'react-icons/md';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { toast } from 'react-toastify';
import { jwtDecode } from 'jwt-decode';

/**
 * The Header component is responsible for rendering the header section of the application.
 * It displays the application's name and provides navigation buttons based on the current route.
 *
 * @returns {JSX.Element} - The rendered Header component.
 */
function Header() {
  const [user, setUser] = useState(null);
  const router = useRouter();
  const pathname = router.pathname;

  useEffect(() => {
    // Get user data from local storage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const onLoginSuccess = (credentialResponse) => {
    console.log('credentialResponse', credentialResponse);

    // Decode the JWT token to get user data
    const decoded = jwtDecode(credentialResponse?.credential);
    setUser(decoded);
    toast.success('Logged in with Google!');
    // Save user data to local storage
    localStorage.setItem('user', JSON.stringify(decoded));

    console.log('decoded', decoded);
  };

  const logOutUser = () => {
    localStorage.removeItem('user');
    setUser(null);
    googleLogout();
    toast.success('Logged out successfully!');
  };

  return (
    <header className='py-3.5 bg-gradient shadow-sm'>
      <Container>
        <div className='fx-between'>
          <Link href='/'>
            <h1 className='text-xl lg:text-3xl font-medium'>Eternal AI</h1>
          </Link>

          <div className='buttons gap-3 flex items-center'>
            {pathname === '/booking' || pathname === '/booking/appointments' ? (
              <Button
                onClick={() => router.back()}
                className={'bg-secondary text-white'}
              >
                <FaArrowLeftLong />
                <span>Go back</span>
              </Button>
            ) : (
              <Link href='/booking'>
                <Button className={'bg-secondary text-white'}>
                  <MdOutlinePhone />
                  <span>Book a dermatologist</span>
                </Button>
              </Link>
            )}

            <div className='hidden md:block'>
              {user ? (
                <GoogleSignedInButton user={user} logOutUser={logOutUser} />
              ) : (
                <GoogleButton onLoginSuccess={onLoginSuccess} />
              )}
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}

const GoogleButton = ({ onLoginSuccess }) => {
  return (
    <GoogleLogin
      theme='outline'
      text='continue_with'
      size='large'
      click_listener={(e) => {
        console.log('click_listener', e);
      }}
      cancel_on_tap_outside={true}
      onSuccess={onLoginSuccess}
      onError={() => {
        toast.error('Google login failed!');
      }}
    />
  );
};

const GoogleSignedInButton = ({ user, logOutUser }) => {
  console.log('user: ', user);

  return (
    <button
      class='flex items-center bg-white border-gray-300 rounded-lg shadow-sm px-4 py-2 text-sm font-medium text-[#222] hover:bg-gray-50'
      onClick={logOutUser}
    >
      <div className='flex items-center gap-x-2'>
        <img
          className='w-6 rounded-full'
          src={user?.picture}
          alt='user profile image'
        />

        <div className='text-left leading-none'>
          <div className='text-[12px] font-medium mb-1'>
            Signed in as {user?.given_name}
          </div>
          <div className='text-[11px] font-normal'>{user?.email}</div>
        </div>

        <div className='googleLogo ml-2'>
          <svg
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 48 48'
            className='w-6'
          >
            <g>
              <path
                fill='#EA4335'
                d='M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z'
              />
              <path
                fill='#4285F4'
                d='M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z'
              />
              <path
                fill='#FBBC05'
                d='M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z'
              />
              <path
                fill='#34A853'
                d='M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z'
              />
              <path fill='none' d='M0 0h48v48H0z' />
            </g>
          </svg>
        </div>
      </div>
    </button>
  );
};

export default Header;
