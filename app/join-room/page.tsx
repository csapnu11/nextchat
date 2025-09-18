'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function JoinRoom() {
  const [name, setName] = useState<string>('');
  const [roomId, setRoomId] = useState<string>('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Joining room ${roomId} as ${name}`);
    // router.push(`/room/${roomId}`);
  };

  return (
    <div className="h-screen bg-gray-100 flex justify-center items-start">
      <div className="w-full max-w-sm space-y-4 text-center">
        <h1 className="text-3xl font-bold text-gray-800 my-6">Join an Existing Room</h1>

        <form onSubmit={handleSubmit} className="space-y-4 text-black">
          <div className="text-left">
            <label htmlFor="name" className="block text-sm text-gray-600">Your Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="text-left">
            <label htmlFor="roomId" className="block text-sm text-gray-600">Room ID</label>
            <input
              type="text"
              id="roomId"
              value={roomId}
              onChange={(e) => setRoomId(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Room ID"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-green-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-green-600 transition duration-300"
          >
            Join Room
          </button>
        </form>
      </div>
    </div>
  );
}
