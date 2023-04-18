import Link from 'next/link';
import NavBar from '../../components/NavBar';
import Description from './components/Description';
import Images from './components/Images';
import Rating from './components/Rating';
import ReservationCard from './components/ReservationCard';
import RestaurantHeader from './components/RestaurantHeader';
import RestaurantNavBar from './components/RestaurantNavBar';
import Reviews from './components/Reviews';
import Title from './components/Title';

export default function RestaurantDetails() {
  return (
    <main className="bg-gray-100 text-black min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <NavBar />
        <RestaurantHeader />
        <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
          <div className="bg-white w-[70%] rounded p-3 shadow">
            <RestaurantNavBar />
            <Title />
            <Rating />
            <Description />
            <Images />
            <Reviews />
          </div>
          <div className="w-[27%] relative text-reg">
            <ReservationCard />
          </div>
        </div>
      </main>
    </main>
  );
}
