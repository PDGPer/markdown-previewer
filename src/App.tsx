import { marked } from "marked";
import { useState } from "react";
import { defaultText } from "./defaultText";

marked.use({
  gfm: true,
});

function App() {
  const [text, setText] = useState(defaultText);

  return (
    <div id="container">
      <textarea id="editor" value={text} onChange={(e) => setText(e.target.value)}></textarea>
      <div id="preview" dangerouslySetInnerHTML={{ __html: marked(text) }}></div>
    </div>
  );
}

export default App;
