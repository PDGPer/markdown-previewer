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
    <>
      <div className="flex">
        <div className="w-1/2">
          <textarea id="editor" className="p-6 w-full min-h-screen resize-none focus:outline-none" value={text} onChange={(e) => setText(e.target.value)}></textarea>
        </div>
        <div id="preview" className="p-6 w-1/2 border-l border-gray-300 prose prose-heading:m-t-0">
          <Markdown>{text}</Markdown>
        </div>
      </div>

      {/* BACKGROUND */}
      <div className="fixed top-0 w-screen h-screen -z-10"></div>
    </>
  );
}

export default App;
