'use client';

import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

export default function SearchBar() {
  const router = useRouter();
  const [location, setLocation] = useState('');

  const handleClick = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (location === '') return;
    router.push(`/search?location=${location}`);
    setLocation('');
  };

  return (
    <form
      onSubmit={e => handleClick(e)}
      className="text-left text-lg py-3 m-auto flex justify-center"
    >
      <input
        value={location}
        onChange={e => setLocation(e.target.value)}
        className="rounded text-black bg-white mr-3 p-2 w-[450px]"
        type="text"
        placeholder="State, city or town"
      />
      <button
        type="submit"
        // onClick={handleClick}
        className="rounded bg-red-600 px-9 py-2 text-white"
      >
        Let's go
      </button>
    </form>
  );
}
