'use client'
import { useRouter } from 'next/navigation'; 

export default function Home() {
  const router = useRouter();  

  const handleHostRoom = () => {
    router.push('/host-room');  
  };

  const handleJoinRoom = () => {
    router.push('/join-room');  
  };

  return (
    <div className="h-screen bg-gray-100 flex justify-center items-center">
      <div className="space-y-4 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome to Our App</h1>
        <div className="space-y-4">
          <button
            onClick={handleHostRoom}
            className="w-60 py-3 m-3 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
          >
            Host A Room
          </button>
          <button
            onClick={handleJoinRoom}
            className="w-60 py-3 m-3 bg-green-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-green-600 transition duration-300"
          >
            Join A Room
          </button>
        </div>
      </div>
    </div>
  );
}
