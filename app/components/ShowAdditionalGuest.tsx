"use client";

import { useState } from "react";

export const ShowAdditionalGuest = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      {!show && (
        <button type="button" onClick={() => setShow(true)}>
          Visa +1
        </button>
      )}

      {show && (
        <fieldset
          style={{ marginTop: 8, padding: 8, border: "1px solid #ddd" }}
        >
          <legend>Ytterligare gäst</legend>

          <label style={{ display: "block" }}>
            Förnamn
            <input name={`guests[1][firstName]`} />
          </label>

          <label style={{ display: "block" }}>
            Efternamn
            <input name={`guests[1][lastName]`} />
          </label>

          <label style={{ display: "block" }}>
            Email
            <input name={`guests[1][email]`} type="email" />
          </label>

          <label style={{ display: "block" }}>
            Kommer till kyrkan?
            <select name={`guests[1][attendingChurch]`} defaultValue="yes">
              <option value="yes">Ja</option>
              <option value="no">Nej</option>
            </select>
          </label>

          <label style={{ display: "block" }}>
            Kommer till festen?
            <select name={`guests[1][attendingParty]`} defaultValue="yes">
              <option value="yes">Ja</option>
              <option value="no">Nej</option>
            </select>
          </label>

          <label style={{ display: "block" }}>
            Allergier / Övrigt
            <input name={`guests[1][allergies]`} />
          </label>

          <div style={{ marginTop: 8 }}>
            <label style={{ display: "block" }}>
              Önskad låt 1
              <input name={`guests[1][song1]`} />
            </label>
            <label style={{ display: "block" }}>
              Önskad låt 2
              <input name={`guests[1][song2]`} />
            </label>
          </div>

          <div style={{ marginTop: 8 }}>
            <button type="button" onClick={() => setShow(false)}>
              Ta bort +1
            </button>
          </div>
        </fieldset>
      )}
    </div>
  );
};
