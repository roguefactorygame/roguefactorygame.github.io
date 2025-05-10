import React from "react";
import mermaid from "https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs";
import elkLayouts from "https://cdn.jsdelivr.net/npm/@mermaid-js/layout-elk@0/dist/mermaid-layout-elk.esm.min.mjs";

mermaid.registerLayoutLoaders(elkLayouts);
mermaid.initialize({
  startOnLoad: false,
});

let ID = 0;
export default function Mermaid({ definition }) {
  const id = React.useId();
  const [className] = React.useState(() => `mermaid-${ID++}`);

  React.useEffect(() => {
    mermaid.run({
      nodes: document.querySelectorAll('[class^="mermaid"]'),
    });
  }, [definition, id]);

  return <div className={className}>{definition}</div>;
}
