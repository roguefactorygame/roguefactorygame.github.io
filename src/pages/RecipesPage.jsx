import React from "react";
import { PageContent } from "../components/layout/PageContent";
import RecipeGraph from "../components/recipes/RecipeGraph";
import { Tooltip } from "../components/tooltip/Tooltip";

export default function RecipesPage() {
  const [hoveredRecipe, setHoveredRecipe] = React.useState(null);

  const onHovered = (recipe) => {
    setHoveredRecipe(recipe);
  };

  return (
    <PageContent>
      <RecipeGraph onHover={onHovered} />
      {hoveredRecipe && (
        <Tooltip type={hoveredRecipe.stats.type}>
          <header>{hoveredRecipe.name}</header>
          <div>{hoveredRecipe.description}</div>
        </Tooltip>
      )}
    </PageContent>
  );
}
