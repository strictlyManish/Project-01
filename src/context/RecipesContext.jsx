import { nanoid } from "nanoid";
import React, { createContext, useState } from "react";

export const recipescontext = createContext(null);

function RecipesContext({ children }) {
  const [data, setData] = useState([]);

  return (
    <recipescontext.Provider value={{ data, setData }}>
      {children}
    </recipescontext.Provider>
  );
}

export default RecipesContext;
