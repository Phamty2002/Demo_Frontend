import logo from './logo.svg';
import avatar from './avatar.jpg'; // Import your avatar image
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={avatar} className="Avatar" alt="avatar" /> {/* Your avatar */}
        <h1>Hello World</h1> {/* Your name */}
        <p>Web Application Project</p> {/* Your title or description */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
