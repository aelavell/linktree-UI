import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import LinksComponent from "./LinksComponent";

const App = () => {
  const [publicKey, setPublicKey] = useState("");
  const [links, setLinks] = useState([]);
  const [error, setError] = useState(false);
  const [userDetailsFetched, setUserDetailsFetched] = useState(false);

  const fetchData = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://k2-tasknet-ports-2.koii.live/task/HjWJmb2gcwwm99VhyNVJZir3ToAJTfUB4j7buWnMMUEP/linktree/get/${publicKey}`
      );
      const linktreeData = response.data.data.linktree;
      const formattedLinks = linktreeData.map((link) => ({
        name: link.label,
        url: link.redirectUrl,
      }));

      setLinks(formattedLinks);
      setPublicKey(publicKey);
      setError(false);
      setUserDetailsFetched(true);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(true);
      setPublicKey("");
    }
  };

  return (
    <>
      {userDetailsFetched ? (
        <LinksComponent links={links} publicKey={publicKey} />
      ) : (
        <div className="container public-key-input-container">
          <div>
            <h1>Enter Public Key Address</h1>
            <form className="input-container" onSubmit={fetchData}>
              <input
                required
                className="public-key-input"
                placeholder="wZfeWD7ZhKECdNH65932ugtNhXhPz6"
                value={publicKey}
                onChange={(e) => setPublicKey(e.target.value)}
              />
              <input
                type="submit"
                value="Go"
                className="public-key-input submit"
              />
            </form>
            {error && (
              <p className="error">
                Error in fetching data, make sure public key address is correct.
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default App;
