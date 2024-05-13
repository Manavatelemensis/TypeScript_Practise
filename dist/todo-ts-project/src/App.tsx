import { useState } from "react";

import Tst from "./Tst";

function App() {
  const [ttle, settitle] = useState<string>("");
  const [descri, setdes] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);

 const handlesubmit = () => {
  setSubmitted(true);
  };

  return (
    <>
      <input type="text" onChange={(e) => settitle(e.target.value)} />
      <br />
      <input type="text" onChange={(e) => setdes(e.target.value)} />
      <br />
      <button onClick={handlesubmit}>Submit</button>
      {submitted && <Tst title={ttle} descript={descri} />}
    </>
  );
}
export interface Todo {
  title: string;
  descript: string;
}


export default App;
