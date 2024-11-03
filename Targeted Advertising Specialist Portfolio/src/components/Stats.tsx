import React from 'react';

const stats = [
  { value: "100+", label: "Успешных проектов" },
  { value: "3+", label: "Года опыта" },
  { value: "30+", label: "Постоянных клиентов" }
];

export function Stats() {
  return (
    <section className="py-20 bg-[#0F0F17]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-6 rounded-xl bg-[#1A1A24] hover:bg-[#22222E] transition-colors">
              <div className="text-4xl font-bold text-blue-500 mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}