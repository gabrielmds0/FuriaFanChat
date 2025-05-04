import React from 'react';
import { Clock, Calendar, Trophy, ExternalLink } from 'lucide-react';
import { formatDate, getTimeUntilMatch } from '../services/hltvService';

const MatchCard = ({ match, isFuture }) => {
  // ID do time FURIA
  const FURIA_TEAM_ID = 8297;
  
  // Determina se FURIA é o time 1 ou 2
  const isFuriaTeam1 = match.team1.id === FURIA_TEAM_ID;
  
  // Nome do time adversário
  const opponentTeam = isFuriaTeam1 ? match.team2 : match.team1;
  
  // Exibe resultado ou formato da partida (dependendo se é passado ou futuro)
  const resultOrFormat = isFuture ? (
    <div className="bg-[#1a2436] px-3 py-1 rounded text-sm text-white">
      {match.format.toUpperCase()}
    </div>
  ) : (
    <div className={`px-3 py-1 rounded text-sm text-white ${
      // Verifica se FURIA ganhou
      (isFuriaTeam1 && match.result.team1 > match.result.team2) || 
      (!isFuriaTeam1 && match.result.team2 > match.result.team1) 
        ? 'bg-green-600' 
        : 'bg-red-600'
    }`}>
      {isFuriaTeam1 
        ? `${match.result.team1} - ${match.result.team2}`
        : `${match.result.team2} - ${match.result.team1}`
      }
    </div>
  );

  return (
    <div className="border border-[#2e3a4f] rounded-lg p-4 bg-[#151e2e] shadow-md">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="font-bold text-lg text-white">FURIA vs {opponentTeam.name}</h3>
          <div className="text-sm text-gray-400">{match.event.name}</div>
        </div>
        {resultOrFormat}
      </div>
      
      <div className="flex items-center text-sm text-gray-400 mb-3">
        <Calendar size={14} className="mr-1" />
        {formatDate(match.date)}
        
        {isFuture && (
          <div className="ml-4 bg-furia-red text-white px-2 py-0.5 rounded text-xs">
            {getTimeUntilMatch(match.date)}
          </div>
        )}
      </div>
      
      {!isFuture && match.map && (
        <div className="bg-[#1a2436] p-2 rounded mb-3 text-sm text-white">
          <span className="font-semibold">Mapa:</span> {match.map}
        </div>
      )}
      
      {isFuture && match.maps && match.maps.length > 0 && (
        <div className="bg-[#1a2436] p-2 rounded mb-3 text-sm text-white">
          <span className="font-semibold">Mapas possíveis:</span> {match.maps.join(', ')}
        </div>
      )}
      
      <div className="flex justify-between mt-2">
        {!isFuture && match.highlights && (
          <a 
            href={match.highlights} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-furia-red text-sm font-semibold flex items-center hover:underline"
          >
            <Trophy size={14} className="mr-1" />
            Highlights
          </a>
        )}
        
        {isFuture && (
          <button className="text-furia-red text-sm font-semibold flex items-center hover:underline">
            <Clock size={14} className="mr-1" />
            Lembrete
          </button>
        )}
        
        <button className="text-gray-400 text-sm flex items-center hover:text-white">
          <ExternalLink size={14} className="mr-1" />
          Detalhes
        </button>
      </div>
    </div>
  );
};

export default MatchCard;