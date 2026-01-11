import React from "react";
import styles from "./RecipeSearch.module.css";
import cx from "classnames";
import { RecipeGraphContext } from "./RecipeGraphContext";

export const RecipeSearch = () => {
  const { searchString, setSearchString } =
    React.useContext(RecipeGraphContext);

  return (
    <div className={styles.RecipeSearch}>
      <input
        placeholder="Search"
        value={searchString}
        onChange={(evt) => setSearchString(evt.target.value)}
      />
      <button
        className={cx(
          styles.RecipeSearchClear,
          !!searchString && styles.RecipeSearchClearActive
        )}
        onClick={() => setSearchString("")}
      />
    </div>
  );
};
