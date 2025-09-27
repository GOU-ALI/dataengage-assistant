import React from 'react';
import { SparkleIcon } from './Icons';

const Header: React.FC = () => {
  return (
    <header className="text-center p-4 md:p-6 border-b border-dark-border">
      <div className="flex items-center justify-center gap-3 mb-2">
        <SparkleIcon className="w-8 h-8 text-brand-blue" />
        <h1 className="text-3xl md:text-4xl font-bold text-light-text">
          DataEngage Assistant
        </h1>
      </div>
      <p className="text-medium-text max-w-2xl mx-auto">
        Your AI partner for creating engaging Data Engineering content on LinkedIn. Generate daily posts, review, and publish with ease.
      </p>
    </header>
  );
};

export default Header;