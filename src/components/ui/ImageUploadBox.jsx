const ImageUploadBox = ({ image, onChange }) => {
  return (
    <div className='flex items-center justify-center w-full'>
      <label
        htmlFor='dropzone-file'
        className='flex flex-col items-center justify-center w-full min-h-60 border border-secondary-940 border-dashed rounded-lg cursor-pointer bg-white'
      >
        {image ? (
          <img
            src={image}
            className={'h-full max-h-80'}
            alt='condition-image'
          />
        ) : (
          <div className='flex flex-col items-center justify-center pt-4 pb-5'>
            <svg
              className='w-8 h-8 mb-4 text-gray-500'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 20 16'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2'
              />
            </svg>
            <p className='mb-2 text-sm text-gray-500'>
              <span className='font-semibold'>Click to upload</span> or drag and
              drop
            </p>
            <p className='text-xs text-gray-500'>
              PNG, JPG, WEBP or HEIC (MAX. 1200x800px)
            </p>
          </div>
        )}

        <input
          id='dropzone-file'
          type='file'
          className='hidden'
          onChange={(event) => onChange(event)}
        />
      </label>
    </div>
  );
};

export default ImageUploadBox;
