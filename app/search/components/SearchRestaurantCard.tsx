import Link from 'next/link';
import Price from '../../components/Price';
import Stars from '../../components/Stars';
import { IRestaurantCard } from '../../page';
import { calculateReviewRating } from '../../utils/calculateReviewRating';

export default function SearchRestaurantCard({
  restaurant,
}: {
  restaurant: IRestaurantCard;
}) {
  const renderRating = () => {
    const rating = calculateReviewRating(restaurant.reviews);
    if (rating > 4) return 'Awesome';
    if (rating > 3) return 'Good';
    if (rating > 2) return 'Average';
    else return 'Not Rated Yet';
  };

  return (
    <div className="border-b flex items-center px-2 py-4 ml-4">
      <img src={restaurant.main_image} alt="" className="w-44 h-32 rounded" />
      <div className="pl-5 ">
        <h2 className="text-3xl">{restaurant.name}</h2>
        <div className="flex items-start">
          <Stars reviews={restaurant.reviews} />
          <p className="ml-2 text-sm">{renderRating()}</p>
        </div>
        <div className="mb-4">
          <div className="font-light flex text-reg">
            <Price price={restaurant.price} />
            <p className="mr-4 ml-3 capitalize">{restaurant.cuisine.name}</p>
            <p className="mr-4 capitalize">{restaurant.location.name}</p>
          </div>
        </div>
        <div className="text-red-600">
          <Link href={`/restaurant/${restaurant.slug}`}>
            View more information
          </Link>
        </div>
      </div>
    </div>
  );
}
