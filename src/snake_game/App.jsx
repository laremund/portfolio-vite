import React, { useState, useEffect, useCallback } from 'react';
import { useInterval } from './hooks/useInterval';
import { GameBoard } from './components/GameBoard';
import { GameControls } from './components/GameControls';
import { GameOver } from './components/GameOver';
import { Gamepad2 } from 'lucide-react';

const BOARD_SIZE = 20;
const INITIAL_SPEED = 200;
const SPEED_INCREMENT = 10;

function App() {
  const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
  const [food, setFood] = useState({ x: 15, y: 15 });
  const [direction, setDirection] = useState('RIGHT');
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [speed, setSpeed] = useState(INITIAL_SPEED);
  const [isPaused, setIsPaused] = useState(false);

  const generateFood = useCallback(() => {
    const newFood = {
      x: Math.floor(Math.random() * BOARD_SIZE),
      y: Math.floor(Math.random() * BOARD_SIZE),
    };
    // Ensure food doesn't spawn on snake
    if (snake.some(segment => segment.x === newFood.x && segment.y === newFood.y)) {
      return generateFood();
    }
    return newFood;
  }, [snake]);

  const resetGame = () => {
    setSnake([{ x: 10, y: 10 }]);
    setFood(generateFood());
    setDirection('RIGHT');
    setIsGameOver(false);
    setScore(0);
    setSpeed(INITIAL_SPEED);
    setIsPaused(false);
  };

  const moveSnake = useCallback(() => {
    if (isPaused || isGameOver) return;

    setSnake(currentSnake => {
      const head = currentSnake[0];
      const newHead = { ...head };

      switch (direction) {
        case 'UP':
          newHead.y = (head.y - 1 + BOARD_SIZE) % BOARD_SIZE;
          break;
        case 'DOWN':
          newHead.y = (head.y + 1) % BOARD_SIZE;
          break;
        case 'LEFT':
          newHead.x = (head.x - 1 + BOARD_SIZE) % BOARD_SIZE;
          break;
        case 'RIGHT':
          newHead.x = (head.x + 1) % BOARD_SIZE;
          break;
      }

      // Check if snake hits itself
      if (currentSnake.some(segment => segment.x === newHead.x && segment.y === newHead.y)) {
        setIsGameOver(true);
        return currentSnake;
      }

      const newSnake = [newHead, ...currentSnake];

      // Check if snake eats food
      if (newHead.x === food.x && newHead.y === food.y) {
        setFood(generateFood());
        setScore(s => s + 10);
        setSpeed(s => Math.max(s - SPEED_INCREMENT, 50));
      } else {
        newSnake.pop();
      }

      return newSnake;
    });
  }, [direction, food, generateFood, isGameOver, isPaused]);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === ' ') {
        setIsPaused(p => !p);
        return;
      }

      const newDirection = {
        ArrowUp: 'UP',
        ArrowDown: 'DOWN',
        ArrowLeft: 'LEFT',
        ArrowRight: 'RIGHT',
      };

      if (newDirection[e.key]) {
        const current = direction;
        const next = newDirection[e.key];
        
        // Prevent 180-degree turns
        const invalidMoves = {
          UP: 'DOWN',
          DOWN: 'UP',
          LEFT: 'RIGHT',
          RIGHT: 'LEFT',
        };

        if (invalidMoves[current] !== next) {
          setDirection(next);
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [direction]);

  useInterval(moveSnake, speed);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <div className="max-w-lg w-full">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Gamepad2 className="w-6 h-6" />
            <h1 className="text-2xl font-bold">Snake Game</h1>
          </div>
          <div className="text-xl">Score: {score}</div>
        </div>

        <GameBoard
          snake={snake}
          food={food}
          boardSize={BOARD_SIZE}
          direction={direction}
        />

        <GameControls
          onDirectionChange={setDirection}
          isPaused={isPaused}
          onPauseToggle={() => setIsPaused(p => !p)}
        />

        {isGameOver && (
          <GameOver
            score={score}
            onRestart={resetGame}
          />
        )}

        <div className="mt-4 text-center text-sm text-gray-400">
          Use arrow keys to move • Space to pause • Mobile controls below
        </div>
      </div>
    </div>
  );
}

export default App;