import elkLayouts from "https://cdn.jsdelivr.net/npm/@mermaid-js/layout-elk@0/dist/mermaid-layout-elk.esm.min.mjs";
import mermaid from "https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs";
import React from "react";
import cx from 'classnames'
import styles from './Mermaid.module.css'

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
  selection,
  highlight,
}) {
  const id = React.useId();
  const [className] = React.useState(() => `mermaid-${ID++}`);
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    if (!definition) {
      return;
    }

    Promise.resolve()
      .then(() =>  mermaid.run({
        nodes: document.querySelectorAll(`.${className}`),
      }))
      .then(() => {
        const nodes = document.querySelectorAll('[id^="flowchart-T"]');
        for (const node of nodes) {
          const label = node.querySelector("p");
          node.addEventListener("click", () => onClick(label.innerText));
          node.addEventListener("mouseover", () => onMouseOver(label.innerText));
          node.addEventListener("mouseout", () => onMouseOut(label.innerText));
        }
        setIsLoaded(true);
      })
      .catch(console.error);
  }, [definition, id, className]);

  React.useEffect(() => {
    const nodes = document.querySelectorAll('[id^="flowchart-T"]');
    const set = new Set(highlight);
    let selectedNodeId = null;
    for (const node of nodes) {
      const label = node.querySelector("p");
      const text = label.innerText;
      if (set.size === 0) {
        node.style.opacity = 0.8;
        continue;
      }

      if (text === selection) {
        node.style.opacity = 1.0;
        selectedNodeId = node
          .getAttribute("id")
          .replace("flowchart-", "")
          .replace(/-\d+/, "");
      } else if (set.has(text)) {
        node.style.opacity = 0.75;
      } else {
        node.style.opacity = 0.1;
      }
    }

    const edges = document.querySelectorAll(".flowchart-link");
    for (const edge of edges) {
      if (!selectedNodeId) {
        edge.style.opacity = 1.0;
      } else if (edge.getAttribute("id").includes(`${selectedNodeId}_`)) {
        edge.style.opacity = 1.0;
      } else {
        edge.style.opacity = 0.1;
      }
    }
  }, [selection, (highlight ?? []).join(',')]);

  return <div className={cx(className, styles.MermaidContainer, isLoaded && styles.MermaidContainerLoaded)}>{definition}</div>;
}
