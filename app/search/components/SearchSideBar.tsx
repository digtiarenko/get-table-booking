import CuisineWidget from './CuisineWidget';
import { ISearchParams } from '../page';
import PriceWidget from './PriceWidget';
import RegionWidget from './RegionWidget';

export interface ILocations {
  id: number;
  name: string;
}
export interface ICuisines {
  id: number;
  name: string;
}

export default function SearchSideBar({
  locations,
  cuisines,
  searchParams,
}: {
  locations: ILocations[];
  cuisines: ICuisines[];
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
