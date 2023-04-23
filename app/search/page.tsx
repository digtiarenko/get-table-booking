import { PrismaClient } from '@prisma/client';
import SearchHeader from './components/SearchHeader';
import SearchRestaurantCard from './components/SearchRestaurantCard';
import SearchSideBar from './components/SearchSideBar';

const prisma = new PrismaClient();
const fetchRestaurantsByLocation = async (location: string | undefined) => {
  const select = {
    id: true,
    name: true,
    main_image: true,
    price: true,
    cuisine: true,
    location: true,
    slug: true,
  };

  if (!location) {
    return await prisma.restaurant.findMany({ select });
  }
  return await prisma.restaurant.findMany({
    where: {
      location: {
        name: { equals: location.toLocaleLowerCase() },
      },
    },
    select,
  });
};

export default async function Search({
  searchParams,
}: {
  searchParams: { location: string };
}) {
  const restaurants = await fetchRestaurantsByLocation(searchParams.location);
  return (
    <>
      <SearchHeader />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SearchSideBar />
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
