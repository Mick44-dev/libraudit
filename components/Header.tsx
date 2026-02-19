
import React from 'react';
import { Page } from '../types';

interface HeaderProps {
  currentPage: Page;
}

const Header: React.FC<HeaderProps> = ({ currentPage }) => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <a href="#home" className="flex items-center space-x-3 group">
          <div className="w-16 h-16 flex items-center justify-center transition-transform group-hover:scale-105">
            <img 
              src="/logobleu.png" 
              alt="LIBR'AUDIT" 
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-2xl font-bold tracking-tight text-[#2b3e63] hidden sm:block">
            LIBR’AUDIT
          </span>
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className={`text-sm font-medium transition-colors ${currentPage === 'home' ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'}`}>Accueil</a>
          <a href="#concept" className={`text-sm font-medium transition-colors ${currentPage === 'concept' ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'}`}>Concept</a>
          <a href="#method" className={`text-sm font-medium transition-colors ${currentPage === 'method' ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'}`}>Méthode</a>
          <a 
            href="https://calendly.com/sasdelhommeau/30min" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#2b3e63] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-800 transition-all shadow-md hover:shadow-lg"
          >
            Prendre un rdv téléphonique
          </a>
        </nav>

        <div className="md:hidden">
          <button className="text-slate-600 p-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
