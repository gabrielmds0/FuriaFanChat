import React from 'react';
import { Menu } from 'lucide-react';

const Header = ({ toggleSidebar, nextMatch }) => {
  return (
    <div className="flex justify-between items-center bg-black border-b border-[#2e3a4f]">
      {/* Parte esquerda - Logo e nome */}
      <div className="flex items-center p-2">
        <div className="overflow-hidden h-16 w-auto">
          <img 
            src='src/assets/furia.webp' 
            alt='FURIA logo' 
            className="h-16 w-auto max-w-none transform scale-125 object-cover ml-15"
            style={{ objectPosition: "center" }}
          />
        </div>
      </div>
      
      {/* Parte direita - Informação da próxima partida */}
      <div className="hidden md:flex items-center mr-6">
        <div className="text-right">
          <div className="text-sm text-gray-400">Próxima partida</div>
          <div className="text-white font-semibold">
            {nextMatch ? `FURIA vs ${nextMatch.team1.id === 8297 ? nextMatch.team2.name : nextMatch.team1.name}` : 'Nenhuma partida agendada'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;