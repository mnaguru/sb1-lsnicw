import React, { useState } from 'react';
import { BarChart2, Receipt, PiggyBank, LineChart } from 'lucide-react';
import AppointmentModal from './AppointmentModal';

export default function Offers() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Special Offers</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Risk Number Card */}
          <div className="bg-blue-800 rounded-xl p-8 hover:bg-blue-700 transition h-full flex flex-col">
            <div className="flex items-start gap-4 mb-4">
              <BarChart2 className="h-12 w-12 text-yellow-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">What is My Risk Number?</h3>
                <p className="text-blue-100">Discover your personal risk tolerance and align your investments accordingly</p>
              </div>
            </div>
            <div className="mt-auto text-center">
              <a
                href="https://whatismyrisknumber.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-yellow-500 text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition"
              >
                Check Now
              </a>
            </div>
          </div>

          {/* Tax Preparation Card */}
          <div className="bg-blue-800 rounded-xl p-8 hover:bg-blue-700 transition h-full flex flex-col">
            <div className="flex items-start gap-4 mb-4">
              <Receipt className="h-12 w-12 text-yellow-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Professional Tax Return Preparation</h3>
                <p className="text-blue-100">Expert tax preparation services tailored to your financial situation</p>
              </div>
            </div>
            <div className="mt-auto text-center">
              <div className="mb-4">
                <span className="text-3xl font-bold">$89</span>
                <span className="text-blue-200"> Age 50 and over</span>
              </div>
              <a
                href="https://calendly.com/jkorejwa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-yellow-500 text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition"
              >
                Make an Appointment
              </a>
            </div>
          </div>

          {/* Guaranteed Income Card */}
          <div className="bg-blue-800 rounded-xl p-8 hover:bg-blue-700 transition h-full flex flex-col">
            <div className="flex items-start gap-4 mb-4">
              <PiggyBank className="h-12 w-12 text-yellow-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Get Guaranteed Future Income</h3>
                <p className="text-blue-100">Secure your retirement with a guaranteed income stream for life</p>
              </div>
            </div>
            <div className="mt-auto text-center">
              <div className="mb-4">
                <span className="text-xl font-bold">Get 15% income you cannot outlive</span>
              </div>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-yellow-500 text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition"
              >
                Find Out More
              </button>
            </div>
          </div>

          {/* Financial Planning Card */}
          <div className="bg-blue-800 rounded-xl p-8 hover:bg-blue-700 transition h-full flex flex-col">
            <div className="flex items-start gap-4 mb-4">
              <LineChart className="h-12 w-12 text-yellow-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Plan Your Financial Future</h3>
                <p className="text-blue-100">Free access to a powerful online planning tool</p>
                <ul className="text-blue-100 space-y-2 mt-4">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                    Personalized Strategy
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                    Retirement Planning
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                    Wealth Preservation
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-auto text-center">
              <a
                href="https://app.rightcapital.com/account/sign-up?referral=8ka-SkjYiab62IDZo0hOzQ&type=client"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-yellow-500 text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition"
              >
                Get Started
              </a>
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