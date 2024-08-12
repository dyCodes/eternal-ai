import React from 'react';
import Container from '../ui/Container';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Button from '../ui/Button/Button';
import { MdOutlinePhone } from 'react-icons/md';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { GoogleLogin } from '@react-oauth/google';
import { toast } from 'react-toastify';
import { useAuthContext } from '@/context/AuthContext';
import { GoogleLogo } from '../icons/GoogleLogo.icon';
import {
  GoogleButton,
  GoogleSignedInButton,
} from '../ui/GoogleAuth/GoogleButton';

/**
 * The Header component is responsible for rendering the header section of the application.
 * It displays the application's name and provides navigation buttons based on the current route.
 *
 * @returns {JSX.Element} - The rendered Header component.
 */

function Header() {
  const router = useRouter();
  const pathname = router.pathname;
  const { user, onLoginSuccess, onLoginError, logOutUser } = useAuthContext();

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
                <GoogleButton
                  onLoginSuccess={onLoginSuccess}
                  onLoginError={onLoginError}
                />
              )}
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
