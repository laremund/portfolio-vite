import React from 'react';
import { RefreshCw } from 'lucide-react';

export function GameOver({ score, onRestart }) {
  return (
    <div className="fixed inset-0 bg-black/75 flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Game Over!</h2>
        <p className="text-xl mb-6">Final Score: {score}</p>
        <button
          onClick={onRestart}
          className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold w-full"
        >
          <RefreshCw className="w-5 h-5" />
          Play Again
        </button>
      </div>
    </div>
  );
}