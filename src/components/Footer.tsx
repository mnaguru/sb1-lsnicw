import React from 'react';
import { Radio, ExternalLink } from 'lucide-react';
import LegalDisclaimer from './LegalDisclaimer';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Radio className="h-6 w-6 text-blue-500" />
              <span className="text-lg font-bold text-white">SaveMyRetirement Radio</span>
            </div>
            <p className="text-sm">
              Your trusted source for financial wisdom and market insights.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>contact@savemyretirement.com</li>
              <li>1-866-728-3697</li>
              <li>Mon-Fri: 9AM-5PM EST</li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <a
            href="https://assetgrowth.associates"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
            aria-label="Visit Asset Growth Associates main website (opens in new tab)"
          >
            Visit Our Main Website
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
      
      <LegalDisclaimer />
      
      <div className="border-t border-gray-800 mt-8 pt-8 pb-4 text-sm text-center">
        <p>&copy; {new Date().getFullYear()} SaveMyRetirement Radio. All rights reserved.</p>
      </div>
    </footer>
  );
}