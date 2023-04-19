import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';

function LinksComponent() {
  const [links, setLinks] = useState([]);
  const [title, setTitle] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pubKey = 'wZfLZnDQxY94WbYv32ugtNhXhPz6eWD7ZhKECdNH659'
        const response = await axios.get(`https://k2-tasknet-ports-2.koii.live/task/HjWJmb2gcwwm99VhyNVJZir3ToAJTfUB4j7buWnMMUEP/linktree/get/${pubKey}`);
        const linktreeData = response.data.data.linktree;
        const publicKey = response.data.publicKey;
        const formattedLinks = linktreeData.map(link => ({ name: link.label, url: link.redirectUrl }));

        setTitle(publicKey);
        setLinks(formattedLinks);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1 class="title">Link Tree <a href="https://www.koii.network/" class="by-koii">By Koii Network</a></h1>
      <h1 class="title">Public key:  {title} </h1>
      <h1 class="title">Links:</h1>
      <div className="links">
      {links.map((link, index) => (
        <div key={index}>
          <a href={link.url} className="link" target="_blank" rel="noopener noreferrer">{link.name}</a>
        </div>
      ))}
      </div>
    </div>
  );
}

export default LinksComponent;

