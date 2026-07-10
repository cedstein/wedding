"use client";

import { useState } from "react";

export const ShowAdditionalGuest = () => {
  const [show, setShow] = useState(false);

  if (show) {
    return (
      <div>
        <input name="guest-1" />
        <input name="email-1" />
      </div>
    );
  }

  return (
    <>
      <button onClick={() => setShow(true)}>Visa +1</button>
    </>
  );
};
