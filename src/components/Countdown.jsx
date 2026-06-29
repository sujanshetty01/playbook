import React, { useState, useEffect } from 'react';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Target: 03-Jul-2026, 6:00 PM
    const targetDate = new Date('2026-07-03T18:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 relative z-10 border-t border-b border-white/10 bg-space-dark/80">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Submission Deadline</h2>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="glass w-24 h-24 md:w-32 md:h-32 rounded-2xl flex flex-col items-center justify-center">
              <span className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">
                {value.toString().padStart(2, '0')}
              </span>
              <span className="text-xs md:text-sm text-lumen-cyan uppercase tracking-widest mt-2">{unit}</span>
            </div>
          ))}
        </div>
        
        <p className="text-xl text-gray-300 font-medium">03-Jul-2026, 6:00 PM</p>
      </div>
    </section>
  );
};

export default Countdown;
