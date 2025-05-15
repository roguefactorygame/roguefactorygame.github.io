import Panzoom from "@panzoom/panzoom";
import React from "react";
import recipes from "../../data/recipes.json";
import { toChart } from "../../utils/toChart";
import Mermaid from "./Mermaid";
import styles from "./RecipeGraph.module.css";

export default function RecipeGraph({ ...props }) {
  const [element, setElement] = React.useState(null);
  const { mermaid, recipeMap, ingredientMap } = React.useMemo(
    () => toChart(recipes),
    []
  );

  const [selectedRecipeName, setSelectedRecipeName] = React.useState(null);
  const recipe = selectedRecipeName && recipeMap[selectedRecipeName];
  const products = selectedRecipeName && ingredientMap[selectedRecipeName];
  const ingredientNames = React.useMemo(
    () => recipe && recipe.ingredients.map((ingredient) => ingredient.name),
    [recipe]
  );
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

  const onClick = (name) => {
    setSelectedRecipeName(name);
  };

  const onMouseOver = (name) => {
    // setHoveredRecipeName(name);
  };

  const onMouseOut = (name) => {
    // setHoveredRecipeName(null);
  };

  return (
    <div {...props} className={styles.RecipeGraph}>
      <div ref={setElement} onWheel={onWheel}>
        <Mermaid
          definition={mermaid}
          onClick={onClick}
          onMouseOut={onMouseOut}
          onMouseOver={onMouseOver}
          selection={selectedRecipeName}
          highlight={[...(products || []), ...(ingredientNames || [])]}
        />
      </div>
      <aside className={styles.RecipeGraphInfo}>
        {recipe && (
          <>
            <button
              className={styles.RecipeGraphInfoClose}
              onClick={() => setSelectedRecipeName(null)}
            />
            <header>{selectedRecipeName}</header>
            <section>{recipe.description}</section>
            <header>Ingredients:</header>
            <section>
              <ul>
                {recipe.ingredients.map((ingredient) => (
                  <li>
                    -{" "}
                    <a onClick={() => setSelectedRecipeName(ingredient.name)}>
                      {ingredient.name}
                    </a>{" "}
                    {ingredient.quantity > 1 ? ` x ${ingredient.quantity}` : ""}
                  </li>
                ))}
              </ul>
            </section>
            {products && (
              <>
                <header>Used in:</header>
                <section>
                  <ul>
                    {products.map((product) => (
                      <li>
                        -{" "}
                        <a onClick={() => setSelectedRecipeName(product)}>
                          {product}
                        </a>
                      </li>
                    ))}
                  </ul>
                </section>
              </>
            )}
          </>
        )}
      </aside>
    </div>
  );
}
