import React from 'react';
import { Link } from 'react-router-dom';
import { Code, BookOpen, Info, ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Visualize Your Code Execution
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Step through your code line by line, watch variables change, and understand program flow with our interactive visualization tool.
        </p>
        <Link
          to="/visualizer"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
        >
          Try Visualizer <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
          <div className="flex justify-center mb-4">
            <div className="bg-indigo-100 p-3 rounded-full">
              <Code className="h-8 w-8 text-indigo-600" />
            </div>
          </div>
          <h2 className="text-xl font-semibold text-center mb-2">Interactive Code Editor</h2>
          <p className="text-gray-600 text-center">
            Write and edit code with syntax highlighting, line numbers, and auto-completion.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
          <div className="flex justify-center mb-4">
            <div className="bg-indigo-100 p-3 rounded-full">
              <BookOpen className="h-8 w-8 text-indigo-600" />
            </div>
          </div>
          <h2 className="text-xl font-semibold text-center mb-2">Step-by-Step Execution</h2>
          <p className="text-gray-600 text-center">
            Execute your code line by line and see exactly what happens at each step.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
          <div className="flex justify-center mb-4">
            <div className="bg-indigo-100 p-3 rounded-full">
              <Info className="h-8 w-8 text-indigo-600" />
            </div>
          </div>
          <h2 className="text-xl font-semibold text-center mb-2">Variable Tracking</h2>
          <p className="text-gray-600 text-center">
            Monitor how variables change throughout execution to understand your code better.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Ready to visualize your code?
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Start using our code visualization tool today and gain deeper insights into how your code works.
        </p>
        <Link
          to="/visualizer"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
        >
          Get Started <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </div>
  );
};

export default Home;