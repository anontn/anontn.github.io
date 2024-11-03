import React from 'react';
import { BarChart2, Target, Rocket, Users } from 'lucide-react';

const metrics = [
  { label: "Средний CTR", value: 85, icon: <BarChart2 className="w-6 h-6" /> },
  { label: "Конверсия", value: 92, icon: <Target className="w-6 h-6" /> },
  { label: "Снижение стоимости лида", value: 75, icon: <Rocket className="w-6 h-6" /> },
  { label: "Рост продаж", value: 88, icon: <Users className="w-6 h-6" /> }
];

export function Metrics() {
  return (
    <section className="py-20 bg-[#0F0F17]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Эффективность рекламы</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="metric-container bg-[#1A1A24] p-6 rounded-xl transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-500/10 rounded-lg mr-3">
                  {metric.icon}
                </div>
                <h3 className="text-lg font-semibold">{metric.label}</h3>
              </div>
              <div className="h-3 bg-[#2A2A34] rounded-full overflow-hidden">
                <div 
                  className="h-full bg-blue-500 metric-bar rounded-full transition-all duration-300"
                  style={{ '--target-width': `${metric.value}%` } as React.CSSProperties}
                />
              </div>
              <div className="mt-2 text-right text-blue-500 font-bold">
                {metric.value}%
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}