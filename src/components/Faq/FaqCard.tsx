'use client';

import { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

type FaqCardProps = {
  question: string;
  answer: string;
};

const FaqCard = ({ question, answer }: FaqCardProps) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };
  return (
    <div className="w-full flex flex-col gap-3 py-4 border-t border-t-grey">
      <div className="flex items-center justify-between">
        <p className="text-lg font-semibold">{question}</p>
        <button onClick={toggleAnswer}>
          {showAnswer ? <IoIosArrowUp size={25} /> : <IoIosArrowDown size={25} />}
        </button>
      </div>
      {showAnswer && (
        <div>
          <p className="text-lg">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FaqCard;
