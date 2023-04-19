import React, { useState, useEffect } from "react";
import axios from "axios";
import { truncateAddress } from "./helpers";
import getNode from "./getNode";

function LinksComponent() {
  const [links, setLinks] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      let url = "https://k2-tasknet.koii.live";
      let taskid = "HjWJmb2gcwwm99VhyNVJZir3ToAJTfUB4j7buWnMMUEP";
      const selectnode = await getNode(url, taskid);
      const pubKey = "wZfLZnDQxY94WbYv32ugtNhXhPz6eWD7ZhKECdNH659";
      const response = await axios.get(
        `${selectnode}/task/${taskid}/linktree/get/${pubKey}`
      );
      console.log(response.data);

      try {

        const linktreeData = response.data.data.linktree;
        const publicKey = response.data.publicKey;
        const formattedLinks = linktreeData.map((link) => ({
          name: link.label,
          url: link.redirectUrl,
        }));
        console.log(response);
        setTitle(publicKey);
        setLinks(formattedLinks);
      } catch (error) {
        console.error("Error fetching data:", error);
    }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <p className="public-key">{truncateAddress(title)} </p>
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
