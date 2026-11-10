import { Text, View } from 'react-native';
import RecipeDetails from './components/RecipeDetails';
import { useState } from 'react';

import data from '../data.json';
import { colors } from './theme';

import RecipeList from './components/RecipeList';

export default function App() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const selectRecipeHandler = (recipe) => {
    setSelectedRecipe(recipe);
  }

  return (
    <View style={{ backgroundColor: colors.background,  flex: 1 }}>
      {selectedRecipe
      ?  <RecipeDetails recipe={selectedRecipe} />
      : <RecipeList recipes={data.recipes} onSelect={selectRecipeHandler}/> 
      }
      
    </View>
  );
}

