import React from 'react';

export function GameBoard({ snake, food, boardSize, direction }) {
  const getEyePositions = (direction) => {
    switch (direction) {
      case 'UP':
        return {
          leftEye: 'top-[10%] left-[20%]',
          rightEye: 'top-[10%] right-[20%]'
        };
      case 'DOWN':
        return {
          leftEye: 'bottom-[10%] left-[20%]',
          rightEye: 'bottom-[10%] right-[20%]'
        };
      case 'LEFT':
        return {
          leftEye: 'top-[20%] left-[10%]',
          rightEye: 'bottom-[20%] left-[10%]'
        };
      case 'RIGHT':
        return {
          leftEye: 'top-[20%] right-[10%]',
          rightEye: 'bottom-[20%] right-[10%]'
        };
    }
  };

  const eyePositions = getEyePositions(direction);

  return (
    <div 
      className="grid gap-1 bg-gray-800 p-4 rounded-lg"
      style={{
        gridTemplateColumns: `repeat(${boardSize}, minmax(0, 1fr))`,
      }}
    >
      {Array.from({ length: boardSize * boardSize }).map((_, index) => {
        const x = index % boardSize;
        const y = Math.floor(index / boardSize);
        const isSnake = snake.some(segment => segment.x === x && segment.y === y);
        const isFood = food.x === x && food.y === y;
        const isHead = snake[0].x === x && snake[0].y === y;

        return (
          <div
            key={index}
            className={`
              aspect-square rounded-sm relative
              ${isHead
                ? 'bg-green-400'
                : isSnake
                ? 'bg-green-500'
                : isFood
                ? 'bg-red-500'
                : 'bg-gray-700'
              }
            `}
          >
            {isHead && (
              <>
                <div className={`absolute w-[25%] h-[25%] bg-black rounded-full ${eyePositions.leftEye}`} />
                <div className={`absolute w-[25%] h-[25%] bg-black rounded-full ${eyePositions.rightEye}`} />
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}