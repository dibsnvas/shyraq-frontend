import React from 'react';
import './home.css';
import Draggable from 'react-draggable';
import SemiCircleSquare from '../homepage/SemiCircleSquare';
import FourCircles from '../homepage/FourCircles';
import Circle from '../homepage/Circle';
import HalfCircle from '../homepage/HalfCircle';
import QuarterCircle from '../homepage/QuarterCircle';
import SemiCircleBottom from '../homepage/SemiCircleBottom';
import CircleWithDot from '../homepage/CircleWithDot';
import HalfSquare from '../homepage/HalfSquare';
import Dot from '../homepage/dot';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-customBlue text-white font-custom p-4">
      <h1 className="text-5xl md:text-8xl font-bold text-customYellow">SHYRAQ</h1>
      <p className="text-xl md:text-2xl mt-4 font-serif text-customYellow">Играй.Расти.Развивайся</p>
      <div className="grid">
        <Draggable>
          <div>
            <SemiCircleSquare />
          </div>
        </Draggable>
        <Draggable>
          <div>
            <FourCircles />
          </div>
        </Draggable>
        <Draggable>
          <div>
            <Circle />
          </div>
        </Draggable>
        <Draggable>
          <div>
            <HalfCircle />
          </div>
        </Draggable>
        <Draggable>
          <div>
            <QuarterCircle />
          </div>
        </Draggable>
        <Draggable>
          <div>
            <SemiCircleBottom />
          </div>
        </Draggable>
        <Draggable>
          <div>
            <CircleWithDot />
          </div>
        </Draggable>
        <Draggable>
          <div>
            <HalfSquare />
          </div>
        </Draggable>
        <Draggable>
          <div>
            <Dot />
          </div>
        </Draggable>
        <Draggable>
          <div>
          <HalfSquare />
          </div>
        </Draggable>
      </div>
    </div>
  );
}

export default HomePage;