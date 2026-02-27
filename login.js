import React, { useState } from 'react';

const Login = () => {
  const [step, setStep] = useState(1); // 1: Phone, 2: OTP
  const [phone, setPhone] = useState('');

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-6">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-black text-[#ef233c] mb-2">Cholo Bangladesh</h1>
        <h2 className="text-xl font-bold mb-8">আপনার নম্বর দিয়ে এগিয়ে যান</h2>

        {step === 1 ? (
          <div>
            <label className="block text-gray-500 mb-2">মোবাইল নম্বর</label>
            <div className="flex border-b-2 border-gray-200 focus-within:border-[#ef233c] transition">
              <span className="py-3 pr-3 font-bold">+৮৮০</span>
              <input 
                type="tel" 
                className="w-full py-3 outline-none text-lg" 
                placeholder="017XXXXXXXX"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <button 
              onClick={() => setStep(2)}
              className="w-full bg-[#ef233c] text-white py-4 rounded-xl mt-8 font-bold text-lg shadow-lg shadow-red-200"
            >
              পরবর্তী
            </button>
          </div>
        ) : (
          <div>
            <p className="text-gray-500 mb-6">আমরা {phone} নম্বরে একটি ওটিপি পাঠিয়েছি।</p>
            <input 
              type="text" 
              className="w-full py-3 border-b-2 border-[#ef233c] outline-none text-center text-2xl tracking-widest" 
              placeholder="0 0 0 0"
              maxLength="4"
            />
            <button className="w-full bg-[#ef233c] text-white py-4 rounded-xl mt-8 font-bold text-lg">
              ভেরিফাই করুন
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
