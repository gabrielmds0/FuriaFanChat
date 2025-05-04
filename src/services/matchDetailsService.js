// src/services/matchDetailsService.js
import { mockRecentMatches } from '../data/mockData';

// Função para obter detalhes de uma partida específica por ID
export const getMatchDetails = (matchId) => {
  const match = mockRecentMatches.find(m => m.id === parseInt(matchId));
  
  if (!match) {
    console.error(`Partida com ID ${matchId} não encontrada`);
    return null;
  }
  
  return match;
};

// Função para obter o histórico de confrontos entre duas equipes
export const getMatchHistory = (team1Id, team2Id) => {
  const confrontos = mockRecentMatches.filter(match => 
    (match.team1.id === team1Id && match.team2.id === team2Id) || 
    (match.team1.id === team2Id && match.team2.id === team1Id)
  );
  
  return confrontos;
};

// Função para obter estatísticas detalhadas de uma partida
export const getMatchStats = (matchId) => {
  const match = getMatchDetails(matchId);
  
  if (!match) return null;
  
  // Aqui você pode adicionar estatísticas detalhadas da partida
  // Em um cenário real, estas viriam da API da HLTV ou similar
  return {
    matchId: match.id,
    map: match.map,
    date: match.date,
    result: `${match.result.team1}-${match.result.team2}`,
    team1: {
      id: match.team1.id,
      name: match.team1.name,
      totalKills: 85,
      totalDeaths: 82,
      averageADR: 74.3,
      firstKills: 12,
      clutchesWon: 3,
      players: [
        { name: "FalleN", kills: 18, deaths: 16, adr: 72.1, rating: 1.12 },
        { name: "KSCERATO", kills: 25, deaths: 19, adr: 95.2, rating: 1.31 },
        { name: "yuurih", kills: 15, deaths: 17, adr: 68.7, rating: 0.98 },
        { name: "YEKINDAR", kills: 22, deaths: 21, adr: 82.3, rating: 1.05 },
        { name: "MOLODOY", kills: 5, deaths: 9, adr: 53.2, rating: 0.76 }
      ]
    },
    team2: {
      id: match.team2.id,
      name: match.team2.name,
      totalKills: 82,
      totalDeaths: 85,
      averageADR: 71.8,
      firstKills: 14,
      clutchesWon: 4,
      players: [
        { name: "cadiaN", kills: 17, deaths: 16, adr: 69.8, rating: 1.06 },
        { name: "stavn", kills: 21, deaths: 17, adr: 85.3, rating: 1.24 },
        { name: "jabbi", kills: 15, deaths: 18, adr: 64.1, rating: 0.92 },
        { name: "TeSeS", kills: 14, deaths: 17, adr: 62.9, rating: 0.87 },
        { name: "sjuush", kills: 15, deaths: 17, adr: 77.1, rating: 1.01 }
      ]
    },
    roundsBreakdown: {
      firstHalf: [
        { round: 1, winner: "FURIA", type: "Bomb Defused" },
        { round: 2, winner: "FURIA", type: "CT Win" },
        { round: 3, winner: "FURIA", type: "CT Win" },
        // ... outros rounds
      ],
      secondHalf: [
        { round: 16, winner: "Heroic", type: "Bomb Planted" },
        { round: 17, winner: "Heroic", type: "T Win" },
        { round: 18, winner: "FURIA", type: "CT Win" },
        // ... outros rounds
      ]
    },
    highlightsUrl: "https://www.youtube.com/watch?v=exampleMatch"
  };
};

// Função para obter URL dos highlights de uma partida
export const getMatchHighlights = (matchId) => {
  const match = getMatchDetails(matchId);
  
  if (!match || !match.highlights) {
    // URL de fallback caso não tenha highlights específicos
    return "https://www.youtube.com/results?search_query=furia+cs+highlights";
  }
  
  return match.highlights;
};