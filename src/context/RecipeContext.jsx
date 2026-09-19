import { createContext, useEffect, useState } from "react";

export const RecipeContext = createContext(null);

const RecipeContextProvider = ({ children }) => {
  const starterRecipes = [
    {
      id: "1",
      title: "Creamy Garlic Pasta",
      category: "Dinner",
      image:
        "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1200&q=80",
      description:
        "A quick and creamy pasta with garlic, herbs and parmesan.",
      ingredients:
        "200g pasta\n3 garlic cloves\n1 tbsp butter\n150ml cream\n50g parmesan\nSalt and black pepper",
      instructions:
        "Boil the pasta until al dente.\nSaute garlic in butter.\nAdd cream and parmesan.\nAdd pasta and mix well."
    },

    {
      id: "2",
      title: "Fresh Veggie Salad",
      category: "Lunch",
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80",
      description:
        "A healthy and refreshing salad packed with vegetables.",
      ingredients:
        "Lettuce\nCucumber\nTomato\nCarrot\nSweet corn\nLemon juice\nSalt",
      instructions:
        "Wash all vegetables.\nChop the vegetables.\nAdd everything to a bowl.\nAdd lemon juice and seasoning.\nMix and serve."
    },

    {
      id: "3",
      title: "Chocolate Pancakes",
      category: "Breakfast",
      image:
        "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1200&q=80",
      description:
        "Soft and delicious chocolate pancakes for breakfast.",
      ingredients:
        "1 cup flour\n2 tbsp cocoa powder\n1 tbsp sugar\n1 egg\n3/4 cup milk\n1 tsp baking powder",
      instructions:
        "Mix flour, cocoa powder, sugar and baking powder.\nAdd egg and milk.\nMix until smooth.\nCook pancakes on a hot pan.\nServe warm."
    }
  ];

  const [recipes, setRecipes] = useState(() => {
    try {
      const savedRecipes = localStorage.getItem("recipehub-recipes");

      if (savedRecipes) {
        return JSON.parse(savedRecipes);
      }

      return starterRecipes;
    } catch (error) {
      console.log("Error loading recipes:", error);
      return starterRecipes;
    }
  });

  useEffect(() => {
    localStorage.setItem(
      "recipehub-recipes",
      JSON.stringify(recipes)
    );
  }, [recipes]);

  const addRecipe = (recipe) => {
    setRecipes((currentRecipes) => [
      recipe,
      ...currentRecipes
    ]);
  };

  const deleteRecipe = (id) => {
    setRecipes((currentRecipes) =>
      currentRecipes.filter((recipe) => recipe.id !== id)
    );
  };

  const getRecipe = (id) => {
    return recipes.find((recipe) => recipe.id === id);
  };

  return (
    <RecipeContext.Provider
      value={{
        recipes,
        addRecipe,
        deleteRecipe,
        getRecipe
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeContextProvider;