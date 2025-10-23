
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { InfoCard } from './components/InfoCard';
import { LoadingSpinner } from './components/LoadingSpinner';
import { ErrorDisplay } from './components/ErrorDisplay';

const App: React.FC = () => {
  const [userAgent, setUserAgent] = useState<string>('');
  const [ipAddress, setIpAddress] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        // Get User Agent from browser
        setUserAgent(navigator.userAgent);

        // Fetch IP address from a public API
        const response = await fetch('https://api.ipify.org?format=json');
        if (!response.ok) {
          throw new Error('Failed to fetch IP address. The service might be temporarily unavailable.');
        }
        const data = await response.json();
        setIpAddress(data.ip);
      } catch (err) {
        if (err instanceof Error) {
            setError(err.message);
        } else {
            setError('An unknown error occurred.');
        }
        // Set fallback values
        setUserAgent(navigator.userAgent || "Could not retrieve User Agent.");
        setIpAddress("Could not retrieve IP address.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4 font-sans">
      <div className="w-full max-w-2xl mx-auto">
        <Header />
        <main className="mt-8">
          {isLoading ? (
            <div className="flex justify-center items-center h-48">
              <LoadingSpinner />
            </div>
          ) : error ? (
            <ErrorDisplay message={error} />
          ) : (
            <div className="space-y-6">
              <InfoCard title="Your User Agent" value={userAgent} />
              <InfoCard title="Your IPv4 Address" value={ipAddress} />
            </div>
          )}
        </main>
        <footer className="text-center mt-12 text-gray-500 text-sm">
            <p>Powered by React & Tailwind CSS</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
   