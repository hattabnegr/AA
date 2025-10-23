
import React, { useState } from 'react';

interface InfoCardProps {
  title: string;
  value: string;
}

const ClipboardIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a2.25 2.25 0 0 1-2.25 2.25h-3a2.25 2.25 0 0 1-2.25-2.25V4.5A2.25 2.25 0 0 1 9 2.25h3A2.25 2.25 0 0 1 13.5 4.5v0c0 .212.03.418.084.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
    </svg>
);

const CheckIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
);

export const InfoCard: React.FC<InfoCardProps> = ({ title, value }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 shadow-lg transition-all duration-300 hover:border-blue-400">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-lg font-semibold text-gray-300">{title}</h2>
          <p className="mt-2 text-blue-300 break-words font-mono text-sm sm:text-base">{value}</p>
        </div>
        <button
          onClick={handleCopy}
          className="ml-4 p-2 rounded-md bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-200"
          aria-label={`Copy ${title}`}
        >
          {copied ? (
            <CheckIcon className="w-5 h-5 text-green-400" />
          ) : (
            <ClipboardIcon className="w-5 h-5 text-gray-400" />
          )}
        </button>
      </div>
       {copied && <div className="text-right text-xs text-green-400 mt-2 transition-opacity duration-300">Copied to clipboard!</div>}
    </div>
  );
};
   