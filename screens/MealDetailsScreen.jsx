import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";

const MealDetailsScreen = (props) => {
  const route = useRoute();

  const meal = route.params.meal;
  return (
    <ScrollView style={styles.container}>
      <Image style={styles.image} source={{ uri: meal.imageUrl }} />

      <View style={{ alignItems: "center" }}>
        <Text style={styles.title}>{meal.title}</Text>
        <View style={styles.details}>
          <Text style={styles.detail}>Affordability: {meal.affordability}</Text>
          <Text style={styles.detail}>Complexity: {meal.complexity}</Text>
          <Text style={styles.detail}>Duration: {meal.duration}</Text>
        </View>

        <Text style={styles.subtitle}>Ingredients</Text>
        {meal.ingredients.map((ingredient) => (
          <Text style={styles.listItem} key={ingredient}>
            {ingredient}
          </Text>
        ))}

        <Text style={styles.subtitle}>Steps</Text>
        {meal.steps.map((step) => (
          <Text style={styles.listItem} key={step}>
            {step}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    padding: 8,
    textAlign: "center",
    marginTop: 8,
  },
  subtitle: {
    fontWeight: "bold",
    fontSize: 16,
    padding: 8,
    textAlign: "center",
    marginVertical: 8,
    color: "white",
    borderBottomColor: "white",
    borderBottomWidth: 2,
    width: "80%",
  },
  image: {
    width: "100%",
    height: 350,
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
  },
  details: {
    marginVertical: 8,
    padding: 16,
    backgroundColor: "#236537",
    borderRadius: 4,
    elevation: 4,
    width: "80%",
  },
  detail: {
    paddingVertical: 2,
    textAlign: "center",
    color: "white",
  },
  listItem: {
    backgroundColor: "#123456",
    color: "white",
    margin: 4,
    padding: 4,
    width: "80%",
    textAlign: "center",
    borderRadius: 4,
  },
});
