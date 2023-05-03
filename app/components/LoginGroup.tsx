'use client';

import { useState } from 'react';
import Modal from './Modal';

export default function LoginGroup() {
  const [open, setOpen] = useState('');
  const handleOpen = (value: string) => {
    console.log(value);
    setOpen(value);
  };
  const handleClose = () => setOpen('');
  return (
    <>
      <div className="flex">
        <button
          value="signin"
          onClick={e => handleOpen(e.currentTarget.value)}
          className="bg-blue-400 text-white border p-1 px-4 rounded mr-3"
        >
          Sign in
        </button>
        <button
          value="signup"
          onClick={e => handleOpen(e.currentTarget.value)}
          className=" text-black border p-1 px-4 rounded"
        >
          Sign up
        </button>
      </div>
      {open && <Modal type={open} onClose={handleClose} />}
    </>
  );
}
