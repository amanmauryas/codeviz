import React, { useState, useEffect, useRef } from 'react';
import Editor from '@monaco-editor/react';
import { Play, Pause, SkipForward, SkipBack, RefreshCw, Terminal, Code } from 'lucide-react';


// Sample code for initial editor content
const sampleCode = `// Sample JavaScript code
function fibonacci(n) {
  if (n <= 1) return n;
  
  let a = 0;
  let b = 1;
  let temp;
  
  for (let i = 2; i <= n; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }
  
  return b;
}

// Calculate the 10th Fibonacci number
const result = fibonacci(10);
console.log("The 10th Fibonacci number is:", result);
`;

interface Variable {
  name: string;
  value: any;
  type: string;
}

const Visualizer: React.FC = () => {
  const [code, setCode] = useState<string>(sampleCode);
  const [language, setLanguage] = useState<string>("javascript");
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [currentLine, setCurrentLine] = useState<number>(0);
  const [variables, setVariables] = useState<Variable[]>([]);
  const [output, setOutput] = useState<string[]>([]);
  const [totalLines, setTotalLines] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  const editorRef = useRef<any>(null);
  const decorationsRef = useRef<any>([]);
  
  // Handle editor mounting
  const handleEditorDidMount = (editor: any) => {
    editorRef.current = editor;
    setTotalLines(code.split('\n').length);
  };
  
  // Update code when editor content changes
  const handleEditorChange = (value: string | undefined) => {
    if (value !== undefined) {
      setCode(value);
      setTotalLines(value.split('\n').length);
      resetExecution();
    }
  };
  
  // Reset execution state
  const resetExecution = () => {
    setIsRunning(false);
    setCurrentLine(0);
    setVariables([]);
    setOutput([]);
    clearLineHighlight();
  };
  
  // Highlight the current line
  const highlightLine = (lineNumber: number) => {
    if (!editorRef.current) return;
    
    clearLineHighlight();
    
    const newDecorations = editorRef.current.deltaDecorations([], [
      {
        range: {
          startLineNumber: lineNumber,
          startColumn: 1,
          endLineNumber: lineNumber,
          endColumn: 1000
        },
        options: {
          isWholeLine: true,
          className: 'current-line-highlight',
          glyphMarginClassName: 'current-line-glyph'
        }
      }
    ]);
    
    decorationsRef.current = newDecorations;
  };
  
  // Clear line highlighting
  const clearLineHighlight = () => {
    if (editorRef.current && decorationsRef.current.length) {
      editorRef.current.deltaDecorations(decorationsRef.current, []);
      decorationsRef.current = [];
    }
  };
  
  // Simulate code execution
  const executeCode = () => {
    setIsLoading(true);
    
    // This is a simplified simulation of code execution
    // In a real implementation, you would need a proper code interpreter
    
    setTimeout(() => {
      // Reset state
      setVariables([]);
      setOutput([]);
      setCurrentLine(1);
      setIsRunning(true);
      setIsLoading(false);
      
      // For the fibonacci example, simulate variable states
      if (code.includes('fibonacci')) {
        simulateFibonacciExecution();
      } else {
        // Generic simulation for other code
        setOutput(['Code execution started...', 'Output will appear here']);
        setVariables([
          { name: 'result', value: 'undefined', type: 'undefined' }
        ]);
      }
    }, 1000);
  };
  
  // Simulate Fibonacci execution for demo purposes
  const simulateFibonacciExecution = () => {
    const simulatedSteps = [
      {
        line: 2,
        variables: [{ name: 'n', value: '10', type: 'number' }],
        output: []
      },
      {
        line: 3,
        variables: [{ name: 'n', value: '10', type: 'number' }],
        output: []
      },
      {
        line: 5,
        variables: [
          { name: 'n', value: '10', type: 'number' },
          { name: 'a', value: '0', type: 'number' }
        ],
        output: []
      },
      {
        line: 6,
        variables: [
          { name: 'n', value: '10', type: 'number' },
          { name: 'a', value: '0', type: 'number' },
          { name: 'b', value: '1', type: 'number' }
        ],
        output: []
      },
      {
        line: 9,
        variables: [
          { name: 'n', value: '10', type: 'number' },
          { name: 'a', value: '0', type: 'number' },
          { name: 'b', value: '1', type: 'number' },
          { name: 'i', value: '2', type: 'number' }
        ],
        output: []
      },
      {
        line: 10,
        variables: [
          { name: 'n', value: '10', type: 'number' },
          { name: 'a', value: '0', type: 'number' },
          { name: 'b', value: '1', type: 'number' },
          { name: 'i', value: '2', type: 'number' },
          { name: 'temp', value: '1', type: 'number' }
        ],
        output: []
      },
      {
        line: 11,
        variables: [
          { name: 'n', value: '10', type: 'number' },
          { name: 'a', value: '1', type: 'number' },
          { name: 'b', value: '1', type: 'number' },
          { name: 'i', value: '2', type: 'number' },
          { name: 'temp', value: '1', type: 'number' }
        ],
        output: []
      },
      {
        line: 12,
        variables: [
          { name: 'n', value: '10', type: 'number' },
          { name: 'a', value: '1', type: 'number' },
          { name: 'b', value: '1', type: 'number' },
          { name: 'i', value: '2', type: 'number' },
          { name: 'temp', value: '1', type: 'number' }
        ],
        output: []
      },
      // More steps would follow for the complete execution
      {
        line: 15,
        variables: [
          { name: 'n', value: '10', type: 'number' },
          { name: 'a', value: '34', type: 'number' },
          { name: 'b', value: '55', type: 'number' },
          { name: 'i', value: '10', type: 'number' },
          { name: 'temp', value: '55', type: 'number' }
        ],
        output: []
      },
      {
        line: 19,
        variables: [
          { name: 'result', value: '55', type: 'number' }
        ],
        output: []
      },
      {
        line: 20,
        variables: [
          { name: 'result', value: '55', type: 'number' }
        ],
        output: ['The 10th Fibonacci number is: 55']
      }
    ];
    
    setCurrentLine(simulatedSteps[0].line);
    setVariables(simulatedSteps[0].variables);
    setOutput(simulatedSteps[0].output);
    
    // Store the steps for navigation
    window.simulatedSteps = simulatedSteps;
    window.currentStepIndex = 0;
  };
  
  // Move to the next line
  const nextLine = () => {
    if (!window.simulatedSteps || window.currentStepIndex >= window.simulatedSteps.length - 1) return;
    
    window.currentStepIndex++;
    const step = window.simulatedSteps[window.currentStepIndex];
    
    setCurrentLine(step.line);
    setVariables(step.variables);
    setOutput(step.output);
  };
  
  // Move to the previous line
  const previousLine = () => {
    if (!window.simulatedSteps || window.currentStepIndex <= 0) return;
    
    window.currentStepIndex--;
    const step = window.simulatedSteps[window.currentStepIndex];
    
    setCurrentLine(step.line);
    setVariables(step.variables);
    setOutput(step.output);
  };
  
  // Toggle play/pause
  const togglePlayPause = () => {
    setIsRunning(!isRunning);
  };
  
  // Update line highlighting when current line changes
  useEffect(() => {
    if (currentLine > 0) {
      highlightLine(currentLine);
    } else {
      clearLineHighlight();
    }
  }, [currentLine]);
  
  // Add custom styles for line highlighting
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      .current-line-highlight {
        background-color: rgba(99, 102, 241, 0.2);
        font-weight: bold;
        box-shadow: 0 0 10px rgba(99, 102, 241, 0.5);
      }
      .current-line-glyph {
        background-color: #6366f1;
        width: 4px !important;
        margin-left: 3px;
        box-shadow: 0 0 8px rgba(99, 102, 241, 0.8);
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-6">Code Visualizer</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Main Content Area - Code Editor and Variables */}
        <div className="lg:col-span-8 space-y-6">
          {/* Code Editor Panel */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-indigo-100">
            <div className="border-b border-indigo-100 p-4 flex justify-between items-center bg-gradient-to-r from-indigo-50 to-purple-50">
              <div className="flex items-center">
                <label htmlFor="language-select" className="mr-2 text-sm font-medium text-gray-700">
                  Language:
                </label>
                <select
                  id="language-select"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="block w-32 pl-3 pr-10 py-1 text-base border-indigo-200 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                >
                  <option value="javascript">JavaScript</option>
                  <option value="typescript">TypeScript</option>
                  <option value="python">Python</option>
                  <option value="java">Java</option>
                  <option value="csharp">C#</option>
                </select>
              </div>
              
              <button
                onClick={resetExecution}
                className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200"
              >
                <RefreshCw className="h-4 w-4 mr-1" />
                Reset
              </button>
            </div>
            
            <div className="h-[450px]">
              <Editor
                height="100%"
                language={language}
                value={code}
                onChange={handleEditorChange}
                onMount={handleEditorDidMount}
                options={{
                  minimap: { enabled: false },
                  lineNumbers: 'on',
                  scrollBeyondLastLine: false,
                  fontSize: 14,
                  automaticLayout: true,
                  fontFamily: "'Fira Code', monospace",
                  fontLigatures: true,
                }}
                theme="vs-dark"
              />
            </div>
            
            <div className="border-t border-indigo-100 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <button
                  onClick={executeCode}
                  disabled={isLoading}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg transition-all duration-200"
                >
                  {isLoading ? (
                    <>
                      <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                      Loading...
                    </>
                  ) : (
                    <>
                      <Play className="h-4 w-4 mr-2" />
                      Run
                    </>
                  )}
                </button>
                
                <button
                  onClick={togglePlayPause}
                  disabled={!isRunning || isLoading}
                  className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow-md transition-all duration-200"
                >
                  {isRunning ? (
                    <Pause className="h-4 w-4" />
                  ) : (
                    <Play className="h-4 w-4" />
                  )}
                </button>
                
                <button
                  onClick={previousLine}
                  disabled={!isRunning || isLoading || !window.simulatedSteps || window.currentStepIndex <= 0}
                  className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow-md transition-all duration-200"
                >
                  <SkipBack className="h-4 w-4" />
                </button>
                
                <button
                  onClick={nextLine}
                  disabled={!isRunning || isLoading || !window.simulatedSteps || window.currentStepIndex >= (window.simulatedSteps.length - 1)}
                  className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow-md transition-all duration-200"
                >
                  <SkipForward className="h-4 w-4" />
                </button>
              </div>
              
              <div className="text-sm text-indigo-600 font-medium">
                Line: {currentLine > 0 ? currentLine : '-'} / {totalLines}
              </div>
            </div>
          </div>
          
          {/* Console Output Panel */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-indigo-100">
            <div className="border-b border-indigo-100 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 flex items-center">
              <Terminal className="h-5 w-5 mr-2 text-indigo-600" />
              <h2 className="text-lg font-medium text-gray-900">Console Output</h2>
            </div>
            <div className="p-4 bg-gray-900 text-white font-mono text-sm h-[150px] overflow-y-auto">
              {output.length > 0 ? (
                output.map((line, index) => (
                  <div key={index} className="mb-1">
                    <span className="text-indigo-400">&gt; </span>
                    {line}
                  </div>
                ))
              ) : (
                <div className="text-indigo-400">
                  Console output will appear here...
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Variables Panel - Now takes full height on the right side */}
        <div className="lg:col-span-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-indigo-100 h-full">
            <div className="border-b border-indigo-100 p-4 bg-gradient-to-r from-indigo-50 to-purple-50">
              <h2 className="text-lg font-medium text-gray-900">Variables</h2>
            </div>
            <div className="p-4 h-[640px] overflow-y-auto">
              {variables.length > 0 ? (
                <table className="min-w-full divide-y divide-indigo-200">
                  <thead className="bg-indigo-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-indigo-700 uppercase tracking-wider">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-indigo-700 uppercase tracking-wider">
                        Value
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-indigo-700 uppercase tracking-wider">
                        Type
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-indigo-100">
                    {variables.map((variable, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-indigo-50'}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-indigo-900">
                          {variable.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-indigo-700 font-mono">
                          {variable.value}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-indigo-500">
                          <span className="px-2 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 rounded-full">
                            {variable.type}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-center py-8 text-gray-500">
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                    <Code className="h-8 w-8 text-indigo-600" />
                  </div>
                  <p className="text-lg font-medium text-indigo-900 mb-2">No Variables Yet</p>
                  <p className="text-gray-500 max-w-xs">
                    Run your code to see variables and watch how they change during execution.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Add these to the window object for the simulation
declare global {
  interface Window {
    simulatedSteps: any[];
    currentStepIndex: number;
  }
}

export default Visualizer;