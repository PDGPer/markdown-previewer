import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import { defaultText } from "./defaultText";

function App() {
  const [text, setText] = useState(defaultText);

  return (
    <div id="container">
      <textarea id="editor" value={text} onChange={(e) => setText(e.target.value)}></textarea>

      <div id="preview">
        <ReactMarkdown remarkPlugins={[remarkBreaks]}>{text}</ReactMarkdown>
      </div>
    </div>
  );
}

export default App;
