import React from 'react';
import { ArrowRight } from 'lucide-react';

const HikerLevel = () => {
  const randomHikerImage = "https://i.imgur.com/kbPLv7R.jpeg";

  return (
    <div className="bg-slate-800 py-16 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-2/3 mb-8 lg:mb-0">
          <h2 className="text-6xl font-bold mb-6">
            <span className="text-yellow-400">01</span> What level of hiker are you?
          </h2>
          <p className="text-gray-300 mb-6">
            Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker?
          </p>
          <button className="flex items-center text-yellow-400 hover:text-yellow-300 transition-colors">
            read more <ArrowRight className="ml-2" size={20} />
          </button>
        </div>
        <div className="lg:w-1/3">
          <img
            src={randomHikerImage}
            alt="Random hiker on a trail"
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HikerLevel;