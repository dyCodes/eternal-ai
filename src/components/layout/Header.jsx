import React from 'react';
import Container from '../ui/Container';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Button from '../ui/Button/Button';
import { MdOutlinePhone } from 'react-icons/md';
import { FaArrowLeftLong } from 'react-icons/fa6';

const Header = () => {
  const router = useRouter();

  const pathname = router.pathname;

  return (
    <header className='py-3.5 bg-gradient'>
      <Container>
        <div className='fx-between'>
          <Link href='/'>
            <h1 className='text-xl lg:text-3xl font-medium'>Eternal AI</h1>
          </Link>

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
        </div>
      </Container>
    </header>
  );
};

export default Header;
