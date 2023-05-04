import prisma from '../../client/prisma';
import SearchHeader from './components/SearchHeader';
import SearchRestaurantCard from './components/SearchRestaurantCard';
import SearchSideBar from './components/SearchSideBar';

export interface ISearchParams {
  location?: string;
  cuisine?: string;
  price?: string;
}
const fetchRestaurantsByLocation = async (searchParams: ISearchParams) => {
  const where: any = {};

  if (searchParams.location) {
    const location = {
      name: { equals: searchParams.location.toLocaleLowerCase() },
    };
    where.location = location;
  }
  if (searchParams.cuisine) {
    const cuisine = {
      name: { equals: searchParams.cuisine.toLocaleLowerCase() },
    };
    where.cuisine = cuisine;
  }
  if (searchParams.price) {
    const price = {
      equals: searchParams.price,
    };
    where.price = price;
  }
  console.log('searchParams', searchParams);
  console.log('where', where);

  const select = {
    id: true,
    name: true,
    main_image: true,
    price: true,
    cuisine: true,
    location: true,
    slug: true,
    reviews: true,
  };

  return await prisma.restaurant.findMany({
    where,
    select,
  });
};

const fetchLocations = async () => {
  return prisma.location.findMany({ select: { name: true, id: true } });
};
const fetchCuisines = async () => {
  return await prisma.cuisine.findMany({ select: { name: true, id: true } });
};

export default async function Search({
  searchParams,
}: {
  searchParams: ISearchParams;
}) {
  const restaurants = await fetchRestaurantsByLocation(searchParams);
  const locations = await fetchLocations();
  const cuisines = await fetchCuisines();

  return (
    <>
      <SearchHeader />
      <p>{JSON.stringify(searchParams)}</p>

      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SearchSideBar
          locations={locations}
          cuisines={cuisines}
          searchParams={searchParams}
        />
        <div className="w-5/6">
          {restaurants.length ? (
            restaurants.map(restaurant => (
              <SearchRestaurantCard
                key={restaurant.id}
                restaurant={restaurant}
              />
            ))
          ) : (
            <p>No restaurants in this area</p>
          )}
        </div>
      </div>
    </>
  );
}
