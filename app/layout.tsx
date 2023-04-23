import NavBar from './components/NavBar';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <main className="bg-gray-100 min-h-screen  w-100%">
          <div className="max-w-screen-2xl min-h-screen m-auto bg-white text-black">
            <NavBar />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
