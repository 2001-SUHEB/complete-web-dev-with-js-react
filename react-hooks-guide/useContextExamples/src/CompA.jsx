import { useState, createContext } from "react";
import CompB from "./CompB";

export const Mycontext = createContext();
export default function CompA() {
  const [text, setText] = useState("Suheb");

  return (
    <>
      <Mycontext.Provider value={{ text, setText }}>
        <div className="container m-5 p-5 border border-dark">
          <h2>Component A</h2>
          <h3>{`hello ${text}`}</h3>
          <CompB />
        </div>
      </Mycontext.Provider>
    </>
  );
}
