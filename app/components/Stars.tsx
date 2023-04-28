import FullStar from '../../public/icons/full-star.png';
import HalfStar from '../../public/icons/half-star.png';
import EmptyStar from '../../public/icons/empty-star.png';
import Image from 'next/image';
import { Review } from '@prisma/client';
import { calculateReviewRating } from '../utils/calculateReviewRating';

export default function Stars({
  reviews = [],
  rating,
}: {
  reviews?: Review[];
  rating?: number;
}) {
  const rate = rating || calculateReviewRating(reviews);

  const renderStars = () => {
    const stars = [];

    for (let i = 0; i < 5; i++) {
      const diff = parseFloat((rate - i).toFixed(1));
      if (diff >= 1) stars.push(FullStar);
      else if (diff >= 0.5) {
        stars.push(HalfStar);
      } else if (diff < 0.5) {
        stars.push(EmptyStar);
      }
    }
    return stars.map((star,i )=> (
      <Image src={star} alt="" className="w-4 h-4 mr-1" key={i} />
    ));
  };
  return <div className="flex items-center">{renderStars()} </div>;
}
