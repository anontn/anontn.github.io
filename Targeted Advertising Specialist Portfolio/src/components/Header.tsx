import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Header() {
  return (
    <header className="container mx-auto px-4 pt-20 pb-32 relative">
      <div className="absolute inset-0 hero-pattern opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F] via-transparent to-[#0A0A0F]" />
      
      <nav className="flex justify-between items-center mb-20 relative z-10">
        <span className="text-xl font-bold">Antosha.Target</span>
        <a href="#contact" className="text-blue-500 hover:text-blue-400 transition-colors">+7 962 444 49 40</a>
      </nav>
      
      <div className="grid md:grid-cols-2 gap-24 items-center relative z-10">
        <div>
          <div className="relative">
            <div className="absolute -left-4 -top-4 w-20 h-20 bg-blue-500/10 rounded-full blur-xl" />
            <h1 className="text-5xl font-bold mb-6 relative">
              Таргетированная реклама, которая продает
            </h1>
          </div>
          <p className="text-gray-400 mb-8">Помогаю бизнесу привлекать клиентов через ВКонтакте и Яндекс.Директ</p>
          <a href="#services" className="inline-flex items-center bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors">
            Узнать больше <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl rounded-full transform -translate-y-1/2" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-transparent to-transparent" />
          <img 
            src="../img/myface1.png" 
            alt="Specialist" 
            className="rounded-2xl relative z-10 w-full object-cover shadow-xl"
          />
        </div>
      </div>
    </header>
  );
}