import { PRICE } from '@prisma/client';
import React from 'react';

export default function Price({ price }: { price: PRICE }) {
  const rederPrice = () => {
    switch (price) {
      case PRICE.CHEAP:
        return (
          <>
            <span className="font-semibold text-green-400">$$</span>
            <span className="text-gray-400">$$</span>
          </>
        );

      case PRICE.REGULAR:
        return (
          <>
            <span className="font-semibold text-yellow-400">$$$</span>
            <span className="text-gray-400">$</span>
          </>
        );
      case PRICE.EXPENSIVE:
        return <span className=" font-semibold text-red-400">$$$$</span>;

      default:
        return <span className="text-gray-400">$$$$</span>;
    }
  };

  return <p className="flex justify-center">{rederPrice()}</p>;
}
