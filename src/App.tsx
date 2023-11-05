import Markdown from "markdown-to-jsx";
import { useState } from "react";

function App() {
  const [text, setText] = useState("##←Write some markup on the left field!");

  return (
    <>
      <div className="flex">
        <div className="w-1/2">
          <textarea className="p-4 w-full min-h-screen bg-orange-50 resize-none focus:outline-none" value={text} onChange={(e) => setText(e.target.value)}></textarea>
        </div>
        <div className="p-4 w-1/2 prose">
          <Markdown>{text}</Markdown>
        </div>
      </div>

      {/* BACKGROUND STARTS */}
      <div className="fixed top-0 w-screen h-screen bg-orange-100 -z-10"></div>
      {/* BACKGROUND ENDS */}
    </>
  );
}

export default App;
