import React from 'react';
import { Award, Globe, Users } from 'lucide-react';

export default function HostBio() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img
              src="https://github.com/mnaguru/Financial-Radio-Show-Landing-Page-SaveMyRetirement/blob/main/src/public/Gene.png"
              alt="Gene Vallorani"
              className="rounded-2xl shadow-2xl"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Your Host, Gene Vallorani</h2>
            <p className="text-gray-600 text-lg mb-6">
              With over 40 years of experience in financial markets and wealth management, Gene Vallorani brings expert insights and actionable advice to help you achieve your financial goals.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <Award className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Registered Financial Consultant</h3>
                  <p className="text-gray-600">Registered with the RFC Board since 2008</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Globe className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Respected Political Analyst</h3>
                  <p className="text-gray-600">Analysis on the Science of Politics and How it Relates to Financial Issues</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Users className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Trusted Advisor</h3>
                  <p className="text-gray-600">Helped thousands of clients achieve their financial goals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}