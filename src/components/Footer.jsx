import React from 'react';

const Footer = () => {
  return (
    <footer className="relative z-10 pt-16 pb-8 border-t border-white/10 bg-[#04050a]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12">
          <div className="text-center md:text-left">
            <span className="text-3xl font-bold tracking-tight text-white block mb-4">LUMEN</span>
            <p className="text-lumen-cyan font-medium mb-1">The Lumenverse starts here.</p>
            <p className="text-gray-400 text-sm">Find it. Use it. Own it.</p>
          </div>
          
          <div className="flex gap-8 text-sm text-gray-400">
            <div className="flex flex-col gap-2">
              <a href="#" className="hover:text-white transition-colors">Support</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
            <div className="flex flex-col gap-2">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
        
        <div className="text-center text-gray-500 text-xs border-t border-white/10 pt-8">
          &copy; 2026 Lumen Technologies. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
