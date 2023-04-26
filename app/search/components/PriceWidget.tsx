'use client';
import { PRICE } from '@prisma/client';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Price from '../../components/Price';
import { ISearchParams } from '../page';

export default function PriceWidget({
  searchParams,
}: {
  searchParams: ISearchParams;
}) {
  const prices = Object.values(PRICE);
  const router = useRouter();
  const pathname = usePathname();
  const searchParam = useSearchParams();
  const currentSearchParams = new URLSearchParams(searchParam);

  const handleClick = () => {
    currentSearchParams.delete('price');
    router.push(`${pathname}?${currentSearchParams}`);
  };
  return (
    <div className="mt-3 pb-4">
      <div className="flex gap-2">
        <h1 className="mb-2 font-medium">Price</h1>
        {searchParams.price && (
          <div title="Clear Price Filter">
            <svg
              aria-label="Clear Price Filter"
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
      <div className="flex border rounded text-center">
        {prices.map(price => (
          <Link
            key={price}
            href={{
              pathname: '/search',
              query: { ...searchParams, price },
            }}
            className={
              searchParams.price == price
                ? '[&:last-child]:border-0 w-full border-r text-reg  p-2 bg-red-200'
                : '[&:last-child]:border-0 w-full border-r text-reg  p-2'
            }
          >
            <Price price={price} />
          </Link>
        ))}
      </div>
    </div>
  );
}
