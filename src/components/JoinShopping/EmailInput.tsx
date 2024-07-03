import React from 'react'
import Button from '../Button';

const EmailInput = () => {
  return (
    <div className="flex  p-2  rounded-lg bg-white border w-[350px]">
    <input
      type="text"
      className="flex-grow p-2 border-l rounded-r outline-none"
      placeholder="Add your email here"
      />
      <Button cls='px-5'>SEND</Button>    
  </div>
);
};

export default EmailInput