import React from 'react';
import { Calendar, Users, Info, ChevronDown } from 'lucide-react';
import { formatDate, getTimeUntilMatch } from '../services/hltvService';

const Sidebar = ({ isOpen, nextMatch, players, news }) => {
  // ID do time FURIA
  const FURIA_TEAM_ID = 8297;
  
  return (
    <div className={`${isOpen ? 'block' : 'hidden'} md:block bg-[#0a0e17] text-white w-full md:w-64 flex-shrink-0 overflow-y-auto absolute md:relative z-10 h-full`}>
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4 text-white">FURIA CS</h2>
        
        {/* Próximo Jogo */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold mb-2 flex items-center text-white uppercase">
            <Calendar size={16} className="mr-2" />
            Próximo Jogo
          </h3>
          {nextMatch ? (
            <div className="bg-[#121824] p-3 rounded">
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-white">
                  FURIA vs {nextMatch.team1.id === FURIA_TEAM_ID ? nextMatch.team2.name : nextMatch.team1.name}
                </span>
                <span className="bg-furia-red text-white text-xs px-2 py-1 rounded">
                  {getTimeUntilMatch(nextMatch.date)}
                </span>
              </div>
              <div className="text-sm text-gray-400">{nextMatch.event.name}</div>
              <div className="text-sm text-gray-400">{formatDate(nextMatch.date)}</div>
            </div>
          ) : (
            <div className="bg-[#121824] p-3 rounded">
              <p className="text-sm text-gray-400">Nenhuma partida agendada</p>
            </div>
          )}
        </div>
        
        {/* Jogadores Destaque */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold mb-2 flex items-center text-white uppercase">
            <Users size={16} className="mr-2" />
            Jogadores Destaque
          </h3>
          <div className="space-y-2">
            {players.slice(0, 3).map(player => (
              <div key={player.id} className="flex items-center bg-[#121824] p-2 rounded">
                <div className="w-8 h-8 bg-[#1a2436] rounded-full overflow-hidden flex-shrink-0">
                  <img 
                    src={player.photo} 
                    alt={player.nickname}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '';
                    }}
                  />
                </div>
                <div className="ml-3">
                  <div className="font-semibold text-white">{player.nickname}</div>
                  <div className="text-xs text-gray-400">{player.role} • Rating: {player.stats.rating}</div>
                </div>
              </div>
            ))}
            
          </div>
        </div>
        
        {/* Últimas Notícias */}
        <div>
          <h3 className="text-sm font-semibold mb-2 flex items-center text-white uppercase">
            <Info size={16} className="mr-2" />
            Últimas Notícias
          </h3>
          <div className="space-y-2">
            {news.slice(0, 3).map(item => (
              <div key={item.id} className="bg-[#121824] p-2 rounded">
                <div className="text-sm text-white">{item.title}</div>
                <div className="text-xs text-gray-400">{formatDate(item.date)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;