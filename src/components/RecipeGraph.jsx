import React from "react";
import { toChart } from "../utils/toChart";
import Mermaid from "./Mermaid";
import recipes from "../data/recipes.json";
import Panzoom from "@panzoom/panzoom";
import styles from "./RecipeGraph.module.css";

export default function RecipeGraph({ ...props }) {
  const [element, setElement] = React.useState(null);
  const graph = React.useMemo(() => toChart(recipes), []);
  const panzoomRef = React.useRef(null);

  React.useEffect(() => {
    if (element) {
      panzoomRef.current = new Panzoom(element);
    }
  }, [element]);

  const onWheel = (evt) => {
    if (panzoomRef.current) {
      panzoomRef.current.zoomWithWheel(evt);
    }
  };

  return (
    <div {...props} className={styles.RecipeGraph}>
      <div ref={setElement} onWheel={onWheel}>
        <Mermaid definition={graph} />
      </div>
    </div>
  );
}
