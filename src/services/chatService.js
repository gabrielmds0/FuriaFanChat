// src/services/chatService.js
import { getChatResponse as getMockChatResponse } from '../data/mockData';

/**
 * Obtém uma resposta do chatbot baseada na entrada do usuário
 * @param {string} input - Texto de entrada ou ID da opção selecionada
 * @returns {Object} Objeto contendo a resposta do chatbot
 */
export const getResponse = async (input) => {
  console.log("chatService.getResponse chamado com:", input);
  
  try {
    // Em um cenário real, aqui faríamos uma chamada para a API do chatbot
    // Como estamos em ambiente simulado, usamos a função de mock
    console.log("Chamando getMockChatResponse com:", input);
    const response = getMockChatResponse(input);
    console.log("Resposta recebida de getMockChatResponse:", response);
    
    // Se não tiver resposta, criamos uma resposta padrão
    if (!response) {
      console.warn("Nenhuma resposta recebida de getMockChatResponse");
      const defaultResponse = {
        id: 'not-understood',
        content: "Desculpe, não entendi sua pergunta. Você pode perguntar sobre a próxima partida, resultados recentes, jogadores ou notícias da FURIA.",
        options: [
          { id: 'next-match', text: 'Próxima partida' },
          { id: 'recent-results', text: 'Resultados recentes' },
          { id: 'roster', text: 'Jogadores' },
          { id: 'news', text: 'Notícias' }
        ]
      };
      console.log("Retornando resposta padrão:", defaultResponse);
      return defaultResponse;
    }
    
    console.log("Retornando resposta com sucesso:", response);
    return response;
  } catch (error) {
    console.error('Erro ao obter resposta do chat:', error);
    console.error('Stack trace:', error.stack);
    throw error;
  }
};

/**
 * Testa o clique em uma opção específica
 * Função auxiliar para debug
 */
export const testOptionClick = (optionId) => {
  console.log("=== TESTE DE CLIQUE EM OPÇÃO ===");
  console.log("Testando clique na opção ID:", optionId);
  
  try {
    const response = getMockChatResponse(optionId);
    console.log("Resposta recebida:", response);
    return response;
  } catch (error) {
    console.error("Erro ao testar clique em opção:", error);
    return null;
  }
};