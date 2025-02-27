import React from 'react';
import { Users, Code, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">About CodeViz</h1>
        
        <div className="prose prose-indigo max-w-none">
          <section className="mb-12">
            <h2 className="flex items-center text-2xl font-bold mb-4">
              <Code className="h-6 w-6 mr-2 text-indigo-600" />
              Our Mission
            </h2>
            <p>
              CodeViz was created with a simple mission: to make code execution more transparent and understandable.
              We believe that visualizing code execution is one of the most powerful ways to learn programming concepts
              and debug complex problems.
            </p>
            <p>
              Whether you're a student learning to code, a teacher explaining algorithms, or a professional developer
              debugging a tricky function, CodeViz aims to provide insights that static code analysis cannot.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="flex items-center text-2xl font-bold mb-4">
              <Users className="h-6 w-6 mr-2 text-indigo-600" />
              The Team
            </h2>
            <p>
              CodeViz is developed by a small team of passionate developers and educators who believe in the power
              of visualization for understanding complex systems.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img 
                  src="/Aman.jpeg" 
                  alt="Team member" 
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-center">Aman maurya</h3>
                <p className="text-gray-600 text-center">Learner</p>
                <p className="mt-4 text-gray-700">
                  I am undergrad at IIT Madras, learning failing and developing daily and I love to do that.
                </p>
              </div>
              
            </div>
          </section>
          
          <section className="mb-12">
            <h2 className="flex items-center text-2xl font-bold mb-4">
              <Heart className="h-6 w-6 mr-2 text-indigo-600" />
              Our Values
            </h2>
            <ul>
              <li><strong>Education First:</strong> We believe in making programming concepts accessible to everyone.</li>
              <li><strong>Open Collaboration:</strong> We value community input and open-source principles.</li>
              <li><strong>Continuous Improvement:</strong> We're committed to constantly enhancing our tools based on user feedback.</li>
              <li><strong>Simplicity:</strong> We strive for intuitive interfaces that don't get in the way of learning.</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p>
              We'd love to hear from you! Whether you have feedback, feature requests, or just want to say hello,
              you can reach us at:
            </p>
            <p className="mt-4">
              <strong>Email:</strong> <a href="mailto:info.amanmauryas@gmail.com" className="text-indigo-600 hover:text-indigo-800">info.amanmauryas@gmail.com</a>
            </p>
            <p>
              <strong>Twitter:</strong> <a href="https://twitter.com/amanmauryas" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800">@amanmauryas</a>
            </p>
            
            <div className="mt-8 p-6 bg-indigo-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Join Our Community</h3>
              <p>
                Join our growing community of developers, educators, and students who are passionate about code visualization.
              </p>
              <div className="mt-4">
                <a 
                  href="#" 
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
                >
                  Join Our Discord
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;