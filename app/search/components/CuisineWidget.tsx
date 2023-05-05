'use client';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ISearchParams } from '../page';
import { ICuisines } from './SearchSideBar';

export default function CuisineWidget({
  cuisines,
  searchParams,
}: {
  cuisines: ICuisines[];
  searchParams: ISearchParams;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParam = useSearchParams();
  const current = new URLSearchParams(searchParam);

  const handleClick = () => {
    current.delete('cuisine');
    router.push(`${pathname}?${current}`);
  };

  return (
    <div className="border-b pb-4 mt-3 flex flex-col">
      <div className="flex gap-2">
        <h1 className="mb-2 font-medium">Cuisine</h1>
        {searchParams.cuisine && (
          <svg
            onClick={handleClick}
            className="w-6 h-6 flex-none mt-0.5 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="12" fill="#FECDD3"></circle>
            <path
              d="M8 8l8 8M16 8l-8 8"
              stroke="#B91C1C"
              strokeWidth="2"
            ></path>
          </svg>
        )}
      </div>
      {cuisines.map(cuisine => (
        <Link
          href={{
            pathname: '/search',
            query: { ...searchParams, cuisine: cuisine.name },
          }}
          className={
            searchParams.cuisine === cuisine.name
              ? 'font-normal bg-red-200 capitalize text-reg'
              : 'font-light capitalize text-reg'
          }
          key={cuisine.id}
        >
          {cuisine.name}
        </Link>
      ))}
    </div>
  );
}
