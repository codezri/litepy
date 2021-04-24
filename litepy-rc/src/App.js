import './App.css';
import React from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import "prismjs/components/prism-clike";
import 'prismjs/components/prism-python';
import "prismjs/themes/prism.css"
import {PyRunner} from "./PyRunner";

function App() {;
  const pyRunner = new PyRunner();
  const [code, setCode] = React.useState(
    `def main():
  print("Hello World!")

main()
    `
    );
  const [output, setOutput] = React.useState("");
  const [input, setInput] = React.useState("");

  async function runCode() {
    setOutput(await pyRunner.run({
      input,
      code
    }));
  }
  return (
    <div className="litepy">
      <div className="col code-editor">
        <div className="title">Code</div>
        <div className="editor">
        <Editor
          value={code}
          onValueChange={(code) => setCode(code)}
          highlight={(code) => highlight(code, languages.py)}
          padding={10}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            height: "calc(100% - 26px)",
            fontSize: 12,
          }}
        />
        </div>
      </div>
      <div className="col code-config">
        <div className="h-col code-input">
          <div className="title">Input</div>
          <textarea value={input} onChange={(e) => setInput(e.target.value)}></textarea>
          <div>
            <span className="run-btn" onClick={runCode}>▶️</span>
          </div>
        </div>
        <div className="h-col code-output">
          <div className="title">Output</div>
          <textarea value={output} readOnly={true}></textarea>
        </div>
      </div>
    </div>
  );
}

export default App;
