import React, { useState, useEffect } from 'react';

const FindingRide = ({ fare, destination }) => {
  return (
    <div className="fixed inset-0 bg-white z-[2000] flex flex-col items-center justify-center p-6 text-center">
      <div className="relative mb-10">
        <div className="absolute inset-0 bg-[#ef233c] opacity-20 rounded-full animate-ping"></div>
        <div className="w-24 h-24 bg-[#ef233c] rounded-full flex items-center justify-center">
          <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-2">নিকটস্থ রাইডার খোঁজা হচ্ছে...</h2>
      <p className="text-gray-500 mb-6">গন্তব্য: {destination}</p>
      
      <div className="bg-gray-50 w-full p-4 rounded-2xl border border-gray-100 mb-8">
          <span className="text-sm text-gray-400 block">আনুমানিক ভাড়া</span>
          <span className="text-3xl font-black text-[#ef233c]">৳ {fare}</span>
      </div>

      <button className="text-gray-400 font-bold hover:text-red-500">অনুরোধ বাতিল করুন</button>
    </div>
  );
};

export default FindingRide;
