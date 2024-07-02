import React from 'react';
import { FaInstagram, FaTelegram, FaTiktok} from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-customYellow text-black py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap ml-24 gap-8 md:gap-16">
          <div className="w-full md:w-auto">
            <h3 className="font-bold mb-4">Меню</h3>
            <ul className="list-none p-0">
              <li className="mb-2">Голосовой чат-бот</li>
              <li className="mb-2">Игры</li>
              <li className="mb-2">Сказки</li>
            </ul>
          </div>
          <div className="w-full md:w-auto">
            <h3 className="font-bold mb-4">Поддержка</h3>
            <ul className="list-none p-0">
              <li className="mb-2">FAQs</li>
              <li className="mb-2">Контакты</li>
              <li className="mb-2">Отзывы</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mt-8">
          <p>© 2024 Shyraq</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" aria-label="Instagram">
              <FaInstagram className="w-6 h-6" />
            </a>
            <a href="#" aria-label="Tiktok">
              <FaTiktok className="w-6 h-6" />
            </a>
            <a href='#' aria-label='Telegram'>
                <FaTelegram className='w-6 h-6' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
