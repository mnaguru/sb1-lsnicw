import React from 'react';
import { Play, Clock, Download } from 'lucide-react';

const episodes = [
  {
    title: "Market Trends 2024: What's Next?",
    date: "Mar 15, 2024",
    duration: "45 min",
    description: "Analyzing current market trends and making informed predictions for the coming quarters.",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=400"
  },
  {
    title: "Real Estate Investment Strategies",
    date: "Mar 14, 2024",
    duration: "42 min",
    description: "Expert guide on navigating the current real estate market and finding the best opportunities.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=400"
  },
  {
    title: "Retirement Planning Essentials",
    date: "Mar 13, 2024",
    duration: "38 min",
    description: "Essential strategies for securing your financial future and optimizing retirement savings.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
  }
];

export default function Episodes() {
  return (
    <section id="episodes" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Latest Episodes</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {episodes.map((episode, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <img src={episode.image} alt={episode.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-500">{episode.date}</span>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    {episode.duration}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{episode.title}</h3>
                <p className="text-gray-600 mb-4">{episode.description}</p>
                <div className="flex justify-between items-center">
                  <button className="flex items-center text-blue-600 hover:text-blue-700">
                    <Play className="h-5 w-5 mr-1" />
                    Play Now
                  </button>
                  <button className="flex items-center text-gray-600 hover:text-gray-700">
                    <Download className="h-5 w-5 mr-1" />
                    Download
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}