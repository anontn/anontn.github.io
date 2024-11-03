import React from 'react';
import { MessageSquare, Mail, Instagram } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-[#0F0F17]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">Свяжитесь со мной</h2>
        <div className="flex justify-center space-x-8">
          <a href="https://t.me/anon_tn" className="hover:text-blue-500 transition-colors p-3 bg-[#1A1A24] rounded-full">
            <MessageSquare className="w-8 h-8" />
          </a>
          <a href="mailto:email@example.com" className="hover:text-blue-500 transition-colors p-3 bg-[#1A1A24] rounded-full">
            <Mail className="w-8 h-8" />
          </a>
          <a href="https://instagram.com/username" className="hover:text-blue-500 transition-colors p-3 bg-[#1A1A24] rounded-full">
            <Instagram className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  );
}