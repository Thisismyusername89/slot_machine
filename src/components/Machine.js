import React from "react";
import { useState, useEffect } from "react";

export default function Machine({ fruits }) {
  const [s1, sets1] = useState(Math.floor(Math.random() * fruits.length));
  const [s2, sets2] = useState(Math.floor(Math.random() * fruits.length));
  const [s3, sets3] = useState(Math.floor(Math.random() * fruits.length));

  useEffect(() => {
    document.title = tryluck();
  });
  function setter() {
    sets1(Math.floor(Math.random() * fruits.length));
    sets2(Math.floor(Math.random() * fruits.length));
    sets3(Math.floor(Math.random() * fruits.length));
  }

  function tryluck() {
    let result;
    if (s1 === s2 && s1 === s3) {
      result = "you win !!!";
    } else {
      result = "you lose !!!";
    }
    return result;
  }
  return (
    <div>
      <h1>
        {fruits[s1]}
        {fruits[s2]}
        {fruits[s3]}
      </h1>
      <p>{tryluck()}</p>
      <button onClick={setter}> retry </button>
    </div>
  );
}
