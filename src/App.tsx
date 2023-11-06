import Markdown from "markdown-to-jsx";
import { useState } from "react";

function App() {
  const [text, setText] = useState(
    `#Heading 1

##Heading 2

[Link](#)

\`Inline code\`  

\`\`\`Code block\`\`\`

- List item

> Blockquote

![Image](./image.svg)

**Bold text**
`
  );

  return (
    <div className="container">
      <textarea id="editor" value={text} onChange={(e) => setText(e.target.value)}></textarea>
      <Markdown id="preview">{text}</Markdown>
    </div>
  );
}

export default App;
