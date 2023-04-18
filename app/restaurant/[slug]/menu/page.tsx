import NavBar from '../../../components/NavBar';
import RestaurantHeader from '../components/RestaurantHeader';
import RestaurantNavBar from '../components/RestaurantNavBar';
import Menu from './components/Menu';

export default function RestaurantMenuPage() {
  return (
    <main className="bg-gray-100 text-black min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <NavBar />
        <RestaurantHeader />
        <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
          <div className="bg-white w-[100%] rounded p-3 shadow">
            <RestaurantNavBar />
            <Menu />
          </div>
        </div>
      </main>
    </main>
  );
}
