import React from 'react';
import { Flag, Star } from 'lucide-react';

const PlayerCard = ({ player }) => {
  return (
    <div className="border border-[#2e3a4f] rounded-lg p-4 bg-[#151e2e] shadow-md">
      <div className="flex items-center">
        <div className="w-16 h-16 bg-[#1a2436] rounded-full overflow-hidden flex-shrink-0">
          <img 
            src={player.photo} 
            alt={player.nickname} 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://via.placeholder.com/100x100?text=Player';
            }}
          />
        </div>
        <div className="ml-4">
          <div className="font-bold text-lg text-white">{player.nickname}</div>
          <div className="text-sm text-gray-400">{player.name}</div>
          <div className="flex items-center text-xs text-gray-400 mt-1">
            <Flag size={12} className="mr-1" />
            {player.country}
            <span className="mx-2">•</span>
            {player.role}
          </div>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2 text-center text-sm">
        <div className="bg-[#1a2436] p-2 rounded">
          <div className="font-bold text-furia-red">{player.stats.rating}</div>
          <div className="text-xs text-gray-400">Rating</div>
        </div>
        <div className="bg-[#1a2436] p-2 rounded">
          <div className="font-bold text-furia-red">{player.stats.kd}</div>
          <div className="text-xs text-gray-400">K/D</div>
        </div>
        <div className="bg-[#1a2436] p-2 rounded">
          <div className="font-bold text-furia-red">{player.stats.headshots}</div>
          <div className="text-xs text-gray-400">HS%</div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;