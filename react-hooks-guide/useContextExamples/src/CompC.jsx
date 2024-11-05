import React from "react";
import { useContext } from "react";
import { Mycontext } from "./CompA";

export default function CompC() {
  const { text, setText } = useContext(Mycontext);

  return (
    <>
      <div className="container m-5 p-5 border border-dark">
        <h2>Component C</h2>
        <h3>{`Bye ${text}`}</h3>
        <button onClick={() => setText(text == "Suheb" ? "Rinci" : "Suheb")}>
          change
        </button>
      </div>
    </>
  );
}
