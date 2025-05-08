import React from 'react';

function FeatureCard({ videoSrc, title, description }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg flex flex-col items-center p-6">
      <div className="w-full aspect-video bg-white rounded-lg overflow-hidden relative border-2 border-slate-200">
        <video
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover absolute scale-105"
          style={{ 
            backgroundColor: 'white',
            display: 'block',
            margin: 0,
            padding: 0
          }}
        />
      </div>
      <h3 className="text-xl font-bold mb-2 text-center mt-4">{title}</h3>
      <p className="text-sm text-slate-600 text-center">
        {description}
      </p>
    </div>
  );
}

export default FeatureCard; 