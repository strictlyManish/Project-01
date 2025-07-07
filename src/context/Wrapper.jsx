import React, { createContext, useState } from "react";
export const MyContext = createContext();
import { nanoid } from "nanoid";
const Wrapper = ({ children }) => {
  const [data, setdata] = useState([
    {
      id: nanoid(6),
      title: "Spaghetti Carbonara",
      url: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8fDA%3D",
      desc: "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
      ins: "1. Cook spaghetti. 2. Fry pancetta. 3. Mix eggs and cheese. 4. Combine everything off heat to avoid scrambling eggs.",
      ingr: `
        "200g spaghetti",
        "100g pancetta",
        "2 eggs",
        "50g grated Parmesan cheese",
        "Salt",
        "Black pepper",
      `,
      chief: "Chef Giovanni",
      cat: "lunch",
    },
    {
      id: nanoid(6),
      title: "Margherita Pizza",
      url: "https://images.unsplash.com/photo-1681567604770-0dc826c870ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fFBpenp6YXxlbnwwfHwwfHx8MA%3D%3D",
      desc: "Classic Italian pizza topped with fresh tomatoes, mozzarella cheese, fresh basil, and a drizzle of olive oil.",
      ins: "1. Prepare the dough. 2. Spread tomato sauce. 3. Add mozzarella slices. 4. Bake in a hot oven. 5. Top with basil and olive oil.",
      ingr: `
    "Pizza dough",
    "100g mozzarella cheese",
    "2 ripe tomatoes or tomato sauce",
    "Fresh basil leaves",
    "Olive oil",
    "Salt",
  `,
      chief: "Chef Marco",
      cat: "dinner",
    },
  ]);

  return (
    <MyContext.Provider value={[data, setdata]}>{children}</MyContext.Provider>
  );
};

export default Wrapper;
