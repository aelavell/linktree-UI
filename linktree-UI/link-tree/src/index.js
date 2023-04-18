import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const title = 'Spheron';
const finTitle = 'Spheron' + " " + "linktree"
const links = [
  { name: 'Homepage', url: 'https://spheron.network/' },
  { name: 'Twitter', url: 'https://twitter.com/blockchainbalak' },
  { name: 'Github', url: 'https://github.com/spheronFdn/' },
  
];

ReactDOM.render(
  <React.StrictMode>
    <App title ={finTitle} links={links} />
  </React.StrictMode>,
  document.getElementById('root')
);
