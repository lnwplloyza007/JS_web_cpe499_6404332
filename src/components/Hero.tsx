import React from 'react';

const Hero = () => {
  const randomMountainImage = "https://i.imgur.com/p5ZtVhk.jpeg";

  return (
    <div className="relative h-screen">
      <img
        src={randomMountainImage}
        alt="Random mountain landscape"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center px-6 lg:px-12">
        <div className="max-w-3xl">
          <p className="text-yellow-400 mb-4">A HIKING GUIDE</p>
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            Be Prepared For The Mountains And Beyond!
          </h1>
          <button className="bg-yellow-400 text-slate-900 px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;