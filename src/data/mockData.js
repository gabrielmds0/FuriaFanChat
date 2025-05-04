// Dados mockados para o FURIA Fan Chat
export const mockRecentMatches = [
    {
      id: 1001,
      date: new Date('2025-05-02T15:00:00').getTime(),
      event: { name: 'ESL Pro League Season 21' },
      map: 'Ancient',
      team1: { name: 'FURIA', id: 8297 },
      team2: { name: 'Heroic', id: 7175 },
      result: { team1: 14, team2: 16 },
      highlights: 'https://www.youtube.com/watch?v=example1'
    },
    {
      id: 1002,
      date: new Date('2025-04-29T18:30:00').getTime(),
      event: { name: 'ESL Pro League Season 21' },
      map: 'Vertigo',
      team1: { name: 'ENCE', id: 4869 },
      team2: { name: 'FURIA', id: 8297 },
      result: { team1: 16, team2: 12 },
      highlights: 'https://www.youtube.com/watch?v=example2'
    },
    {
      id: 1003,
      date: new Date('2025-04-26T14:00:00').getTime(),
      event: { name: 'ESL Pro League Season 21' },
      map: 'Inferno',
      team1: { name: 'FURIA', id: 8297 },
      team2: { name: 'NAVI', id: 4608 },
      result: { team1: 13, team2: 16 },
      highlights: 'https://www.youtube.com/watch?v=example3'
    },
    {
      id: 1004,
      date: new Date('2025-04-20T12:15:00').getTime(),
      event: { name: 'BLAST Premier Spring Finals 2025' },
      map: 'Anubis',
      team1: { name: 'FURIA', id: 8297 },
      team2: { name: 'Team Liquid', id: 5973 },
      result: { team1: 16, team2: 14 },
      highlights: 'https://www.youtube.com/watch?v=example4'
    },
    {
      id: 1005,
      date: new Date('2025-04-15T20:00:00').getTime(),
      event: { name: 'BLAST Premier Spring Finals 2025' },
      map: 'Nuke',
      team1: { name: 'Astralis', id: 6665 },
      team2: { name: 'FURIA', id: 8297 },
      result: { team1: 16, team2: 11 },
      highlights: 'https://www.youtube.com/watch?v=example5'
    }
  ];
  
  export const mockNextMatches = [
    {
      id: 2001,
      date: new Date('2025-05-05T14:00:00').getTime(),
      stars: 4,
      live: false,
      event: { name: 'PGL Astana 2025' },
      team1: { name: 'FURIA', id: 8297 },
      team2: { name: 'G2', id: 5995 },
      format: 'bo3',
      maps: ['Mirage', 'Nuke', 'Inferno']
    },
    {
      id: 2002,
      date: new Date('2025-05-10T16:30:00').getTime(),
      stars: 3,
      live: false,
      event: { name: 'PGL Astana 2025' },
      team1: { name: 'NAVI', id: 4608 },
      team2: { name: 'FURIA', id: 8297 },
      format: 'bo3',
      maps: ['Ancient', 'Overpass', 'Vertigo']
    },
    {
      id: 2003,
      date: new Date('2025-05-13T20:00:00').getTime(),
      stars: 5,
      live: false,
      event: { name: 'ESL Pro League Season 21' },
      team1: { name: 'FURIA', id: 8297 },
      team2: { name: 'Vitality', id: 9565 },
      format: 'bo3',
      maps: ['Inferno', 'Anubis', 'Dust2']
    }
  ];
  
  export const mockPlayers = [
    {
      id: 3001,
      nickname: 'FalleN',
      name: 'Gabriel Toledo',
      country: 'Brazil',
      role: 'IGL/AWPer',
      stats: { rating: 1.19, kd: 1.21, maps: 146, headshots: '64.3%', age: 34 },
      photo: 'https://www.hltv.org/img/static/player/player_silhouette.png'
    },
    {
      id: 3002,
      nickname: 'KSCERATO',
      name: 'Kaike Cerato',
      country: 'Brazil',
      role: 'Rifler',
      stats: { rating: 1.23, kd: 1.27, maps: 215, headshots: '59.8%', age: 25 },
      photo: 'https://www.hltv.org/img/static/player/player_silhouette.png'
    },
    {
      id: 3003,
      nickname: 'yuurih',
      name: 'Yuri Santos',
      country: 'Brazil',
      role: 'Rifler',
      stats: { rating: 1.21, kd: 1.19, maps: 230, headshots: '61.2%', age: 24 },
      photo: 'https://www.hltv.org/img/static/player/player_silhouette.png'
    },
    {
      id: 3004,
      nickname: 'YEKINDAR',
      name: 'Mareks Gaļinskis',
      country: 'Latvia',
      role: 'Entry Fragger',
      stats: { rating: 1.17, kd: 1.15, maps: 187, headshots: '58.4%', age: 25 },
      photo: 'https://www.hltv.org/img/static/player/player_silhouette.png'
    },
    {
      id: 3005,
      nickname: 'MOLODOY',
      name: 'Danil Golubenko',
      country: 'Kazakhstan',
      role: 'Rifler',
      stats: { rating: 1.14, kd: 1.09, maps: 96, headshots: '62.7%', age: 19 },
      photo: 'https://www.hltv.org/img/static/player/player_silhouette.png'
    }
  ];
  
  export const mockNews = [
    {
      id: 4001,
      title: 'FURIA vence MIBR em clássico brasileiro na ESL Pro League',
      date: new Date('2025-04-28T18:45:00').getTime(),
      summary: 'FURIA supera MIBR por 2-0 em confronto direto, garantindo vaga nos playoffs.',
      image: 'https://example.com/news1.jpg',
      url: 'https://example.com/news1'
    },
    {
      id: 4002,
      title: 'YEKINDAR brilha na estreia pela FURIA',
      date: new Date('2025-04-25T12:15:00').getTime(),
      summary: 'Jogador letão marca 28 kills em seu primeiro mapa pela equipe brasileira.',
      image: 'https://example.com/news2.jpg',
      url: 'https://example.com/news2'
    },
    {
      id: 4003,
      title: 'FURIA anuncia bootcamp para o Major',
      date: new Date('2025-04-20T09:30:00').getTime(),
      summary: 'Equipe se prepara intensivamente para o PGL Astana 2025 em bootcamp na Europa.',
      image: 'https://example.com/news3.jpg',
      url: 'https://example.com/news3'
    },
    {
      id: 4004,
      title: 'MOLODOY completa transição para lineup principal da FURIA',
      date: new Date('2025-04-15T14:20:00').getTime(),
      summary: 'Jovem talento cazaque se adapta bem à equipe após primeiras semanas.',
      image: 'https://example.com/news4.jpg',
      url: 'https://example.com/news4'
    },
    {
      id: 4005,
      title: 'FalleN: "Nosso objetivo é ganhar o Major"',
      date: new Date('2025-04-10T16:45:00').getTime(),
      summary: 'IGL brasileiro reafirma ambição da FURIA para os próximos torneios internacionais.',
      image: 'https://example.com/news5.jpg',
      url: 'https://example.com/news5'
    }
  ];
  
  export const mockChatMessages = [
    {
      id: 'welcome',
      content: 'Bem-vindo ao FURIA Fan Chat! Como posso ajudar você hoje?',
      sender: 'bot',
      options: [
        { id: 'next-match', text: 'Qual a próxima partida?' },
        { id: 'recent-results', text: 'Resultados recentes' },
        { id: 'roster', text: 'Jogadores atuais' },
        { id: 'news', text: 'Últimas notícias' }
      ]
    },
    {
      id: 'next-match',
      content: 'A próxima partida da FURIA será contra G2 no dia 05/05/2025 às 14:00 na PGL Astana 2025. Série melhor de 3 mapas!',
      sender: 'bot',
      options: [
        { id: 'next-match-details', text: 'Mais detalhes' },
        { id: 'recent-results', text: 'Resultados recentes' },
        { id: 'who-g2', text: 'Quem é G2?' }
      ]
    },
    {
      id: 'next-match-details',
      content: 'Mapas prováveis: Mirage, Nuke e Inferno. A partida terá transmissão ao vivo nos canais oficiais da PGL e streamers parceiros da FURIA. Nosso histórico contra a G2 é de 3 vitórias e 4 derrotas nos últimos confrontos.',
      sender: 'bot',
      options: [
        { id: 'g2-lineup', text: 'Line-up da G2' },
        { id: 'furia-preparation', text: 'Como a FURIA está se preparando?' },
        { id: 'watch', text: 'Onde assistir?' }
      ]
    },
    {
      id: 'recent-results',
      content: 'Últimos resultados da FURIA:\n- FURIA 14-16 Heroic (ESL Pro League)\n- ENCE 16-12 FURIA (ESL Pro League)\n- FURIA 13-16 NAVI (ESL Pro League)\n- FURIA 16-14 Liquid (BLAST Premier)\n- Astralis 16-11 FURIA (BLAST Premier)',
      sender: 'bot',
      options: [
        { id: 'match-details-1001', text: 'Detalhes vs Heroic' },
        { id: 'match-details-1002', text: 'Detalhes vs ENCE' },
        { id: 'match-details-1003', text: 'Detalhes vs NAVI' }
      ]
    },
    {
      id: 'roster',
      content: 'Line-up atual da FURIA:\n- FalleN (IGL/AWPer)\n- KSCERATO (Rifler)\n- yuurih (Rifler)\n- YEKINDAR (Entry Fragger)\n- MOLODOY (Rifler)\n\nTécnico: guerri',
      sender: 'bot',
      options: [
        { id: 'player-details-3001', text: 'Estatísticas do FalleN' },
        { id: 'player-details-3002', text: 'Estatísticas do KSCERATO' },
        { id: 'player-details-3004', text: 'Estatísticas do YEKINDAR' }
      ]
    },
    {
      id: 'news',
      content: 'Últimas notícias da FURIA:\n- FURIA vence MIBR em clássico brasileiro na ESL Pro League (28/04)\n- YEKINDAR brilha na estreia pela FURIA (25/04)\n- FURIA anuncia bootcamp para o Major (20/04)\n- MOLODOY completa transição para lineup principal (15/04)',
      sender: 'bot',
      options: [
        { id: 'news-details-4001', text: 'Mais sobre a vitória contra MIBR' },
        { id: 'news-details-4002', text: 'Mais sobre YEKINDAR' },
        { id: 'news-details-4003', text: 'Mais sobre o bootcamp' }
      ]
    },
    {
      id: 'match-details-1001',
      content: 'FURIA 14-16 Heroic - ESL Pro League Season 21 (02/05/2025)\nMapa: Ancient\nDestaques: KSCERATO (25-19, 1.31 rating), YEKINDAR (22-21, 1.05 rating)\nA FURIA começou bem como CT mas não conseguiu fechar o mapa no lado terrorista, perdendo por 16-14.',
      sender: 'bot',
      options: [
        { id: 'highlights-1001', text: 'Ver highlights' },
        { id: 'stats-1001', text: 'Estatísticas completas' },
        { id: 'recent-results', text: 'Voltar aos resultados' }
      ]
    },
    {
      id: 'player-details-3001',
      content: 'FalleN (Gabriel Toledo)\nIdade: 34 anos\nNacionalidade: Brasil\nFunção: IGL/AWPer\nRating 2.0: 1.19\nK/D: 1.21\nHS%: 64.3%\nMaps jogados: 146\n\nCuriosidade: FalleN é conhecido como "The Godfather" do CS brasileiro.',
      sender: 'bot',
      options: [
        { id: 'fallen-highlights', text: 'Highlights recentes' },
        { id: 'fallen-achievements', text: 'Conquistas na carreira' },
        { id: 'roster', text: 'Voltar ao elenco' }
      ]
    },
    {
      id: 'news-details-4001',
      content: 'FURIA vence MIBR em clássico brasileiro na ESL Pro League (28/04/2025)\n\nA FURIA venceu a MIBR por 2-0 (16-10 na Inferno e 16-7 na Mirage) no clássico brasileiro da ESL Pro League. KSCERATO foi o destaque com 47 frags nos dois mapas. Com esse resultado, a FURIA garante vaga nos playoffs do torneio.',
      sender: 'bot',
      options: [
        { id: 'news', text: 'Voltar às notícias' },
        { id: 'read-full-4001', text: 'Ler matéria completa' },
        { id: 'esl-standings', text: 'Classificação da ESL Pro League' }
      ]
    },
    {
      id: 'who-g2',
      content: 'G2 Esports é uma organização europeia de esports. Seu time de CS2 atual é composto por NiKo, huNter-, m0NESY, HooXi e jks. Eles estão atualmente na posição #3 do ranking mundial da HLTV.',
      sender: 'bot',
      options: [
        { id: 'next-match', text: 'Voltar à próxima partida' },
        { id: 'g2-recent', text: 'Resultados recentes da G2' },
        { id: 'furia-vs-g2', text: 'Histórico FURIA vs G2' }
      ]
    }
  ];
  
  // Respostas do chatbot para palavras-chave específicas
  export const mockChatResponses = {
    'próxima partida': 'next-match',
    'próximo jogo': 'next-match',
    'quando': 'next-match',
    'contra quem': 'next-match',
    
    'resultados': 'recent-results',
    'últimos jogos': 'recent-results',
    'últimas partidas': 'recent-results',
    'desempenho': 'recent-results',
    
    'jogadores': 'roster',
    'elenco': 'roster',
    'lineup': 'roster',
    'time': 'roster',
    
    'notícias': 'news',
    'novidades': 'news',
    'acontecimentos': 'news',
    'atualizações': 'news',
    
    'fallen': 'player-details-3001',
    'kscerato': 'player-details-3002',
    'yuurih': 'player-details-3003',
    'yekindar': 'player-details-3004',
    'molodoy': 'player-details-3005',
    
    'horário': 'next-match',
    'transmissão': 'next-match-details',
    'assistir': 'next-match-details',
    'onde ver': 'next-match-details',
    
    'oi': 'welcome',
    'olá': 'welcome',
    'hey': 'welcome',
    'ajuda': 'welcome'
  };
  
  // Função original modificada para incluir logs de debug
