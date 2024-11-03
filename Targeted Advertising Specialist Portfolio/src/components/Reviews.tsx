import React from 'react';

const reviews = [
  {
    name: "Анна Петрова",
    company: "Beauty Studio",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    review: "Отличный специалист! Помог нам значительно увеличить продажи через таргетированную рекламу."
  },
  {
    name: "Михаил Иванов",
    company: "Tech Solutions",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    review: "Профессиональный подход к работе. Реклама начала приносить реальные результаты."
  },
  {
    name: "Елена Смирнова",
    company: "Fashion Store",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    review: "Благодаря грамотно настроенной рекламе мы смогли привлечь новую аудиторию."
  }
];

export function Reviews() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Отзывы клиентов</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-[#1A1A24] p-6 rounded-xl hover:bg-[#22222E] transition-colors">
              <div className="flex items-center mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-bold">{review.name}</h4>
                  <p className="text-gray-400">{review.company}</p>
                </div>
              </div>
              <p className="text-gray-300">"{review.review}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}