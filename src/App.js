//create a react component that inputs a textarea message then performsa fetch request to localhost:3000 gets back a response as a data.message and displays that message in a box below
import React, { useState } from "react";
import './App.css';

function App(){
const [message, setMessage] = useState('');
const [response, setResponse] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:4000', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message }),
    })
    .then((res) => res.json())
    .then((data) => setResponse(data.message));
};

return (
    <div className="App">
        <h1>Digital Investors Hub (Intellegence App)</h1>
        <h2>
          Welcome to the Intellegence App
          <br/>Ask any question and I will answer it correctly for you.
          </h2>
        <form onSubmit={handleSubmit}>  
            <textarea 
            value={message}
            placeholder="Ask Le'Vonte Anything" 
            onChange={(e) => setMessage(e.target.value)} 
            ></textarea>
            <br/>
            <button type="submit">Submit</button>
        </form>
        <br/>
        <div className="messages"> {message}</div>
            <br/>
            <br/>
            {response &&
            <div className="messages">
              <b>Le'Vonte:</b>
              {response}
            </div> 
            }
    </div>
  );
}

export default App