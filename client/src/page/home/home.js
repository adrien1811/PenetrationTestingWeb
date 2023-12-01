import React, { useState } from 'react';

function Home() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/execute', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ input }),
      });

      const data = await response.text();
      setOutput(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="App">
      <h1>Command Injection Example</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter command"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Execute</button>
      </form>
      <div>
        <h2>Output:</h2>
        <p>{output}</p>
      </div>
    </div>
  );
}

export default Home;