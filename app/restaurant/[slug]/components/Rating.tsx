import { Review } from '@prisma/client';
import Stars from '../../../components/Stars';
import { calculateReviewRating } from '../../../utils/calculateReviewRating';

export default function Rating({ reviews }: { reviews: Review[] }) {
  return (
    <div className="flex items-end">
      <div className="ratings mt-2 flex items-center">
        <Stars reviews={reviews} />
        <p className="text-reg ml-3">
          {calculateReviewRating(reviews).toFixed(1)}
        </p>
      </div>
      <div>
        <p className="text-reg ml-4">
          {reviews.length} Review{reviews.length > 0 && 's'}
        </p>
      </div>
    </div>
  );
}
