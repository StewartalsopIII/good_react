import React, { useState, useEffect } from 'react';

const UserGreeting = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentDate(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-blue-100 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-blue-800 mb-4">Welcome, User!</h2>
      <p className="text-gray-700">
        Today is {currentDate.toLocaleDateString()} and the time is{' '}
        {currentDate.toLocaleTimeString()}
      </p>
    </div>
  );
};

export default UserGreeting;