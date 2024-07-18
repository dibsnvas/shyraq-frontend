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
      <h1 className="text-5xl md:text-9xl font-bold text-customYellow">SHYRAQ</h1>
      <p className="text-xl md:text-2xl mt-4 font-serif text-customYellow">Слышать сердцем, говорить руками, понимать душой</p>
      <div className="grid-container">
        <div className="grid">
          <Draggable bounds="parent">
            <div>
              <SemiCircleSquare />
            </div>
          </Draggable>
          <Draggable bounds="parent">
            <div>
              <FourCircles />
            </div>
          </Draggable>
          <Draggable bounds="parent">
            <div>
              <Circle />
            </div>
          </Draggable>
          <Draggable bounds="parent">
            <div>
              <HalfCircle />
            </div>
          </Draggable>
          <Draggable bounds="parent">
            <div>
              <QuarterCircle />
            </div>
          </Draggable>
          <Draggable bounds="parent">
            <div>
              <SemiCircleBottom />
            </div>
          </Draggable>
          <Draggable bounds="parent">
            <div>
              <CircleWithDot />
            </div>
          </Draggable>
          <Draggable bounds="parent">
            <div>
              <HalfSquare />
            </div>
          </Draggable>
          <Draggable bounds="parent">
            <div>
              <Dot />
            </div>
          </Draggable>
          <Draggable bounds="parent">
            <div>
              <HalfSquare />
            </div>
          </Draggable>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
