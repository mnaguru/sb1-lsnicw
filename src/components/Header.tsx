import React, { useState } from 'react';
import { Radio, TrendingUp, Clock } from 'lucide-react';
import AppointmentModal from './AppointmentModal';

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Radio className="h-8 w-8" />
          <span className="text-xl font-bold">SaveMyRetirement Radio</span>
        </div>
        <div className="hidden md:flex items-center">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-yellow-500 text-blue-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-200"
            aria-label="Schedule an appointment"
          >
            Make an Appointment
          </button>
        </div>
      </nav>
      
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Your Path to Financial Freedom</h1>
        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Join Gene Vallorani every weekend for expert insights on investing, market trends, and wealth building strategies.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
          <div className="flex items-center space-x-2">
            <Clock className="h-5 w-5 text-yellow-500" />
            <span>Saturdays 6am Sundays 11am CST</span>
          </div>
          <div className="flex items-center space-x-2">
            <TrendingUp className="h-5 w-5 text-yellow-500" />
            <span>40+ years of market expertise</span>
          </div>
        </div>
        <a 
          href="https://www.iheart.com/podcast/528-thats-the-bottom-line-28256707"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-yellow-500 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors duration-200 shadow-lg"
        >
          Listen to the Show
        </a>
      </div>

      <AppointmentModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </header>
  );
}