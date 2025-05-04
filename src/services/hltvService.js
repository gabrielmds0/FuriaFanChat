import { mockRecentMatches, mockNextMatches, mockPlayers, mockNews } from '../data/mockData';

// ID do time FURIA
const FURIA_TEAM_ID = 8297;

// Função para formatar data para exibição amigável
export const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date);
};

// Função para calcular tempo restante até a partida
export const getTimeUntilMatch = (timestamp) => {
  const now = new Date();
  const matchDate = new Date(timestamp);
  const diffMs = matchDate - now;
  
  if (diffMs <= 0) {
    return 'Agora';
  }
  
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const diffHours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
  
  if (diffDays > 0) {
    return `${diffDays}d ${diffHours}h`;
  } else if (diffHours > 0) {
    return `${diffHours}h ${diffMinutes}m`;
  } else {
    return `${diffMinutes}m`;
  }
};

// Função para obter resultados recentes da FURIA
export const getRecentMatches = async () => {
  try {
    // Caso tenhamos acesso ao Node.js e à API HLTV real:
    // const { HLTV } = require('hltv');
    // const results = await HLTV.getResults({ teamIds: [FURIA_TEAM_ID], pages: 1 });
    // return results.slice(0, 5);
    
    // Como estamos em ambiente browser, usamos dados mockados:
    return mockRecentMatches;
  } catch (error) {
    console.error('Erro ao obter partidas recentes:', error);
    return mockRecentMatches;
  }
};

// Função para obter próximas partidas da FURIA
export const getNextMatches = async () => {
  try {
    // Caso tenhamos acesso ao Node.js e à API HLTV real:
    // const { HLTV } = require('hltv');
    // const matches = await HLTV.getMatches();
    // const furiaMatches = matches.filter(match => 
    //   (match.team1?.id === FURIA_TEAM_ID || match.team2?.id === FURIA_TEAM_ID)
    // );
    // return furiaMatches;
    
    // Como estamos em ambiente browser, usamos dados mockados:
    return mockNextMatches;
  } catch (error) {
    console.error('Erro ao obter próximas partidas:', error);
    return mockNextMatches;
  }
};

// Função para obter informações do time FURIA
export const getTeamInfo = async () => {
  try {
    
    // Como estamos em ambiente browser, retornamos dados mockados:
    return {
      id: FURIA_TEAM_ID,
      name: 'FURIA',
      logo: 'https://img-cdn.hltv.org/teamlogo/mvNQc4cOrrS9IlI-Vu7nqT.svg?ixlib=java-2.1.0&s=8fa55e6de812f3e8835350826c9fb379',
      location: 'Brazil',
      players: mockPlayers,
      recentResults: mockRecentMatches.map(match => ({
        enemyTeam: {
          name: match.team1.id === FURIA_TEAM_ID ? match.team2.name : match.team1.name,
          id: match.team1.id === FURIA_TEAM_ID ? match.team2.id : match.team1.id
        },
        result: match.result.team1 > match.result.team2 
          ? (match.team1.id === FURIA_TEAM_ID ? 'Won' : 'Lost')
          : (match.team1.id === FURIA_TEAM_ID ? 'Lost' : 'Won'),
        event: match.event.name
      }))
    };
  } catch (error) {
    console.error('Erro ao obter informações do time:', error);
    return {
      id: FURIA_TEAM_ID,
      name: 'FURIA',
      logo: 'https://img-cdn.hltv.org/teamlogo/mvNQc4cOrrS9IlI-Vu7nqT.svg?ixlib=java-2.1.0&s=8fa55e6de812f3e8835350826c9fb379',
      location: 'Brazil',
      players: mockPlayers
    };
  }
};

// Função para obter notícias relacionadas à FURIA
export const getNews = async () => {
  try {
    // Em um cenário real, poderíamos buscar notícias da API ou fazer scraping
    // Como estamos em ambiente simulado, usamos dados mockados:
    return mockNews;
  } catch (error) {
    console.error('Erro ao obter notícias:', error);
    return mockNews;
  }
};