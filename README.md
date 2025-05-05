🐱‍👤 FURIA Fan Chat
Desafio Técnico – FURIA Tech | Challenge #1: Experiência Conversacional
Um chat interativo para fãs do time de CS da FURIA, desenvolvido como parte do processo seletivo para a vaga de Assistente de Engenharia de Software.
![image](https://github.com/user-attachments/assets/93461785-bbd7-4ae1-ba42-2ccf317ce416)

🎯 Objetivo
Criar uma experiência conversacional rica para que os fãs da FURIA possam acompanhar o time e interagir de maneira intuitiva e divertida.
🚀 Funcionalidades
💬 Chatbot Simulado

Próximas partidas: Informações sobre jogos futuros
Resultados recentes: Histórico de partidas anteriores
Elenco e estatísticas: Dados sobre os jogadores
Notícias atuais: Últimas atualizações sobre o time

🧭 Interface por Abas

Chat: Interação conversacional com o bot
Partidas: Visualização de jogos passados e futuros
Time: Perfil dos jogadores
Notícias: Feed de novidades

📱 Layout Responsivo

Sidebar colapsável para visualização em dispositivos móveis
Design adaptativo para diferentes tamanhos de tela

🛠️ Tecnologias Utilizadas

React + Vite: Framework e bundler para desenvolvimento front-end
React Hooks: Gerenciamento de estado e efeitos
Tailwind CSS 4.1.5: Framework CSS para estilização
Mock HLTV: Dados simulados para partidas e estatísticas

📂 Estrutura do Projeto
src/
├── assets/              # Recursos estáticos
│   ├── furia.jpg        # Imagens do time
│   ├── furia.png        # Logo em PNG
│   ├── furia.webp       # Logo em formato WebP
│   └── react.svg        # Logo do React
├── components/          # Componentes React
│   ├── Chat.jsx         # Componente principal do chat
│   ├── Header.jsx       # Cabeçalho da aplicação
│   ├── MatchCard.jsx    # Card para exibição de partidas
│   ├── MatchDetails.jsx # Detalhes de uma partida específica
│   ├── NewsCard.jsx     # Card para exibição de notícias
│   ├── PlayerCard.jsx   # Card para exibição de jogadores
│   └── Sidebar.jsx      # Barra lateral para navegação
├── data/                # Dados estáticos
│   └── mockData.js      # Dados simulados para a aplicação
├── services/            # Serviços e APIs
│   ├── chatService.js   # Lógica para o sistema de chat
│   ├── hltvService.js   # Simulação de requisições à API HLTV
│   └── matchDetailsService.js # Serviço para detalhes de partidas
├── App.css              # Estilos específicos da aplicação
└── App.jsx              # Componente principal da aplicação
🚀 Como Executar

Clone o repositório:

bashgit clone https://github.com/gabrielmds0/FuriaFanChat.git
cd FuriaFanChat

Instale as dependências:

bashnpm install
# ou
yarn

Execute o projeto em modo de desenvolvimento:

bashnpm run dev
# ou
yarn dev

Acesse a aplicação no navegador:

http://localhost:5173
🔍 Principais Recursos
Sistema de Chat Inteligente

Respostas contextuais baseadas em palavras-chave
Consulta a dados de partidas e estatísticas
Interface amigável inspirada em apps de mensagens

Informações de Partidas

Visualização de partidas passadas e futuras
Detalhes como mapas, placar e estatísticas
Filtros por torneio e período

Perfil de Jogadores

Estatísticas individuais dos jogadores
Histórico de desempenho
Informações biográficas

Feed de Notícias

Últimas atualizações sobre a FURIA
Integrações com conteúdo do time
Notificações de eventos importantes

📱 Responsividade
O projeto foi desenvolvido seguindo princípios de design responsivo:

Layout fluido que se adapta a diferentes tamanhos de tela
Menus colapsáveis em telas menores
Otimização de imagens para carregamento rápido
Interface touch-friendly para dispositivos móveis

🧠 Arquitetura

Componentes Modulares: Cada parte da interface é um componente reutilizável
Serviços Desacoplados: Lógica de negócio separada da interface
Dados Mockados: Simulação de APIs para desenvolvimento rápido
Estado Centralizado: Gerenciamento de estados com React Hooks

📝 Licença
Este projeto é parte de um desafio técnico e não possui licença específica.
