import React, { useState } from 'react';
import { Shield } from 'lucide-react';
import AppointmentModal from './AppointmentModal';

export default function PrincipalProtection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Shield className="h-16 w-16 mx-auto mb-6 text-blue-600" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Principal Protection Account</h2>
          <p className="text-xl text-gray-600 mb-8">Keep your principal safe while earning market-linked returns</p>
          
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition duration-300">
            <div className="flex flex-col items-center">
              <div className="bg-blue-600 text-white rounded-full px-6 py-2 text-lg font-semibold mb-6">
                100% Principal Protection
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 text-left">
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
                  <h3 className="font-bold text-lg mb-2">Guaranteed Safety</h3>
                  <p className="text-gray-600">Your principal is 100% protected, ensuring you never lose your initial investment</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
                  <h3 className="font-bold text-lg mb-2">Market Participation</h3>
                  <p className="text-gray-600">Benefit from market gains while being protected from market losses</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
                  <h3 className="font-bold text-lg mb-2">Tax Advantages</h3>
                  <p className="text-gray-600">Enjoy tax-deferred growth potential on your earnings</p>
                </div>
              </div>
              
              <button 
                onClick={() => setIsModalOpen(true)}
                className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-md"
              >
                Learn More About Principal Protection
              </button>
            </div>
          </div>
        </div>
      </div>

      <AppointmentModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}