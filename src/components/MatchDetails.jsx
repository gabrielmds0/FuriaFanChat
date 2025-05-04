import React, { useState, useEffect } from 'react';
import { ArrowLeft, Youtube, BarChart2 } from 'lucide-react';
import { getMatchStats, getMatchHighlights, getMatchHistory } from '../services/matchDetailsService';

const MatchDetails = ({ matchId, onBack }) => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('details');
  const [matchHistory, setMatchHistory] = useState([]);

  useEffect(() => {
    if (matchId) {
      setLoading(true);
      
      // Carregar estatísticas da partida
      const matchStats = getMatchStats(matchId);
      setStats(matchStats);
      
      // Carregar histórico de confrontos (assumindo que temos os IDs das equipes)
      if (matchStats) {
        const history = getMatchHistory(matchStats.team1.id, matchStats.team2.id);
        setMatchHistory(history);
      }
      
      setLoading(false);
    }
  }, [matchId]);

  const handleWatchHighlights = () => {
    const highlightsUrl = getMatchHighlights(matchId);
    if (highlightsUrl) {
      window.open(highlightsUrl, '_blank');
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col h-full bg-[#0f172a] text-white p-4">
        <div className="flex items-center animate-pulse">
          <div className="w-4 h-4 bg-white rounded-full mr-2"></div>
          <div className="w-4 h-4 bg-white rounded-full mr-2"></div>
          <div className="w-4 h-4 bg-white rounded-full"></div>
        </div>
      </div>
    );
  }

  if (!stats) {
    return (
      <div className="flex flex-col h-full bg-[#0f172a] text-white p-4">
        <div className="flex items-center mb-4">
          <button onClick={onBack} className="text-white flex items-center">
            <ArrowLeft size={16} className="mr-2" />
            <span>Voltar</span>
          </button>
        </div>
        <div className="p-4 bg-[#1e293b] rounded">
          <p>Não foi possível carregar os detalhes desta partida.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-[#0f172a] text-white">
      <div className="p-4">
        <div className="flex items-center mb-4">
          <button onClick={onBack} className="text-white flex items-center">
            <ArrowLeft size={16} className="mr-2" />
            <span>Voltar</span>
          </button>
        </div>
        
        {/* Cabeçalho da partida */}
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">
            {stats.team1.name} {stats.result.split('-')[0]}-{stats.result.split('-')[1]} {stats.team2.name}
          </h2>
          <div className="text-gray-400 flex items-center">
            <span>{new Date(stats.date).toLocaleDateString('pt-BR')}</span>
            <span className="mx-2">•</span>
            <span>Mapa: {stats.map}</span>
          </div>
        </div>
        
        {/* Botões de ação */}
        <div className="flex flex-wrap gap-2 mb-4">
          <button
            onClick={handleWatchHighlights}
            className="flex items-center bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
          >
            <Youtube size={16} className="mr-2" />
            Ver highlights
          </button>
          <button
            onClick={() => setActiveTab('stats')}
            className={`flex items-center px-4 py-2 rounded transition-colors ${
              activeTab === 'stats' 
                ? 'bg-blue-600 text-white' 
                : 'bg-[#1e293b] text-white hover:bg-[#2d3a4f]'
            }`}
          >
            <BarChart2 size={16} className="mr-2" />
            Estatísticas completas
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className={`flex items-center px-4 py-2 rounded transition-colors ${
              activeTab === 'history' 
                ? 'bg-blue-600 text-white' 
                : 'bg-[#1e293b] text-white hover:bg-[#2d3a4f]'
            }`}
          >
            Histórico FURIA vs {stats.team1.name === 'FURIA' ? stats.team2.name : stats.team1.name}
          </button>
        </div>
        
        {/* Conteúdo da tab ativa */}
        {activeTab === 'details' && (
          <div className="bg-[#1e293b] p-4 rounded">
            <p className="mb-4">{stats.team1.name} {stats.result} {stats.team2.name} - ESL Pro League Season 21 ({new Date(stats.date).toLocaleDateString('pt-BR')}) Mapa: {stats.map}</p>
            <p className="mb-4">
              Destaques: KSCERATO ({stats.team1.players.find(p => p.name === "KSCERATO").kills}-{stats.team1.players.find(p => p.name === "KSCERATO").deaths}, {stats.team1.players.find(p => p.name === "KSCERATO").rating} rating), 
              YEKINDAR ({stats.team1.players.find(p => p.name === "YEKINDAR").kills}-{stats.team1.players.find(p => p.name === "YEKINDAR").deaths}, {stats.team1.players.find(p => p.name === "YEKINDAR").rating} rating)
            </p>
            <p>
              A FURIA começou bem como CT mas não conseguiu fechar o mapa no lado terrorista, perdendo por {stats.result}.
            </p>
          </div>
        )}
        
        {activeTab === 'stats' && (
          <div className="bg-[#1e293b] p-4 rounded">
            <h3 className="text-lg font-bold mb-3">Estatísticas dos Jogadores</h3>
            
            <div className="mb-4">
              <h4 className="font-semibold mb-2">{stats.team1.name}</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-2">Jogador</th>
                      <th className="text-right py-2">K</th>
                      <th className="text-right py-2">D</th>
                      <th className="text-right py-2">ADR</th>
                      <th className="text-right py-2">Rating</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stats.team1.players.map((player, index) => (
                      <tr key={index} className="border-b border-gray-700">
                        <td className="py-2">{player.name}</td>
                        <td className="text-right py-2">{player.kills}</td>
                        <td className="text-right py-2">{player.deaths}</td>
                        <td className="text-right py-2">{player.adr.toFixed(1)}</td>
                        <td className="text-right py-2">{player.rating.toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">{stats.team2.name}</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-2">Jogador</th>
                      <th className="text-right py-2">K</th>
                      <th className="text-right py-2">D</th>
                      <th className="text-right py-2">ADR</th>
                      <th className="text-right py-2">Rating</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stats.team2.players.map((player, index) => (
                      <tr key={index} className="border-b border-gray-700">
                        <td className="py-2">{player.name}</td>
                        <td className="text-right py-2">{player.kills}</td>
                        <td className="text-right py-2">{player.deaths}</td>
                        <td className="text-right py-2">{player.adr.toFixed(1)}</td>
                        <td className="text-right py-2">{player.rating.toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'history' && (
          <div className="bg-[#1e293b] p-4 rounded">
            <h3 className="text-lg font-bold mb-3">
              Histórico FURIA vs {stats.team1.name === 'FURIA' ? stats.team2.name : stats.team1.name}
            </h3>
            
            {matchHistory.length === 0 ? (
              <p>Nenhum confronto anterior encontrado.</p>
            ) : (
              <div className="space-y-3">
                {matchHistory.map((match, index) => (
                  <div key={index} className="border-b border-gray-700 pb-3">
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="font-semibold">
                          {match.team1.name} {match.result.team1}-{match.result.team2} {match.team2.name}
                        </span>
                      </div>
                      <div className="text-sm text-gray-400">
                        {new Date(match.date).toLocaleDateString('pt-BR')}
                      </div>
                    </div>
                    <div className="text-sm text-gray-400">
                      {match.event.name} - Mapa: {match.map}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MatchDetails;