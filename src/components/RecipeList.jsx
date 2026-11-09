import { Text, View } from 'react-native';
import { colors } from '../theme';
import RecipeCard from './RecipeCard';

export default function RecipeList({ 
    recipes
 }) {
    return (
        <View>
            <Text style={{ color: colors.text, fontSize: 24, marginTop: 50, }}>Recipe List</Text> 
            <RecipeCard 
                {...recipes[0]}
            />
        </View>
    );
}