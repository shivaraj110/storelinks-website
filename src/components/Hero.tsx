import React from 'react';
import { Chrome } from 'lucide-react';

export function Hero() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Your Personal
          <span className="text-indigo-600"> Link Library</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Save, organize, and share your favorite links. Create personal collections and discover curated link directories from the community.
        </p>
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition">
            <Chrome className="w-5 h-5" />
            <span>Add to Chrome - It's Free</span>
          </button>
          <div className="flex items-center space-x-1">
            <span className="text-yellow-400">★★★★★</span>
            <span className="text-sm text-gray-600">4.9/5 rating</span>
          </div>
        </div>
      </div>
      <div className="md:w-1/2">
        <img
          src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=800&q=80"
          alt="Link Organization"
          className="rounded-lg shadow-2xl"
        />
      </div>
    </div>
  );
}