import { useState } from "react";

import Header from "./components/header";

import initialEmails from "./data/emails";

import "./styles/app.css";

function App() {
  // Use initialEmails for state
  console.log(initialEmails);
  const [emails, setEmails] = useState(initialEmails);
  const [readEmail, setReadEmail] = useState(false);

  return (
    <div className="app">
      <Header />
      <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className="item active"
            // onClick={() => {}}
          >
            <span className="label">Inbox</span>
            <span className="count">?</span>
          </li>
          <li
            className="item"
            // onClick={() => {}}
          >
            <span className="label">Starred</span>
            <span className="count">?</span>
          </li>

          <li className="item toggle">
            <label for="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={false}
              // onChange={() => {}}
            />
          </li>
        </ul>
      </nav>
      <main className="emails">
        <ul>
          {emails.map(function (email) {
            return (
              <li>
                {
                  <li className="email">
                    <div className="select">
                      <input
                        className="select-checkbox"
                        type="checkbox"
                        checked={email.read === true}
                      />
                    </div>
                    <div className="star">
                      <input className="star-checkbox" type="checkbox" />
                    </div>
                    <div className="sender">{email.sender}</div>
                    <div className="title">{email.title}</div>
                  </li>
                }
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
}

export default App;
