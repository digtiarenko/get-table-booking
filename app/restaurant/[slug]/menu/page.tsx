import { PrismaClient } from '@prisma/client';
import RestaurantNavBar from '../components/RestaurantNavBar';
import Menu from './components/Menu';

const prisma = new PrismaClient();
const fetchMenuItems = async (slug: string) => {
  const restaurant = await prisma.restaurant.findUnique({
    where: { slug },
    select: {
      items: true,
    },
  });
  if (!restaurant) throw new Error('Restaurant not found');
  return restaurant.items;
};

export default async function RestaurantMenuPage({
  params,
}: {
  params: { slug: string };
}) {
  const menu = await fetchMenuItems(params.slug);
  return (
    <div className="bg-white w-[100%]  rounded p-3 shadow">
      <RestaurantNavBar slug={params.slug} />
      <Menu menu={menu} />
    </div>
  );
}
