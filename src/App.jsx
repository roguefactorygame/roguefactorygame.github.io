import React from "react";
import Mermaid from "./Mermaid";
import recipes from "./data/recipes.json";
import { toChart } from "./utils/toChart";

export default function App() {
  const graph = React.useMemo(() => toChart(recipes), []);

  return (
    <main>
      <h1>Rogue Factory</h1>
      <Mermaid definition={graph} />
    </main>
  );
}
