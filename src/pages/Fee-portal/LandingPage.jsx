
import React from 'react';
import { GraduationCap, Shield, CreditCard } from 'lucide-react';

import SearchableWrapper from '../../components/Searchbar/SearchableWrapper';

// Custom Button component with effects and UI matching the usage in this file
const Button = ({ children, className = '', ...props }) => (
  <button
    type="button"
    className={
      `relative inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 transition-all duration-300 font-medium ${className}`
    }
    {...props}
  >
    {children}
  </button>
);

import PropTypes from 'prop-types';

const LandingPage = ({ onLoginClick }) => {
  return (
    <SearchableWrapper>
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full text-center">
        {/* Hero Section */}
        <div className="mb-12">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white rounded-full shadow-lg">
              <CreditCard className="w-12 h-12 text-blue-600" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
            Online Fee Payment Portal
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Secure, simple, and seamless payments for all students.
          </p>

          {/* Login Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              onClick={() => onLoginClick('student')}
              className="group relative overflow-hidden bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 min-w-[200px]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center justify-center gap-2">
                <GraduationCap className="w-5 h-5" />
                Student Login
              </div>
            </Button>
            
            <Button
              onClick={() => onLoginClick('admin')}
              className="group relative overflow-hidden bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 min-w-[200px]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center justify-center gap-2">
                <Shield className="w-5 h-5" />
                Admin Login
              </div>
            </Button>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure Payments</h3>
            <p className="text-gray-600">Bank-grade security with encrypted transactions</p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <CreditCard className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Multiple Payment Options</h3>
            <p className="text-gray-600">UPI, Net Banking, Credit/Debit Cards supported</p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Student Focused</h3>
            <p className="text-gray-600">Designed specifically for student fee management</p>
          </div>
        </div>
      </div>
    </div>
    </SearchableWrapper>
  );
};

export default LandingPage;
LandingPage.propTypes = {
  onLoginClick: PropTypes.func.isRequired,
};

