import React from 'react';
import { Clock } from 'lucide-react';
import { formatDate } from '../services/hltvService';

const NewsCard = ({ news }) => {
  return (
    <div className="border border-[#2e3a4f] rounded-lg overflow-hidden bg-[#151e2e] shadow-md">
      <div className="h-40 bg-[#1a2436] relative">
        {news.image && (
          <img 
            src={news.image} 
            alt={news.title} 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://via.placeholder.com/400x200?text=FURIA+News';
            }}
          />
        )}
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2 text-white">{news.title}</h3>
        <p className="text-gray-400 text-sm mb-3">{news.summary}</p>
        <div className="flex justify-between items-center">
          <div className="text-xs text-gray-500 flex items-center">
            <Clock size={12} className="mr-1" />
            {formatDate(news.date)}
          </div>
          <a 
            href={news.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-furia-red text-sm font-semibold hover:underline"
          >
            Ler mais
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;