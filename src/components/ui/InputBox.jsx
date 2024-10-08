import React from 'react';

const InputBox = ({ name, value, label, onChange, ...rest }) => {
  return (
    <div className='inputBox has-[:focus]:bg-white'>
      <label htmlFor={name}>
        {label}{' '}
        {rest.required && (
          <span className='text-red-500 relative top-1'>*</span>
        )}
      </label>

      <div className='inputBox__inner'>
        <input
          name={name}
          value={value || ''}
          className='text-gray-900 text-sm block w-full p-2.5 bg-transparent'
          onChange={onChange}
          {...rest}
        />
      </div>
    </div>
  );
};

export default InputBox;
