import React, { useState, useEffect } from 'react';
import { MessageCircle, Calendar, Users, Newspaper } from 'lucide-react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import MatchCard from './components/MatchCard';
import PlayerCard from './components/PlayerCard';
import NewsCard from './components/NewsCard';
import { getRecentMatches, getNextMatches } from './services/hltvService';
import { mockPlayers, mockNews } from './data/mockData';

function App() {
  const [activeTab, setActiveTab] = useState('chat');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [recentMatches, setRecentMatches] = useState([]);
  const [nextMatches, setNextMatches] = useState([]);
  
  useEffect(() => {
    // Carregar dados ao iniciar a aplicação
    const fetchData = async () => {
      const recentMatchesData = await getRecentMatches();
      const nextMatchesData = await getNextMatches();
      
      setRecentMatches(recentMatchesData);
      setNextMatches(nextMatchesData);
    };
    
    fetchData();
  }, []);
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
  return (
    <div className="flex flex-col h-screen bg-[#121824] text-white">
      <Header toggleSidebar={toggleSidebar} nextMatch={nextMatches[0]} />
      
      <div className="flex flex-1 overflow-hidden">
        <Sidebar 
          isOpen={isSidebarOpen} 
          nextMatch={nextMatches[0]} 
          players={mockPlayers} 
          news={mockNews} 
        />
        
        <div className="flex-1 flex flex-col">
          {/* Tabs */}
          <div className="bg-[#1a2436] p-0 flex">
            <button 
              className={`px-4 py-2 flex items-center ${activeTab === 'chat' ? 'bg-[#121824] text-white border-b-2 border-furia-red' : 'text-gray-400 hover:text-white'}`}
              onClick={() => setActiveTab('chat')}
            >
              <MessageCircle size={18} className="mr-2" />
              <span>Chat</span>
            </button>
            <button 
              className={`px-4 py-2 flex items-center ${activeTab === 'matches' ? 'bg-[#121824] text-white border-b-2 border-furia-red' : 'text-gray-400 hover:text-white'}`}
              onClick={() => setActiveTab('matches')}
            >
              <Calendar size={18} className="mr-2" />
              <span>Partidas</span>
            </button>
            <button 
              className={`px-4 py-2 flex items-center ${activeTab === 'team' ? 'bg-[#121824] text-white border-b-2 border-furia-red' : 'text-gray-400 hover:text-white'}`}
              onClick={() => setActiveTab('team')}
            >
              <Users size={18} className="mr-2" />
              <span>Time</span>
            </button>
            <button 
              className={`px-4 py-2 flex items-center ${activeTab === 'news' ? 'bg-[#121824] text-white border-b-2 border-furia-red' : 'text-gray-400 hover:text-white'}`}
              onClick={() => setActiveTab('news')}
            >
              <Newspaper size={18} className="mr-2" />
              <span>Notícias</span>
            </button>
          </div>
          
          {/* Conteúdo da Tab */}
          <div className="flex-1 overflow-y-auto bg-[#121824]">
            {activeTab === 'chat' && <Chat />}
            
            {activeTab === 'matches' && (
              <div className="p-4 space-y-6">
                <div>
                  <h2 className="text-xl font-bold mb-4 text-white">Próximas Partidas</h2>
                  <div className="space-y-4">
                    {nextMatches.map(match => (
                      <MatchCard key={match.id} match={match} isFuture={true} />
                    ))}
                    {nextMatches.length === 0 && (
                      <p className="text-gray-400">Nenhuma partida agendada.</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <h2 className="text-xl font-bold mb-4 text-white">Resultados Recentes</h2>
                  <div className="space-y-4">
                    {recentMatches.map(match => (
                      <MatchCard key={match.id} match={match} isFuture={false} />
                    ))}
                    {recentMatches.length === 0 && (
                      <p className="text-gray-400">Nenhum resultado recente disponível.</p>
                    )}
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'team' && (
              <div className="p-4">
                <h2 className="text-xl font-bold mb-4 text-white">Elenco Atual</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {mockPlayers.map(player => (
                    <PlayerCard key={player.id} player={player} />
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === 'news' && (
              <div className="p-4">
                <h2 className="text-xl font-bold mb-4 text-white">Últimas Notícias</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {mockNews.map(news => (
                    <NewsCard key={news.id} news={news} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;