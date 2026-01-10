import React from "react";
import { PageContent } from "../components/layout/PageContent";
import RecipeGraph from "../components/recipes/RecipeGraph";
import { Tooltip } from "../components/tooltip/Tooltip";
import { sanitizeDescription } from "../utils/sanitizeDescription";

export default function RecipesPage() {
  const [hoveredRecipe, setHoveredRecipe] = React.useState(null);
  const description = React.useMemo(
    () => hoveredRecipe && sanitizeDescription(hoveredRecipe.description),
    [hoveredRecipe]
  );

  const onHovered = (recipe) => {
    setHoveredRecipe(recipe);
  };

  return (
    <PageContent>
      <RecipeGraph onHover={onHovered} />
      {hoveredRecipe && (
        <Tooltip type={hoveredRecipe.stats.type}>
          <header>{hoveredRecipe.name}</header>
          <div>{description}</div>
        </Tooltip>
      )}
    </PageContent>
  );
}
