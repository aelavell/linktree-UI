import React from "react";
import { truncateAddress } from "./helpers";

function LinksComponent({ links, publicKey }) {
  return (
    <div className="container">
      <p className="public-key">{truncateAddress(publicKey)} </p>
      <div className="links">
        {links.map((link, index) => (
          <>
            <a
              className="link"
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.name}
            </a>
          </>
        ))}
      </div>
      <div className="footer">
        Link Tree{" "}
        <a href="https://www.koii.network/" className="by-koii">
          By Koii Network
        </a>
      </div>
    </div>
  );
}

export default LinksComponent;
