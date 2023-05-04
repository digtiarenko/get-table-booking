This is a [Next.js](https://nextjs.org/) project bootstrapped with
[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Hey, I think there's a bug in this code, when we have multiple tables already
booked on the same date and time.

I had to change it to this for it to work:

    bookings.forEach((booking) => {
    let str = booking.booking_time.toISOString();
    if (bookingsLookup[str]) {
      bookingsLookup[str] = {
        ...bookingsLookup[str],
        ...booking.tables.reduce((acc, curr) => {
          return { ...acc, [curr.table_id]: true };
        }, {}),
      };
    } else {
      bookingsLookup[str] = booking.tables.reduce((acc, curr) => {
        return { ...acc, [curr.table_id]: true };
      }, {});
    }

});
