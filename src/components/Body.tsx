import { useState } from 'react';
import main1 from '../assets/main1.jpg';
import B from '../assets/main2.jpg';
import C from '../assets/main3.jpg';

function Body() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = () => {
    window.location.href = 'http://localhost:5174/';
  };
  
  const handleClick1 = () => {
    window.location.href = 'https://gamepage-sand.vercel.app/';
  }

  return (
    <div>
      <div className="bg-customYellow text-2xl min-h-screen flex items-center justify-center py-12">
        <div className="flex flex-col md:flex-row justify-center gap-9">
          <div 
            onClick={handleClick} 
            className="bg-white p-4 rounded-lg shadow-lg cursor-pointer text-center flex flex-col items-center transition-transform transform hover:scale-95 w-full md:w-1/3"
          >
            <div className="bg-white w-full h-72 mb-4 rounded-lg">
              <img src={main1} alt="Bot" className="w-full h-full object-cover rounded-lg" />
            </div>
            <button onClick={handleToggle} aria-label="Toggle menu"></button>
            <p className="font-bold">Поговори с нашим чат-ботом</p>
          </div>
          <div 
            className="bg-white p-4 rounded-lg shadow-lg cursor-pointer text-center flex flex-col items-center transition-transform transform hover:scale-95 w-full md:w-1/3" 
            onClick={handleClick1}
          >
            <div className="bg-white w-full h-72 mb-4 rounded-lg">
              <img src={B} alt="Arcade" className="w-full h-full object-cover rounded-lg"/>
            </div>
            <p className="font-bold">Поиграть в интересные <hr />развивающие игры</p>
          </div>
          <div 
            className="bg-white p-6 rounded-lg shadow-lg cursor-pointer text-center flex flex-col items-center transition-transform transform hover:scale-95 w-full md:w-1/3"
          >
            <div className="bg-white w-full h-72 mb-4 rounded-lg">
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
