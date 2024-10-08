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

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-customBlue text-white font-need p-4">
      <h1 className="text-6xl md:text-[9rem] font-custom text-customYellow">SHYRAQ</h1>
      <p className="text-xl md:text-2xl mt-4 font-serif text-customYellow mb-6 text-center md:text-left">
        Учите и переводите с языка жестов в реальном времени здесь
      </p>
      <div className="grid-container">
        <div className="grid">
          <Draggable bounds="parent">
            <div className="semi_circle_square_cont draggable">
              <SemiCircleSquare />
            </div>
          </Draggable>
          <Draggable bounds="parent">
            <div className="four_circles_cont draggable">
              <FourCircles />
            </div>
          </Draggable>
          <Draggable bounds="parent">
            <div className="circle_cont draggable">
              <Circle />
            </div>
          </Draggable>
          <Draggable bounds="parent">
            <div className="half_circle_cont draggable">
              <HalfCircle />
            </div>
          </Draggable>
          <Draggable bounds="parent">
            <div className="quarter_circle_cont draggable">
              <QuarterCircle />
            </div>
          </Draggable>
          <Draggable bounds="parent">
            <div className="semi_circle_bottom_cont draggable">
              <SemiCircleBottom />
            </div>
          </Draggable>
          <Draggable bounds="parent">
            <div className="circle_with_dot_cont draggable">
              <CircleWithDot />
            </div>
          </Draggable>
          <Draggable bounds="parent">
            <div className="half_square_cont draggable">
              <HalfSquare />
            </div>
          </Draggable>
          <Draggable bounds="parent">
            <div className="dot_cont draggable">
            <QuarterCircle />
            </div>
          </Draggable>
          <Draggable bounds="parent">
            <div className="four_circles_cont draggable">
              <FourCircles />
            </div>
          </Draggable>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
