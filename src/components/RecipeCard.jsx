import { Text, View, StyleSheet, Image, Pressable } from 'react-native';
import { colors } from '../theme';
import { formatDuration } from '../utils/dateTimeUtils';
import Tag from './Tag';

export default function RecipeCard({
    title,
    description,
    caloriesPerServing,
    imageUrl,
    chef,
    cuisine,
    durationMinutes,
    servings,
    onSelect,
}) {
    return (
        <Pressable style={styles.card} onPress={onSelect}>
            <Image source={{ uri: imageUrl }} style={styles.poster} />

            < View style={styles.info}>
                <View style={styles.titleRow}>
                    <Text style={styles.title}>{title}</Text>
                </View>
                <Text style={styles.subtitle}>{chef} - prep: {formatDuration(durationMinutes)} minutes</Text>
                <Text style={styles.calories}>{caloriesPerServing} calories per serving</Text>
                <Tag cuisine={cuisine} />
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        backgroundColor: colors.card,
        borderRadius: 16,
        padding: 12,
        marginBottom: 16,
    },
    poster: {
        width: 90,
        height: 135,
        borderRadius: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.text,
    },
    titleRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    description: {
        fontSize: 16,
        color: colors.textMuted,
    },
    calories: {
        fontSize: 14,
        color: colors.textMuted,
    },
    servings: {
        fontSize: 14,
        color: colors.textMuted,
    },
})