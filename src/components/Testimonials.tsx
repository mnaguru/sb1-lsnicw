import React from 'react';
import { Star, User } from 'lucide-react';

const testimonials = [
  {
    name: "Robert M.",
    role: "Business Owner",
    content: "Principal protection has given me the peace of mind to stop worrying about market crashes."
  },
  {
    name: "Michael C.",
    role: "Retired Professional",
    content: "Using the AGA financial planning system gave me an understanding of how to minimize taxes on retirement distributions."
  },
  {
    name: "Lisa T.",
    role: "Long-time Client",
    content: "The tax preparation service was exceptional. They found deductions I didn't know about and made the whole process stress-free. Best value for seniors like me!"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Listeners Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">{testimonial.content}</p>
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 rounded-full p-2">
                  <User className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}