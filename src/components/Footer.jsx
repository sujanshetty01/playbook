import React from 'react';

const Footer = () => {
  return (
    <footer className="relative z-10 pt-16 pb-8 border-t border-white/10 bg-[#04050a]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12">
          <div className="text-center md:text-left">
            <span className="text-3xl font-bold tracking-tight text-white block mb-2">LUMEN</span>
            <p className="text-lumen-cyan font-medium text-sm mb-1">iLearnLumen : Intern Explorer Challenge</p>
            <p className="text-gray-400 text-sm">Intern's Impact Playbook</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm mb-1">Built by</p>
            <p className="text-white font-bold">Ramadevi Alampally</p>
          </div>
        </div>
        
        <div className="text-center text-gray-500 text-xs border-t border-white/10 pt-8">
          &copy; 2026 Lumen Technologies. All Rights Reserved. | The Lumenverse starts here.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