export function getChatResponse(message) {
  console.log("getChatResponse chamada com:", message);
  message = message.toLowerCase();
  
  // Se a mensagem for um ID de opção conhecido, retornar diretamente
  const messageById = mockChatMessages.find(msg => msg.id === message);
  if (messageById) {
    console.log("Encontrada resposta direta para ID:", message);
    console.log("Conteúdo da resposta:", messageById);
    return messageById;
  }
  
  // Verificar palavras-chave no input do usuário
  for (const [keyword, responseId] of Object.entries(mockChatResponses)) {
    if (message.includes(keyword)) {
      const response = mockChatMessages.find(msg => msg.id === responseId);
      console.log(`Palavra-chave '${keyword}' encontrada, usando resposta ID: ${responseId}`);
      console.log("Conteúdo da resposta:", response);
      return response;
    }
  }
  
  // Resposta padrão se nenhuma palavra-chave for encontrada
  console.log("Nenhuma correspondência encontrada, retornando resposta padrão");
  const defaultResponse = {
    id: 'not-understood',
    content: "Desculpe, não entendi sua pergunta. Você pode perguntar sobre a próxima partida, resultados recentes, jogadores ou notícias da FURIA.",
    sender: 'bot',
    options: [
      { id: 'next-match', text: 'Próxima partida' },
      { id: 'recent-results', text: 'Resultados recentes' },
      { id: 'roster', text: 'Jogadores' },
      { id: 'news', text: 'Notícias' }
    ]
  };
  console.log("Conteúdo da resposta padrão:", defaultResponse);
  return defaultResponse;
}