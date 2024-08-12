import { GoogleLogo } from '@/components/icons/GoogleLogo.icon';
import { GoogleLogin } from '@react-oauth/google';

export const GoogleButton = ({ onLoginSuccess, onLoginError }) => {
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
      onError={onLoginError}
    />
  );
};

export const GoogleSignedInButton = ({ user, logOutUser }) => {
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
          <div className='text-[12px] font-medium mb-[4px]'>
            Signed in as {user?.given_name}
          </div>
          <div className='text-[11px] font-normal'>{user?.email}</div>
        </div>

        <div className='googleLogo ml-2'>
          <GoogleLogo className='w-6' />
        </div>
      </div>
    </button>
  );
};
