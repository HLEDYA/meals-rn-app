import { View, Text } from "react-native";

const MealItem = (props) => {
  return (
    <View>
      <Text>{props.title}</Text>
    </View>
  );
};

export default MealItem;
