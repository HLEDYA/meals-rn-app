import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MealList from "../components/MealList/MealList.jsx";
import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";

const FavoritesScreen = () => {
  const favMealIds = useSelector((state) => state.favMeals.ids);

  const favMeals = MEALS.filter((meal) => favMealIds.includes(meal.id));
  if (favMeals.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }

  return <MealList items={favMeals} />;
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
