import React from 'react';
import { Link } from 'react-router-dom';

const FrontPage = () => {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen flex flex-col">
      
      <header className="flex justify-between items-center px-8 py-6 border-b border-gray-800 bg-[#0a0a0a]">
        <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-yellow-400">
                CryptaKey
            </Link>
        </div>
        
        <Link 
          to="/login" 
          className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400"
        >
          Login
        </Link>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center text-center px-6 bg-[#0a0a0a]">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">
          Where Secrets Stay Safe <span className="text-yellow-500">CryptaKey</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-xl mb-8">
          Manage all your passwords in one secure place. 
          End-to-end encrypted, accessible anywhere, anytime.
        </p>
        <Link 
          to="/register"
          className="bg-yellow-500 text-black px-6 py-3 rounded-xl text-lg font-semibold hover:bg-yellow-400 transition"
        >
          Get Started
        </Link>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-5xl w-full">
          <FeatureCard 
            title="Encrypted Storage" 
            description="Your data is fully encrypted, ensuring your passwords are only accessible by you."
          />
          <FeatureCard 
            title="Auto Sync" 
            description="Access your vault seamlessly across all your devices with real-time sync."
          />
          <FeatureCard 
            title="Search Vault"
            description="Quickly find any saved credential with our powerful search bar — no more endless scrolling."
          />
        </section>
      </main>

      <footer className="text-center py-4 text-gray-500 text-sm border-t border-gray-800 bg-[#0a0a0a]">
        © 2025 CryptaKey. All rights reserved.
      </footer>
    </div>
  );
};

const FeatureCard = ({ title, description }) => (
  <div className="bg-[#111827] p-6 rounded-xl shadow hover:scale-105 transform transition duration-300">
    <h3 className="text-xl font-semibold text-yellow-500 mb-2">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

export default FrontPage;
