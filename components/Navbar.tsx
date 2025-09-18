'use client';

import { useRouter } from 'next/navigation';

export default function Navbar() {
  const router = useRouter();

  const handleHomeClick = () => {
    router.push('/'); // Navigate to the homepage
  };

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-lg font-semibold">
          <button onClick={handleHomeClick} className="hover:underline">
            Home
          </button>
        </div>

        {/* <div className="space-x-4">
          <button
            onClick={() => router.push('/join-room')}
            className="bg-green-500 px-4 py-2 rounded-lg hover:bg-green-600 transition"
          >
            Join a Room
          </button>
          <button
            onClick={() => alert('Host a Room functionality')}
            className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Host a Room
          </button>
        </div> */}
      </div>
    </nav>
  );
}
