export function toChart(recipes) {
  let _id = 0;
  let _idCache = {};
  const recipeMap = Object.fromEntries(
    recipes.map((recipe) => [recipe.name, recipe])
  );

  const ingredientMap = recipes.reduce((acc, recipe) => {
    for (const ingredient of recipe.ingredients) {
      if (ingredient.name in acc) {
        acc[ingredient.name].push(recipe.name);
      } else {
        acc[ingredient.name] = [recipe.name];
      }
    }

    return acc;
  }, {});

  const id = (name) => {
    let type = recipeMap[name]?.stats?.type ?? 0;
    switch (name) {
      case "Corpus":
        type = "C";
        break;
      case "Spiritus":
        type = "S";
        break;
      case "Anima":
        type = "A";
        break;
    }

    const key = `${name}-${type}`;
    if (!(key in _idCache)) {
      _idCache[key] = `T${type}_${_id++}(${name})`;
    }

    return _idCache[key];
  };

  return {
    recipeMap,
    ingredientMap,
    mermaid: `
---
config:
    theme: base
    layout: elk
    elk:
        mergeEdges: false
        nodePlacementStrategy: LINEAR_SEGMENTS
---
%%{
    init: {
      'theme': 'base',
      'themeVariables': {
        'lineColor': '#fff'
      }
    }
}%%
flowchart TD
  ${recipes
    .flatMap((recipe) =>
      recipe.ingredients.map(
        (ingredient) =>
          `${id(ingredient.name)} --> ${
            ingredient.quantity < 2 ? "" : `|${ingredient.quantity}x|`
          }${id(recipe.name)}`
      )
    )
    .join("\n")}`,
  };
}
