import React, { useEffect, useState } from 'react';
import { DollarSign, TrendingUp, BarChart4 } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10">
          <DollarSign size={120} className="text-white" />
        </div>
        <div className="absolute bottom-20 right-10">
          <TrendingUp size={140} className="text-white" />
        </div>
        <div className="absolute bottom-40 left-1/4">
          <BarChart4 size={100} className="text-white" />
        </div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className={`text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div  className='mb-6'>
            <h1 className="text-4xl md:text-6xl font-bold ">Abdul Mohsin</h1>
            <small>(Former Member Grant Thornton Consultant Team)</small>
          </div>
          <h2 className="text-xl md:text-3xl mb-8">Chartered Accountant (F) | Financial Expert</h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            A versatile CPA with expertise in financial modeling, bookkeeping, accounting,
            corporate finance, auditing, and portfolio management.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-blue-800 px-8 py-3 rounded-full font-medium hover:bg-blue-50 transition-colors"
            >
              Get in Touch
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('services');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-colors"
            >
              View Services
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => {
            const element = document.getElementById('about');
            if (element) element.scrollIntoView({ behavior: 'smooth' });
          }}
          className="text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;