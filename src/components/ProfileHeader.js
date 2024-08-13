import React from 'react';
import { Camera, Edit } from 'lucide-react';

const ProfileHeader = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Cover Photo */}
      <div className="h-48 bg-gray-300 relative">
        <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md">
          <Camera size={20} className="text-gray-600" />
        </button>
      </div>
      
      {/* Profile Information */}
      <div className="relative px-6 pb-6">
        {/* Profile Picture */}
        <div className="absolute -top-16 left-6 z-10">
          <img 
            src="/capybara_in_suit.jpg"
            alt="Profile" 
            className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
          />
        </div>
        
        {/* Edit Profile Button */}
        <button className="absolute top-4 right-6 p-2 rounded-full hover:bg-gray-100">
          <Edit size={20} className="text-gray-600" />
        </button>
        
        {/* Name and Credentials */}
        <div className="mt-4 ml-40"> {/* Adjusted margin-top and added left margin */}
          <h1 className="text-2xl font-bold flex items-center">
            Stewart Alsop
            <span className="ml-2 text-sm font-normal text-blue-600 border border-blue-600 rounded px-2 py-1">
              Verify now
            </span>
          </h1>
          <p className="text-lg text-gray-600 mt-1">
            Founder of The AI Whisperer Club & Host at The Crazy Wisdom Podcast
          </p>
          <p className="text-sm text-gray-500 mt-1">
            San Francisco, California, United States · 
            <a href="#" className="text-blue-600 hover:underline ml-1">Contact info</a>
          </p>
          <p className="text-sm text-blue-600 hover:underline mt-1 cursor-pointer">
            500+ connections
          </p>
        </div>
        
        {/* Action Buttons */}
        <div className="mt-4 flex flex-wrap gap-2">
          <button className="bg-blue-600 text-white px-6 py-1 rounded-full font-medium hover:bg-blue-700">
            Open to
          </button>
          <button className="border border-blue-600 text-blue-600 px-4 py-1 rounded-full font-medium hover:bg-blue-50">
            Add profile section
          </button>
          <button className="border border-gray-300 text-gray-600 px-4 py-1 rounded-full font-medium hover:bg-gray-50">
            More
          </button>
        </div>
      </div>
      
      {/* Education/Experience */}
      <div className="px-6 py-4 border-t border-gray-200 flex items-center space-x-4">
        <div className="w-12 h-12 bg-gray-200"></div>
        <div className="w-12 h-12 bg-gray-200"></div>
      </div>
    </div>
  );
};

export default ProfileHeader;