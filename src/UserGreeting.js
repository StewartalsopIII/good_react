import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserGreeting = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setCurrentDate(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: input }],
        },
        {
          headers: {
            'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      );
      setOutput(response.data.choices[0].message.content);
    } catch (error) {
      console.error('Error calling OpenAI API:', error);
      setOutput('An error occurred. Please try again.');
    }
    setIsLoading(false);
  };

  return (
    <div className="bg-blue-100 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-blue-800 mb-4">Welcome, User!</h2>
      <p className="text-gray-700 mb-4">
        Today is {currentDate.toLocaleDateString()} and the time is{' '}
        {currentDate.toLocaleTimeString()}
      </p>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Ask me anything..."
        />
        <button
          type="submit"
          className="mt-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          disabled={isLoading}
        >
          {isLoading ? 'Thinking...' : 'Submit'}
        </button>
      </form>
      {output && (
        <div className="bg-white p-4 rounded">
          <h3 className="font-bold mb-2">Response:</h3>
          <p>{output}</p>
        </div>
      )}
    </div>
  );
};

export default UserGreeting;