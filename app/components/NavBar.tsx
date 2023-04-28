import Link from 'next/link';
import LoginGroup from './LoginGroup';

export default function NavBar() {
  return (
    <nav className="bg-white p-2 flex justify-between">
      <Link href="/" className="font-bold text-gray-700 text-2xl">
        OpenTable
      </Link>
      <div>
        <LoginGroup />
      </div>
    </nav>
  );
}
