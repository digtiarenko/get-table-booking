import NavBar from '../../components/NavBar';
import ReserveForm from './components/ReserveForm';
import ReserveHeader from './components/ReserveHeader';

export default function ReservationPage() {
  return (
    <main className="bg-gray-100 text-black min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <NavBar />
        <div className="border-t ">
          <div className="py-9 w-3/5 m-auto">
            <ReserveHeader />
            <ReserveForm />
          </div>
        </div>
      </main>
    </main>
  );
}
