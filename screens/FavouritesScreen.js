import { StyleSheet, View, Text } from "react-native";
import MealsList from "../components/MealsList/MealsList";
import { useContext } from "react";
// import { FavouritesContext } from "../store/context/favourites-context";
import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";

function FavouritesScreen({}) {

    // const favouriteMealsCtx = useContext(FavouritesContext);
    const favoriteMealIds = useSelector(state => state.favoriteMeals.ids);

    const favouriteMeals = MEALS.filter(meal => 
        favoriteMealIds.includes(meal.id)
    );

    if(favouriteMeals.length === 0) {
        return (
            <View style={styles.rootContainer}>
                <Text style={styles.text}>You have no favourite meals yet.</Text>
            </View>
        );
    }

    return   <MealsList items={favouriteMeals} />
}

export default FavouritesScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }

})