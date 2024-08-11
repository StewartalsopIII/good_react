import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const teamMembers = [
    { name: 'John Doe', role: 'CEO', bio: 'Visionary leader with 10+ years of experience.' },
    { name: 'Jane Smith', role: 'CTO', bio: 'Tech guru passionate about innovation.' },
    { name: 'Mike Johnson', role: 'Lead Developer', bio: 'Coding wizard with a love for clean code.' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 flex flex-col items-center">
      <div className="w-full bg-gradient-to-r from-blue-400 to-blue-600 text-white py-20 mb-12 shadow-md">
        <h1 className="text-5xl font-bold mb-4 animate-fade-in">About Us</h1>
        <p className="text-xl max-w-3xl mx-auto px-4 animate-fade-in-delay">
          Dedicated to creating amazing React applications and helping developers learn and grow.
        </p>
      </div>

      <div className="max-w-4xl w-full px-4 mb-12">
        <p className="text-xl text-gray-700 text-center leading-relaxed mb-8 animate-fade-in-delay">
          Welcome to our About page! This is where you can learn more about our company, 
          our mission, and our team. We're passionate about pushing the boundaries of web development 
          and fostering a community of skilled, innovative developers.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600 mb-2">{member.role}</p>
                <p className="text-gray-500 text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>

        <Link 
          to="/" 
          className="block w-48 mx-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-md transition duration-300 text-center hover:shadow-lg"
        >
          Go back to Home
        </Link>
      </div>

      <footer className="w-full bg-gray-800 text-white py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="mb-4">Contact us: info@example.com | (123) 456-7890</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="hover:text-blue-400 transition duration-300">Twitter</a>
            <a href="#" className="hover:text-blue-400 transition duration-300">LinkedIn</a>
            <a href="#" className="hover:text-blue-400 transition duration-300">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;