import './App.css';
import { Col, Container, Row } from 'react-bootstrap'

function App() {
  return (
    <body>
    <div>
      <h1 className='App'>Anti-Ai Extensions (for the environment!)</h1>
      <table>
        <tr>
          <td><div className='Extension-Box'><a href="https://chromewebstore.google.com/category/extensions">
            <h3 style={{margin: 0}}>Bat that Chat</h3>
            <p>Spams prompts when you go to most LLM websites.</p>
            </a>
          </div></td>
          <td><div className='Extension-Box'><a href="https://chromewebstore.google.com/category/extensions">
            <h3 style={{margin: 0}}>LLM Redirect</h3>
            <p>Takes you to google when you go to most LLM websites.</p>
            </a></div></td>
        </tr>
        <tr>
          <td><div className='Extension-Box'> <a href="https://chromewebstore.google.com/category/extensions">
            <h3 style={{margin: 0}}>No More Overview</h3>
            <p>Removes the AI overview on google searches.</p>
            </a>
            </div></td>
          <td><div className='Extension-Box'> <a href="https://chromewebstore.google.com/category/extensions"><h3 style={{margin: 0}}>You're Scaring the LLMs</h3>
            <p>The LLMs shake when they see you.</p></a></div></td>
        </tr>
      </table>
      
    </div>
    </body>
  );
}

export default App;
