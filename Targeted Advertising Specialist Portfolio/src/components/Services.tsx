import React from 'react';
import { Target, Rocket, Users } from 'lucide-react';

const services = [
  {
    icon: <Target className="w-8 h-8 text-blue-500" />,
    title: "Настройка рекламы ВК",
    price: "от 20 000 ₽",
    description: "Полная настройка и ведение рекламных кампаний во ВКонтакте. Таргетинг на целевую аудиторию."
  },
  {
    icon: <Rocket className="w-8 h-8 text-blue-500" />,
    title: "Яндекс.Директ",
    price: "от 25 000 ₽",
    description: "Настройка контекстной рекламы в Яндекс.Директ. Оптимизация рекламных кампаний."
  },
  {
    icon: <Users className="w-8 h-8 text-blue-500" />,
    title: "Аудит рекламы",
    price: "от 5 000 ₽",
    description: "Анализ существующих рекламных кампаний и рекомендации по улучшению эффективности."
  }
];

export function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Мои услуги</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-[#1A1A24] p-6 rounded-xl hover:transform hover:-translate-y-1 transition-all duration-300 cursor-pointer h-full flex flex-col">
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-4 flex-grow">{service.description}</p>
              <p className="text-blue-500 font-bold mt-auto">{service.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}