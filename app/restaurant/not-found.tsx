'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import errorPic from '../../public/icons/error.png';

export default function error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <div className="h-screen bg-gray-200 flex flex-col justify-center items-center">
      <Image src={errorPic} priority={true} alt="error" className="w-56 mb-8" />
      <div className="bg-white flex flex-col justify-around  px-9 py-14 shadow rounded">
        <h3 className="text-3xl font-bold">Oooopsy</h3>
        <p className="text-reg font-bold">We couldn't find restaurant</p>
        <p className="text-reg font-bold">Error 404</p>
        <button
          className="text-black border p-1 px-4 rounded mt-3"
          onClick={() => reset()}
        >
          Try again
        </button>
      </div>
    </div>
  );
}
