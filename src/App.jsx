import { Text, View, StatusBar } from 'react-native';
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

  const backHandler = () => {
    setSelectedRecipe(null)
  }

  return (
    <View style={{ backgroundColor: colors.background,  flex: 1 }}>
      <StatusBar barStyle="light-content" />

      {selectedRecipe
      ?  <RecipeDetails recipe={selectedRecipe} onBack={backHandler} />
      : <RecipeList recipes={data.recipes} onSelect={selectRecipeHandler}/> 
      }
      
    </View>
  );
}

