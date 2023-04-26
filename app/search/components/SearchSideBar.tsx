import { Cuisine, Location, PRICE } from '@prisma/client';
import Link from 'next/link';
import CuisineWidget from './CuisineWidget';
import { ISearchParams } from '../page';
import PriceWidget from './PriceWidget';
import RegionWidget from './RegionWidget';

export default function SearchSideBar({
  locations,
  cuisines,
  searchParams,
}: {
  locations: Location[];
  cuisines: Cuisine[];
  searchParams: ISearchParams;
}) {
  return (
    <div className="w-1/5">
      <RegionWidget locations={locations} searchParams={searchParams} />
      <CuisineWidget cuisines={cuisines} searchParams={searchParams} />
      <PriceWidget searchParams={searchParams} />
    </div>
  );
}
