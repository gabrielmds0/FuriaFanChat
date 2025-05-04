import React, { useState, useEffect, useRef } from 'react';
import { Send, MessageSquare } from 'lucide-react';
import { getChatResponse } from '../data/mockData';
import MatchDetails from './MatchDetails';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [activeMatchId, setActiveMatchId] = useState(null);
  const [viewMode, setViewMode] = useState('chat'); // 'chat', 'match-details', 'match-stats', 'match-history'
  const messagesEndRef = useRef(null);

  useEffect(() => {
    // Adiciona a mensagem de boas-vindas ao iniciar
    try {
      const welcomeMessage = getChatResponse('oi');
      
      setMessages([
        {
          id: Date.now(),
          content: welcomeMessage.content,
          sender: 'bot',
          options: welcomeMessage.options
        }
      ]);
    } catch (error) {
      console.error("Erro ao carregar mensagem de boas-vindas:", error);
      // Mensagem de fallback caso a API falhe
      setMessages([
        {
          id: Date.now(),
          content: "Bem-vindo ao FURIA Fan Chat! Como posso ajudar você hoje?",
          sender: 'bot',
          options: [
            { id: 'next-match', text: 'Qual a próxima partida?' },
            { id: 'recent-results', text: 'Resultados recentes' },
            { id: 'roster', text: 'Jogadores atuais' },
            { id: 'news', text: 'Últimas notícias' }
          ]
        }
      ]);
    }
  }, []);

  useEffect(() => {
    // Rola a tela para a última mensagem
    if (messagesEndRef.current && viewMode === 'chat') {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, viewMode]);

  const handleSend = () => {
    if (input.trim() === '') return;

    // Adiciona a mensagem do usuário
    const userMessageId = Date.now();
    
    setMessages(prevMessages => [
      ...prevMessages,
      {
        id: userMessageId,
        content: input,
        sender: 'user'
      }
    ]);

    // Verifica se o usuário está pedindo informações sobre uma partida específica
    const lowerInput = input.toLowerCase();
    
    // Verificar padrões de texto relacionados a partidas
    if (
      lowerInput.includes('vs heroic') || 
      lowerInput.includes('contra heroic') || 
      lowerInput.includes('furia heroic') ||
      lowerInput.includes('detalhes da partida')
    ) {
      setInput('');
      setIsTyping(true);
      
      // Simula o bot digitando
      setTimeout(() => {
        const matchResponse = {
          id: Date.now(),
          content: "FURIA 14-16 Heroic - ESL Pro League Season 21 (02/05/2025) Mapa: Ancient Destaques: KSCERATO (25-19, 1.31 rating), YEKINDAR (22-21, 1.05 rating) A FURIA começou bem como CT mas não conseguiu fechar o mapa no lado terrorista, perdendo por 16-14.",
          sender: 'bot',
          options: [
            { id: 'match-highlights-1001', text: 'Ver highlights' },
            { id: 'match-stats-1001', text: 'Estatísticas completas' },
            { id: 'match-results', text: 'Voltar aos resultados' }
          ],
          // Dados extras para manipulação interna
          matchId: 1001
        };
        
        setMessages(prevMessages => [...prevMessages, matchResponse]);
        setIsTyping(false);
      }, 1000);
      
      return;
    }
    
    // Verificar padrões de texto relacionados a histórico de partidas
    if (
      lowerInput.includes('histórico') && 
      (lowerInput.includes('vs g2') || lowerInput.includes('contra g2') || lowerInput.includes('furia g2'))
    ) {
      setInput('');
      setIsTyping(true);
      
      // Simula o bot digitando
      setTimeout(() => {
        const historyResponse = {
          id: Date.now(),
          content: "Histórico FURIA vs G2",
          sender: 'bot',
          viewType: 'match-history',
          teamId: 5995, // ID da G2
          options: [
            { id: 'next-match', text: 'Próxima partida contra G2' },
            { id: 'recent-results', text: 'Voltar aos resultados recentes' }
          ]
        };
        
        setMessages(prevMessages => [...prevMessages, historyResponse]);
        setActiveMatchId(null);
        setViewMode('match-history');
        setIsTyping(false);
      }, 1000);
      
      return;
    }

    setInput('');
    setIsTyping(true);

    // Simula o bot digitando para outras mensagens genéricas
    setTimeout(() => {
      try {
        const botResponse = getChatResponse(input);
        
        setMessages(prevMessages => [
          ...prevMessages,
          {
            id: Date.now(),
            content: botResponse.content || "Desculpe, não entendi sua pergunta.",
            sender: 'bot',
            options: botResponse.options || []
          }
        ]);
      } catch (error) {
        console.error("Erro ao obter resposta:", error);
        setMessages(prevMessages => [
          ...prevMessages,
          {
            id: Date.now(),
            content: "Desculpe, tive um problema ao processar sua mensagem. Pode tentar novamente?",
            sender: 'bot',
            options: []
          }
        ]);
      } finally {
        setIsTyping(false);
      }
    }, 1000);
  };

  const handleOptionClick = (option) => {
    console.log("Opção clicada:", option);
    
    if (!option || !option.id || !option.text) {
      console.error("Opção inválida:", option);
      return;
    }
    
    // Adiciona a escolha do usuário como mensagem
    setMessages(prevMessages => [
      ...prevMessages,
      {
        id: Date.now(),
        content: option.text,
        sender: 'user'
      }
    ]);
    
    // Verifica se é uma opção relacionada a detalhes de partida
    if (option.id.startsWith('match-details-')) {
      const matchId = parseInt(option.id.replace('match-details-', ''));
      setActiveMatchId(matchId);
      setViewMode('match-details');
      return;
    }
    
    // Verifica se é uma opção para ver highlights
    if (option.id.startsWith('match-highlights-')) {
      const matchId = parseInt(option.id.replace('match-highlights-', ''));
      
      // Em um cenário real, aqui obteríamos a URL específica dos highlights para esta partida
      window.open("https://www.youtube.com/results?search_query=furia+cs+highlights", '_blank');
      
      // Adiciona resposta do bot confirmando a ação
      setIsTyping(true);
      setTimeout(() => {
        setMessages(prevMessages => [
          ...prevMessages,
          {
            id: Date.now(),
            content: "Abrindo os highlights da partida em uma nova aba.",
            sender: 'bot',
            options: [
              { id: 'match-stats-' + matchId, text: 'Ver estatísticas completas' },
              { id: 'match-results', text: 'Voltar aos resultados' }
            ]
          }
        ]);
        setIsTyping(false);
      }, 500);
      
      return;
    }
    
    // Verifica se é uma opção para ver estatísticas
    if (option.id.startsWith('match-stats-')) {
      const matchId = parseInt(option.id.replace('match-stats-', ''));
      setActiveMatchId(matchId);
      setViewMode('match-stats');
      
      setIsTyping(true);
      
      // Simula o bot digitando
      setTimeout(() => {
        setMessages(prevMessages => [
          ...prevMessages,
          {
            id: Date.now(),
            content: "Estatísticas completas da partida FURIA vs Heroic",
            sender: 'bot',
            viewType: 'match-stats',
            matchId: matchId,
            options: [
              { id: 'match-highlights-' + matchId, text: 'Ver highlights' },
              { id: 'match-results', text: 'Voltar aos resultados' }
            ]
          }
        ]);
        setIsTyping(false);
      }, 1000);
      
      return;
    }
    
    setIsTyping(true);
    
    // Para outras opções, busca a resposta normalmente
    setTimeout(() => {
      try {
        const response = getChatResponse(option.id);
        console.log("Resposta para opção:", response);
        
        if (!response || !response.content) {
          throw new Error(`Resposta inválida para opção ${option.id}`);
        }
        
        // Se a opção clicada for para voltar aos resultados, resetamos o modo de visualização
        if (option.id === 'match-results') {
          setViewMode('chat');
          setActiveMatchId(null);
        }
        
        setMessages(prevMessages => [
          ...prevMessages,
          {
            id: Date.now(),
            content: response.content,
            sender: 'bot',
            options: response.options || [],
            matchId: response.matchId || null
          }
        ]);
      } catch (error) {
        console.error("Erro ao obter resposta para opção:", error);
        
        setMessages(prevMessages => [
          ...prevMessages,
          {
            id: Date.now(),
            content: "Desculpe, tive um problema ao processar sua escolha. Pode tentar novamente?",
            sender: 'bot',
            options: []
          }
        ]);
      } finally {
        setIsTyping(false);
      }
    }, 1000);
  };

  const handleBackToChat = () => {
    setViewMode('chat');
    setActiveMatchId(null);
  };

  // Renderiza visualizações especiais (detalhes de partida, estatísticas, etc.)
  if (viewMode === 'match-details' || viewMode === 'match-stats' || viewMode === 'match-history') {
    return (
      <MatchDetails
        matchId={activeMatchId}
        viewType={viewMode}
        onBack={handleBackToChat}
      />
    );
  }

  return (
    <div className="flex flex-col h-full bg-[#0f172a]">
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((message) => (
          <div key={message.id} className="mb-4">
            {message.sender === 'bot' ? (
              <div>
                <div className="flex items-center mb-2">
                  <MessageSquare size={16} className="mr-2 text-white" />
                  <span className="text-white font-medium">FURIA Bot</span>
                </div>
                <div className="text-white mb-3">{message.content}</div>
                {message.options && message.options.length > 0 && (
                  <div className="space-y-2">
                    {message.options.map((option) => (
                      <button
                        key={option.id}
                        onClick={() => handleOptionClick(option)}
                        data-option-id={option.id}
                        className="block w-full text-left p-3 border border-[#2a3550] rounded bg-[#111827] text-white hover:bg-[#1c2641] transition-colors"
                      >
                        {option.text}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div className="text-right">
                <div className="flex items-center justify-end mb-2">
                  <span className="text-white font-medium mr-2">Você</span>
                  <div className="bg-[#243662] w-6 h-6 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">V</span>
                  </div>
                </div>
                <div className="inline-block bg-[#1f2f4d] text-white p-2 rounded max-w-[80%]">
                  {message.content}
                </div>
              </div>
            )}
          </div>
        ))}
        
        {isTyping && (
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <MessageSquare size={16} className="mr-2 text-white" />
              <span className="text-white font-medium">FURIA Bot</span>
            </div>
            <div className="flex space-x-2">
              <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
              <div className="w-2 h-2 rounded-full bg-white animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 rounded-full bg-white animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
      
      <div className="p-4 border-t border-[#2a3550]">
        <div className="flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Digite sua mensagem..."
            className="flex-1 p-3 bg-[#111827] text-white border border-[#2a3550] rounded-l focus:outline-none"
          />
          <button
            onClick={handleSend}
            disabled={input.trim() === '' || isTyping}
            className={`bg-[#1f2f4d] text-white p-3 rounded-r border border-[#2a3550] border-l-0 ${
              input.trim() === '' || isTyping 
                ? 'opacity-50 cursor-not-allowed' 
                : 'hover:bg-[#2a3e64] transition-colors'
            }`}
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;