import React, { useState, useEffect } from "react";
import { truncateAddress } from "./helpers";
import getNode from "./getNode";
import axios from "axios";

function LinksComponent({ formattedLinks, publicKey }) {
  return (
    <div className="container">
      <p className="public-key">{truncateAddress(publicKey)}</p>
      <div className="links">
        {formattedLinks.map((link, index) => (
          <a
            className="link"
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.name}
          </a>
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

