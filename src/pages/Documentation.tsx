import React from 'react';
import { BookOpen, Code, Terminal, Zap, HelpCircle } from 'lucide-react';

const Documentation: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Documentation</h1>
        
        <div className="prose prose-indigo max-w-none">
          <section className="mb-12">
            <h2 className="flex items-center text-2xl font-bold mb-4">
              <BookOpen className="h-6 w-6 mr-2 text-indigo-600" />
              Getting Started
            </h2>
            <p>
              CodeViz is a powerful tool for visualizing code execution. It allows you to step through your code line by line, 
              observe how variables change, and understand the flow of your program.
            </p>
            <p>
              To get started, navigate to the Visualizer page, write or paste your code in the editor, and click the "Run" button.
              You can then use the playback controls to step through the execution.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="flex items-center text-2xl font-bold mb-4">
              <Code className="h-6 w-6 mr-2 text-indigo-600" />
              Supported Languages
            </h2>
            <p>
              CodeViz currently supports the following programming languages:
            </p>
            <ul>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>Python</li>
              <li>Java</li>
              <li>C#</li>
            </ul>
            <p>
              Each language has full syntax highlighting and basic execution visualization. More languages will be added in future updates.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="flex items-center text-2xl font-bold mb-4">
              <Terminal className="h-6 w-6 mr-2 text-indigo-600" />
              Using the Visualizer
            </h2>
            <h3 className="text-xl font-semibold mt-6 mb-3">Code Editor</h3>
            <p>
              The code editor provides syntax highlighting, line numbers, and basic auto-completion. 
              You can write or paste your code directly into the editor.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Execution Controls</h3>
            <p>
              After clicking "Run", you can use the following controls to navigate through your code:
            </p>
            <ul>
              <li><strong>Play/Pause</strong>: Start or pause automatic execution</li>
              <li><strong>Next Line</strong>: Move to the next line of code</li>
              <li><strong>Previous Line</strong>: Move to the previous line of code</li>
              <li><strong>Reset</strong>: Reset the execution and clear all state</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Variables Panel</h3>
            <p>
              The Variables panel shows all variables in your code and their current values. 
              As you step through your code, you'll see how these values change.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Console Output</h3>
            <p>
              The Console Output panel shows any output from your code, such as console.log statements in JavaScript.
            </p>
          </section>
          
          <section className="mb-12">
            <h2 className="flex items-center text-2xl font-bold mb-4">
              <Zap className="h-6 w-6 mr-2 text-indigo-600" />
              Tips and Tricks
            </h2>
            <ul>
              <li>Start with small code snippets to understand the visualization better</li>
              <li>Use console.log statements to track important values</li>
              <li>For complex algorithms, add comments to explain each step</li>
              <li>Try different languages to see how the same algorithm looks in each</li>
            </ul>
          </section>
          
          <section>
            <h2 className="flex items-center text-2xl font-bold mb-4">
              <HelpCircle className="h-6 w-6 mr-2 text-indigo-600" />
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Is my code saved?</h3>
                <p>
                  Currently, code is not saved between sessions. We recommend copying your code to a local file if you want to save it.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Can I import external libraries?</h3>
                <p>
                  Not at this time. The visualizer is designed for standalone code snippets without external dependencies.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Is there a limit to how much code I can run?</h3>
                <p>
                  For performance reasons, we recommend keeping your code under 200 lines. Very complex code may not visualize correctly.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">How accurate is the visualization?</h3>
                <p>
                  The visualization is a simplified representation of code execution. It may not capture all nuances of language-specific behavior.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Documentation;