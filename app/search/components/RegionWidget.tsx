'use client';
// import { Location } from '@prisma/client';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ISearchParams } from '../page';
import { ILocations } from './SearchSideBar';

export default function RegionWidget({
  locations,
  searchParams,
}: {
  locations: ILocations[];
  searchParams: ISearchParams;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParam = useSearchParams();
  const currentSearchParams = new URLSearchParams(searchParam);

  const handleClick = () => {
    currentSearchParams.delete('location');
    router.push(`${pathname}?${currentSearchParams}`);
  };

  return (
    <div className="border-b pb-4 flex flex-col">
      <div className="flex gap-2">
        <h1 className="mb-2 font-medium">Region</h1>
        {searchParams.location && (
          <div title="Clear Location Filter">
            <svg
              aria-label="Clear Location Filter"
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
          </div>
        )}
      </div>
      {locations.map(location => (
        <Link
          href={{
            pathname: '/search',
            query: { ...searchParams, location: location.name },
          }}
          className={
            searchParams.location === location.name
              ? 'font-normal bg-red-200 capitalize text-reg'
              : 'font-light capitalize text-reg'
          }
          key={location.id}
        >
          {location.name}
        </Link>
      ))}
    </div>
  );
}
