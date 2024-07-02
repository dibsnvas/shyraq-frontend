import image from '../assets/image.png'; 
import cloud from '../assets/cloud.png';
import cloud2 from '../assets/cloud2.png';

function Body() {
  const handleClick = () => {
    window.location.href = 'http://localhost:5173/';
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-customYellow text-black font-custom relative">
    <div className="relative w-full text-center mt-24 md:mt-36">
      <h1 className="text-3xl md:text-4xl font-bold text-black" style={{ fontFamily: 'Dela Gothic One' }}>
        Твой чат-бот друг
      </h1>
      </div>
      <button 
        onClick={handleClick}
        className="bg-black hover:bg-customBlue text-customOrange text-lg md:text-xl py-2 px-4 rounded mt-8"
        style={{ fontFamily: 'Work Sans' }}
      >
        Поговори сейчас
      </button>
      <div className="w-full px-4 text-center mt-24 py-8 md:py-16 bg-customBlue text-customYellow flex flex-col md:flex-row items-center justify-center font-bold" style={{ fontFamily: 'Dela Gothic One' }}>
        <span className="text-2xl md:text-4xl mb-4 md:mb-0">Играй с нами в игры</span>
        <img src={image} alt="Game controller" className="h-12 md:h-24 md:ml-8"/>
      </div>
      <div className="w-full text-center mt-10 py-8 md:py-16 bg-customYellow text-black flex flex-col items-center justify-center font-bold" style={{ fontFamily: 'Dela Gothic One' }}>
        <span className="text-2xl md:text-4xl">Послушай с нами сказки</span>
        <span className="text-lg md:text-xl" style={{ fontFamily: 'Work Sans' }}>Загляни в мир фантазий!</span>
      </div>
      <div className="w-full text-center mt-16 py-8 md:py-24 bg-customBlue text-customYellow flex flex-col items-center justify-center font-bold" style={{ fontFamily: 'Dela Gothic One' }}>
        <span className="text-2xl md:text-4xl">Поговорим на языке жестов</span>
      </div>
    </div>
  );
}

export default Body;
