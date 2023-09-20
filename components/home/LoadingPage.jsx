import React, { useState, useEffect } from 'react';
import { useSnapshot } from 'valtio';
import state from '@/store';
import Logo from '../root/Logo';

const sentences = [
  "Reclining into the Future... Loading Zero da Vinci's Awesomeness!",
  'Patience is the Companion of Zero Gravity… Hold Tight!',
  'Your Personal Space (Chair) is Orbiting Back to You.',
  'Assembling Your Cosmic Comfort Zone... Hang On!',
  'Channeling da Vinci’s Genius... Almost Ready for Lift-off!',
  'Taking a Mini Zero-Gravity Break... Back in a Flash!',
  'Adjusting for Ultimate Comfort... Please Stand By.',
  'Strapping You in for a Journey Between Work and Zero-Gravity... Wait for it!',
  'Aligning Stars, Knees, and Laptops... Sit Tight!',
  'Getting Ready to Defy Gravity and Deadlines... Just a Moment!',
];

function LoadingPage() {
  const snap = useSnapshot(state);
  const progress = snap.loadProgress;

  const [currentSentence, setCurrentSentence] = useState('');

  useEffect(() => {
    // Function to pick a random sentence
    const getRandomSentence = () => {
      const randomIndex = Math.floor(Math.random() * sentences.length);
      setCurrentSentence(sentences[randomIndex]);
    };

    // Initialize with the first random sentence
    getRandomSentence();

    // Set up an interval to change the sentence every 5 seconds
    const interval = setInterval(() => {
      getRandomSentence();
    }, 5000);

    // Clear interval on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen w-screen fixed bg-neutral-200 z-50 text-lg text-black flex items-center justify-center">
      <div className="w-full flex flex-col items-center justify-center space-y-3 ">
        <Logo />
        <p className="text-center text-base px-10">{currentSentence}</p>
        <div className="w-2/3 border sm:w-1/3 h-2  rounded-full border-black">
          <div
            style={{ width: `${progress}%` }}
            className="h-full rounded-full bg-black"
          />
        </div>
      </div>
    </div>
  );
}

export default LoadingPage;
