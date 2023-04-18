import React from 'react';
import './App.css';

function App(props) {
  const { title, links } = props;

  return (
    <div className="App" style={{backgroundImage: 'url(https://www.example.com/sea-ships.jpg)', backgroundSize: 'cover'}}>
      <h1>{title}</h1>
      <div className="links">
        {links.map((link, index) => (
          <a key={index} className="link" href={link.url} target="_blank" rel="noopener noreferrer">
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
}

export default App;
