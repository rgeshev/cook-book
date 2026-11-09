import { Text, View } from 'react-native';

import data from '../data.json';
import { colors } from './theme';

import RecipeList from './components/RecipeList';

export default function App() {
  return (
    <View style={{ backgroundColor: colors.background,  flex: 1 }}>
      <RecipeList recipes={data.recipes} />
    </View>
  );
}

