import React from "react";
import mermaid from "https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs";
import elkLayouts from "https://cdn.jsdelivr.net/npm/@mermaid-js/layout-elk@0/dist/mermaid-layout-elk.esm.min.mjs";

mermaid.registerLayoutLoaders(elkLayouts);
mermaid.initialize({
  startOnLoad: false,
});

let ID = 0;
export default function Mermaid({
  definition,
  onClick,
  onMouseOver,
  onMouseOut,
}) {
  const id = React.useId();
  const [className] = React.useState(() => `mermaid-${ID++}`);

  React.useEffect(() => {
    Promise.resolve(
      mermaid.run({
        nodes: document.querySelectorAll('[class^="mermaid"]'),
      })
    ).then(() => {
      const nodes = document.querySelectorAll('[id^="flowchart-T"]');
      for (const node of nodes) {
        const label = node.querySelector("p");
        node.addEventListener("click", () => onClick(label.innerText));
        node.addEventListener("mouseover", () => onMouseOver(label.innerText));
        node.addEventListener("mouseout", () => onMouseOut(label.innerText));
      }
    });
  }, [definition, id]);

  return <div className={className}>{definition}</div>;
}
