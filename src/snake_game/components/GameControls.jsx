import React from 'react';
import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight, Pause, Play } from 'lucide-react';

export function GameControls({ onDirectionChange, isPaused, onPauseToggle }) {
  return (
    <div className="mt-4">
      <div className="flex justify-center mb-2">
        <button
          onClick={() => onDirectionChange('UP')}
          className="p-3 bg-gray-700 hover:bg-gray-600 rounded-lg"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      </div>
      <div className="flex justify-center gap-2">
        <button
          onClick={() => onDirectionChange('LEFT')}
          className="p-3 bg-gray-700 hover:bg-gray-600 rounded-lg"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <button
          onClick={onPauseToggle}
          className="p-3 bg-gray-700 hover:bg-gray-600 rounded-lg"
        >
          {isPaused ? <Play className="w-6 h-6" /> : <Pause className="w-6 h-6" />}
        </button>
        <button
          onClick={() => onDirectionChange('RIGHT')}
          className="p-3 bg-gray-700 hover:bg-gray-600 rounded-lg"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
      </div>
      <div className="flex justify-center mt-2">
        <button
          onClick={() => onDirectionChange('DOWN')}
          className="p-3 bg-gray-700 hover:bg-gray-600 rounded-lg"
        >
          <ArrowDown className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}