import { FaRocket, FaLanguage, FaGraduationCap, FaShieldAlt } from 'react-icons/fa'; 

function InfoBlock() {
  return (
    <div className="bg-customBlue text-white flex flex-col items-center justify-center p-10">
      <h2 className="text-4xl mb-6">
        <span className="text-white font-serif">Про</span> <span className="text-customYellow font-bold">нас:</span>
      </h2>
      <div className="flex flex-col sm:flex-row justify-center gap-8">
        <div className="bg-customYellow text-black p-6 rounded-lg shadow-lg text-center flex flex-col items-center w-full sm:w-1/4">
          <FaRocket className="text-4xl mb-4" />
          <p className="text-xl">01</p>
          <p className="mt-2 text-customBlue  font-serif">Интерактивный алфавит на языке жестов</p>
          <p>Изучайте буквы с помощью нашего переводчика с языка жестов в реальном времени.</p>
        </div>
        <div className="bg-customYellow text-black p-6 rounded-lg shadow-lg text-center flex flex-col items-center w-full sm:w-1/4">
          <FaLanguage className="text-4xl mb-4" />
          <p className="text-xl">02</p>
          <p className="mt-2 text-customBlue  font-serif">Чат-бот</p>
          <p>Получи психологическую поддержку и общайся с нашим дружелюбным чат-ботом</p>
        </div>
        <div className="bg-customYellow text-black p-6 rounded-lg shadow-lg text-center flex flex-col items-center w-full sm:w-1/4">
          <FaGraduationCap className="text-4xl mb-4" />
          <p className="text-xl">03</p>
          <p className="mt-2 text-customBlue font-serif">Интерактивные игры для развития</p>
          <p>Тут вы найдете разнообразные игры, специально разработанные для глухонемых детей. Они помогут развить языковые навыки, логику, память и моторику в увлекательной форме.</p>
        </div>
        <div className="bg-customYellow text-black p-6 rounded-lg shadow-lg text-center flex flex-col items-center w-full sm:w-1/4">
          <FaShieldAlt className="text-4xl mb-4" />
          <p className="text-xl">04</p>
          <p className="mt-2 text-customBlue  font-serif">Безопасное сообщество</p>
          <p>Мы создали безопасное онлайн-пространство, где дети могут общаться, учиться и играть вместе.</p>
        </div>
      </div>
    </div>
  );
}

export default InfoBlock;
