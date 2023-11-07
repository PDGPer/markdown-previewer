# markdown-previewer

Parallel editor and markdown previewer built in React.

## Goals

Another quick challenge to wrap up fCC certificates while trying out some tools I haven't used that much (Vite, Tailwind and Codeium).

## Conclusion

Core functionality of the app was a breeze to put together, as there are markdown parsers aplenty and they're easy to use. Tried three different ones until I found one (react-markdown with remark-breaks plugin) that seemed to fit the use case best.

Codeium has continued to show it's strengths as a tool to get simple but boring work out of the way quickly. Still keeping it away from any complexity, but it's a great search tool if you know when to disregard it.

The biggest pain was finding out that Tailwind doesn't play well with Markdown, having to use their typography plugin to fix it and realizing it would still be a whole thing to customize Markdown CSS, so I just remade the styling with regular CSS.
