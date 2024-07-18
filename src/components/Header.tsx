import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = () => {
    window.location.href = 'http://localhost:5174/';
  };

  const handleClick1 = () => {
    window.location.href = 'https://gamepage-sand.vercel.app/';
  };
  

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 bg-customYellow text-black shadow-md">
      <div className="text-lg font-bold">SHYRAQ</div>
      <div className="md:hidden">
        <button onClick={handleToggle} aria-label="Toggle menu">
          {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
        </button>
      </div>
      <nav className={`md:flex ${isOpen ? 'flex' : 'hidden'} flex-col md:flex-row md:items-center absolute md:relative left-0 top-full md:top-0 w-full md:w-auto bg-customYellow md:bg-transparent p-4 md:p-0`}>
        <ul className="flex flex-col md:flex-row font-serif space-y-2 md:space-y-0 md:space-x-4 w-full md:w-auto">
          <li><button className="hover:underline" onClick={handleClick}>Чат-бот</button></li>
          <li><button className="hover:underline" onClick={handleClick1}>Игры</button></li>
          <li><button className="hover:underline">Язык жестов</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
