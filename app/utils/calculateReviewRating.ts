import { Review } from '@prisma/client';

export const calculateReviewRating = (reviews: Review[]) => {
  if (reviews.length === 0) return 0;
  return (
    reviews.reduce((acc, review) => {
      return acc + review.rating;
    }, 0) / reviews.length
  );
};
