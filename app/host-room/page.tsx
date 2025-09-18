'use client';

import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

export default function HostRoom() {
  const [roomName, setRoomName] = useState<string>('');
  const [roomId, setRoomId] = useState<string>('');

  useEffect(() => {
    setRoomId(nanoid(10));
  }, []);

  const handleRoomNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRoomName(e.target.value);
  };

  return (
    <div className="h-screen bg-gray-100 flex justify-center items-start">
      <div className="w-full max-w-sm space-y-4 text-center">
        <h1 className="text-3xl font-bold text-gray-800 my-6">Host a New Room</h1>

        <div className="space-y-4">
          <div className="text-gray-500 text-sm">
            <strong>Room ID (Unique ID):</strong> {roomId}
          </div>

          <input
            type="text"
            value={roomName}
            onChange={handleRoomNameChange}
            className="text-black w-full p-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Room Name"
          />

          <button
            onClick={() => alert(`Room ${roomName} created with ID: ${roomId}`)}
            className="w-full py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
          >
            Create Room
          </button>
        </div>
      </div>
    </div>
  );
}
