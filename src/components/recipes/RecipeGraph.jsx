import Panzoom from "@panzoom/panzoom";
import React from "react";
import cx from "classnames";
import recipes from "../../data/recipes.json";
import { toChart } from "../../utils/toChart";
import Mermaid from "./Mermaid";
import styles from "./RecipeGraph.module.css";
import { ElementalType } from "../../utils/enums";

export default function RecipeGraph({ onHover, ...props }) {
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

  const getColorStyle = (name) => {
    const recipe = recipeMap[name];
    if (!recipe) {
      return null;
    }

    if (!recipe?.stats?.type) {
      return { color: "var(--rf-potion)" };
    }

    return {
      color: `var(--rf-${
        ElementalType[recipe?.stats?.type]?.toLowerCase() ?? "potion"
      })`,
    };
  };

  const ingredientCount = React.useMemo(() => {
    if (!recipe) {
      return 0;
    }

    return recipe.ingredients.reduce(
      (res, ingredient) => res + ingredient.quantity,
      0
    );
  }, [recipe]);
  const panzoomRef = React.useRef(null);

  const ingredientChain = React.useMemo(() => {
    if (!recipe) {
      return [];
    }

    const allIngredients = new Set();
    let currentDepth = new Set([recipe.name]);
    let failsafe = 0;
    while (currentDepth.size && failsafe++ < 20) {
      const nextDepth = new Set();
      for (const recipeName of currentDepth) {
        const recipe = recipeMap[recipeName];
        for (const ingredient of recipe?.ingredients ?? []) {
          nextDepth.add(ingredient.name);
          allIngredients.add(ingredient.name);
        }
      }
      currentDepth = nextDepth;
    }
    return [...allIngredients];
  }, [recipe]);

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
    onMouseOut();
    setSelectedRecipeName((current) => {
      if (current === name) {
        return null;
      } else {
        return name;
      }
    });
  };

  const onMouseOver = (name) => {
    onHover(recipeMap[name]);
  };

  const onMouseOut = (name) => {
    onHover(null);
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
          highlight={[...(products || []), ...(ingredientChain || [])]}
        />
      </div>
      <aside
        className={cx(
          styles.RecipeGraphInfo,
          recipe && styles.RecipeGraphInfoWithContent
        )}
      >
        {recipe && (
          <>
            <button
              className={styles.RecipeGraphInfoClose}
              onClick={() => setSelectedRecipeName(null)}
            />
            <header style={getColorStyle(selectedRecipeName)}>
              {selectedRecipeName}
            </header>
            <section>
              Made in{" "}
              <span className={styles.AssemblerType}>
                Assembler {"I".repeat(ingredientCount)}
              </span>
            </section>
            <section>{recipe.description}</section>
            <header style={{ opacity: 0.5 }}>Ingredients:</header>
            <section>
              <ul>
                {recipe.ingredients.map((ingredient) => (
                  <li key={ingredient.name}>
                    -{" "}
                    <a
                      onClick={() => onClick(ingredient.name)}
                      onMouseOver={() => onMouseOver(ingredient.name)}
                      onMouseOut={onMouseOut}
                      style={getColorStyle(ingredient.name)}
                    >
                      {ingredient.name}
                    </a>{" "}
                    {ingredient.quantity > 1 ? ` x ${ingredient.quantity}` : ""}
                  </li>
                ))}
              </ul>
            </section>
            {products && (
              <>
                <header style={{ opacity: 0.5 }}>Used in:</header>
                <section>
                  <ul>
                    {products.map((product) => (
                      <li key={product}>
                        -{" "}
                        <a
                          onClick={() => onClick(product)}
                          onMouseOver={() => onMouseOver(product)}
                          onMouseOut={onMouseOut}
                          style={getColorStyle(product)}
                        >
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
