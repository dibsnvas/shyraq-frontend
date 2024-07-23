import React, { useState } from 'react';
import { FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick1 = () => {
    window.location.href = 'https://gamepage-sand.vercel.app/';
  };

  return (
    <footer className="bg-customYellow text-black py-10">
      <div className="container mx-auto px-24">
        <div className="flex flex-wrap gap-8 md:gap-16">
          <div className="w-full md:w-auto">
            <h3 className="font-bold mb-4">Меню</h3>
            <div className="flex flex-col">
              <button className="mb-2 text-left" onClick={() => alert('Чат-бот clicked')}>Чат-бот</button>
              <button className="mb-2 text-left" onClick={handleClick1}>Игры</button>
              <button className="mb-2 text-left" onClick={() => alert('Сказки clicked')}>Сказки</button>
            </div>
          </div>
          <div className="w-full md:w-auto">
            <h3 className="font-bold mb-4">Поддержка</h3>
            <div className="flex flex-col">
              <button className="mb-2 text-left" onClick={() => alert('FAQs clicked')}>FAQs</button>
              <button className="mb-2 text-left" onClick={() => alert('Контакты clicked')}>Контакты</button>
              <button className="mb-2 text-left" onClick={() => alert('Отзывы clicked')}>Отзывы</button>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mt-8">
          <p>© 2024 Shyraq</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="https://www.instagram.com/shyraq.io/" aria-label="Instagram">
              <FaInstagram className="w-6 h-6" />
            </a>
          </div>
        </div>
        {isOpen && <div className="mt-4">Additional Content Here</div>}
      </div>
    </footer>
  );
};

export default Footer;