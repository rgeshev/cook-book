import { StyleSheet, View, Image, Text, ScrollView, Pressable } from 'react-native';
import { colors } from '../theme';
import { formatDuration } from '../utils/dateTimeUtils';
import Tags from './Tag';
import RecipeDetailsRow from './RecipeDetailsRow';

export default function RecipeDetails({
    recipe,
    onBack,
}) {
    return (
        <ScrollView contentContainerStyle={styles.content}>
            <View style={styles.topBar}>
                <Pressable style={styles.backButton} onPress={onBack}>
                <Text style={styles.backText}>Back</Text>
                </Pressable>
            </View>

           <Image source={{ uri: recipe.imageUrl }} style={styles.poster} /> 

           <Text style={styles.title}>{recipe.title}</Text>
           <Text style={styles.meta}>{recipe.chef} - prep: {formatDuration(recipe.durationMinutes)} minutes</Text>

           <View style={styles.genres}>
           <Tags 
               cuisine={recipe.cuisine}
           />
        </View>
           
        <View style={styles.infoBox}>
            <RecipeDetailsRow label="Chef" value={recipe.chef} />
            <RecipeDetailsRow label="Prep Time" value={formatDuration(recipe.durationMinutes)} />
            <RecipeDetailsRow label="Cuisine" value={recipe.cuisine} />
            <RecipeDetailsRow label="Calories" value={`${recipe.caloriesPerServing} per serving`} />
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    content: {
        paddingTop: 56,
        paddingHorizontal: 20,
        paddingBottom: 40,
        alignItems: 'center',
    },
    topBar: {
        alignSelf: 'stretch',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
    },
    backButton: {
        backgroundColor: colors.card,
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
    },
    backText: {
        color: colors.text,
        fontSize: 15,
    },
    poster: {
        width: 220,
        height: 330,
        borderRadius: 16,
        marginBottom: 24,
    },
    title: {
        color: colors.text,
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    meta: {
        color: colors.accent,
        fontSize: 15,
        marginTop: 8,
    },
    genres: {
        marginTop: 16,
        marginBottom: 28,
    },
    infoBox: {
        alignSelf: 'stretch',
        backgroundColor: colors.card,
        borderRadius: 16,
        paddingHorizontal: 16,
    }
});