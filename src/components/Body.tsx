import { useState } from 'react';
import { FaTimes, FaBars } from 'react-icons/fa'; // Make sure you have these icons available
import A from '../assets/A.jpg';
import B from '../assets/B.jpg';
import C from '../assets/C.jpg';

function Body() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = () => {
    window.location.href = 'http://localhost:5174/';
  };

  return (
    <div>
      <div className="bg-customYellow text-2xl min-h-screen flex items-center justify-center">
        <div className="flex flex-col sm:flex-row justify-center gap-8 mb-">
          <div onClick={handleClick} className="bg-white p-4 rounded-lg shadow-lg cursor-pointer text-center flex flex-col items-center transition-transform transform hover:scale-95">
            <div className="bg-white w-72 h-72 mb-4 rounded-lg">
              <img src={A} alt="Bot" className="w-full h-full object-cover rounded-lg" />
            </div>
            <button onClick={handleToggle} aria-label="Toggle menu">
            </button>
            <p className="font-bold">Поговори с нашим чат-ботом</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg cursor-pointer text-center flex flex-col items-center transition-transform transform hover:scale-95">
            <div className="bg-white w-72 h-72 mb-4 rounded-lg">
              <img src={B} alt="Arcade" className="w-full h-full object-cover rounded-lg" />
            </div>
            <p className="font-bold">Поиграть в интересные <hr />развивающие игры</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg cursor-pointer text-center flex flex-col items-center transition-transform transform hover:scale-95">
            <div className="bg-white w-72 h-72 mb-4 rounded-lg">
              <img src={C} alt="Sign Language" className="w-full h-full object-cover rounded-lg" />
            </div>
            <p className="font-bold">Перевести язык жестов</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
