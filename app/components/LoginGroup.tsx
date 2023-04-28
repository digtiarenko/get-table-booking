'use client';

import { useState } from 'react';
import Modal from './Modal';

export default function LoginGroup() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <div className="flex">
        <button
          onClick={handleOpen}
          className="bg-blue-400 text-white border p-1 px-4 rounded mr-3"
        >
          Sign in
        </button>
        <button
          onClick={handleOpen}
          className=" text-black border p-1 px-4 rounded"
        >
          Sign up
        </button>
      </div>
      {open && <Modal onClose={handleClose} />}
    </>
  );
}
