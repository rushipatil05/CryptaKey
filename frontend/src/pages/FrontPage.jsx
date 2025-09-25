import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Github } from 'lucide-react'; 
import { motion } from 'framer-motion';

const FrontPage = () => {
  return (
    <div className="bg-gradient-to-b from-[#0a0a0a] to-[#111827] text-white min-h-screen flex flex-col relative overflow-hidden">
      
      {/* Background stars */}
      <div className="absolute inset-0 -z-10">
        <div className="star-field"></div>
      </div>

      <header className="flex justify-between items-center px-8 py-6 border-b border-gray-800 bg-[#0f0f0f] shadow-md z-10">
        <div className="flex-shrink-0">
            <Link to="/" className="text-3xl font-bold text-yellow-400 tracking-wide">
                CryptaKey
            </Link>
        </div>
        
        <Link 
          to="/login" 
          className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold transition duration-150"
        >
          Login
        </Link>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center text-center px-6 z-10">
        <motion.h2 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Where Secrets Stay Safe <span className="text-yellow-400">CryptaKey</span>
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-gray-400 text-lg max-w-xl mb-8"
        >
          Manage all your passwords in one secure place. 
          End-to-end encrypted, accessible anywhere, anytime.
        </motion.p>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Link 
            to="/register"
            className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-lg text-lg font-bold shadow-md transition duration-150 transform hover:scale-105"
          >
            Get Started
          </Link>
        </motion.div>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-5xl w-full">
          <FeatureCard 
            title="Encrypted Storage" 
            description="Your data is fully encrypted, ensuring your passwords are only accessible by you."
            delay={0.8}
          />
          <FeatureCard 
            title="Auto Sync" 
            description="Access your vault seamlessly across all your devices with real-time sync."
            delay={1}
          />
          <FeatureCard 
            title="Search Vault"
            description="Quickly find any saved credential with our powerful search bar — no more endless scrolling."
            delay={1.2}
          />
        </section>
      </main>

      <footer className="text-center py-4 text-gray-500 text-sm border-t border-gray-800 bg-[#0f0f0f] shadow-inner z-10">
        <div className="flex justify-center items-center gap-4 mb-2">
          <a
            href="https://www.linkedin.com/in/rushikesh-patil-/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com/rushipatil05"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <Github size={20} />
          </a>
        </div>
      </footer>
    </div>
  );
};

// Feature card with animation
const FeatureCard = ({ title, description, delay }) => (
  <motion.div
    initial={{ y: 50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: delay, duration: 0.6 }}
    className="bg-[#1a1a1a] border border-gray-700 p-6 rounded-2xl shadow-lg hover:scale-105 transform transition duration-300"
  >
    <h3 className="text-xl font-bold text-yellow-400 mb-2">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </motion.div>
);

export default FrontPage;
