import React from 'react';
import { Phone, MapPin, Clock, Tag } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-md w-full transform hover:scale-105 transition-transform duration-300">
        {/* Header avec logo */}
        <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-6 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
          <div className="relative z-10">
            <div className="w-24 h-24 mx-auto mb-4 bg-white rounded-full p-2 shadow-lg">
              <img 
                src="/image.jpg" 
                alt="Ramya Market Logo" 
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">RAMYA MARKET</h1>
            <div className="bg-yellow-400 text-black px-4 py-2 rounded-full inline-block font-bold text-lg animate-pulse">
              <Tag className="inline w-5 h-5 mr-2" />
              VENTE FLASH
            </div>
          </div>
        </div>

        {/* Date */}
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-4 text-center">
          <div className="flex items-center justify-center text-black font-bold text-xl">
            <Clock className="w-6 h-6 mr-2" />
            Samedi 5 Juillet
          </div>
        </div>

        {/* Offres */}
        <div className="p-6 space-y-4">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Offres Exceptionnelles !
          </h2>
          
          <div className="space-y-4">
            {/* Palazzo */}
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-4 rounded-xl border-l-4 border-pink-500 transform hover:scale-105 transition-transform">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-gray-800">Palazzo</span>
                <span className="text-2xl font-bold text-pink-600">2 000F</span>
              </div>
            </div>

            {/* Jeans */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-xl border-l-4 border-blue-500 transform hover:scale-105 transition-transform">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-gray-800">Jeans</span>
                <span className="text-2xl font-bold text-blue-600">2 000F</span>
              </div>
            </div>

            {/* Pack 3 pantalons */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl border-l-4 border-green-500 transform hover:scale-105 transition-transform">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-gray-800">3 Pantalons</span>
                <span className="text-2xl font-bold text-green-600">5 000F</span>
              </div>
              <div className="text-sm text-green-700 mt-1 font-medium">
                Économisez 1 000F !
              </div>
            </div>
          </div>
        </div>

        {/* Contact et localisation */}
        <div className="bg-gray-50 p-6 space-y-4">
          <div className="flex items-center justify-center space-x-2 text-gray-800">
            <Phone className="w-5 h-5 text-green-600" />
            <span className="font-bold text-lg">64 95 35 35</span>
          </div>
          
          <div className="flex items-center justify-center space-x-2 text-gray-700 text-center">
            <MapPin className="w-5 h-5 text-red-500 flex-shrink-0" />
            <span className="text-sm">
              Tampouy, non loin de l'école Avé Maria
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-4 text-center">
          <p className="text-white font-semibold">
            Quantités limitées - Premier arrivé, premier servi !
          </p>
          <div className="mt-2 text-pink-200 text-sm">
            Partagez cette offre avec vos amis ! 💕
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;