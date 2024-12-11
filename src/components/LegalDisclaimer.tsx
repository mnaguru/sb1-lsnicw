import React from 'react';

export default function LegalDisclaimer() {
  return (
    <div className="bg-gray-900 border-t border-gray-800 pt-8 pb-4">
      <div className="container mx-auto px-4">
        <div className="text-gray-400 text-sm leading-relaxed space-y-4">
          <p>
            Asset Growth Associates Wealth Advisors is a Registered Investment Advisor registered with the State of Texas, 
            offering fee-based financial planning and investment advisory services.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-gray-300 font-semibold mb-2">Asset Growth Associates</h4>
              <p>Specializing in insurance solutions and retirement planning strategies.</p>
            </div>
            <div>
              <h4 className="text-gray-300 font-semibold mb-2">AGA Tax and Retirement Advisors</h4>
              <p>Providing comprehensive tax preparation and accounting services.</p>
            </div>
            <div>
              <h4 className="text-gray-300 font-semibold mb-2">Asset Growth Associates Wealth Advisors</h4>
              <p>Delivering personalized investment advisory and wealth management services.</p>
            </div>
          </div>

          <p>
            The information provided on this website is for informational purposes only and should not be considered as 
            investment, tax, or legal advice. Investment advisory services are only offered in jurisdictions where Asset 
            Growth Associates Wealth Advisors is registered or exempt from registration.
          </p>
          
          <p>
            Past performance is not indicative of future results. Investing involves risk, including the potential loss 
            of principal. Please consult with qualified professionals regarding your specific situation before making 
            any financial decisions.
          </p>
        </div>
      </div>
    </div>
  );
}