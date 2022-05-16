import { useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  TextInput,
  Text,
  ScrollView,
} from "react-native";
import { FlatList } from "react-native-web";

export default function App() {
  const [input, setInput] = useState("");
  const [goals, setGoals] = useState([]);

  const goalInputHandler = (value) => setInput(value);

  const addGoalHandler = () => {
    setGoals((current) => [...current, input]);
    setInput("");
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          value={input}
          style={styles.textInput}
          placeholder="Course Goals"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList alwaysBounceVertical={false}>
          {goals.map((goal, i) => (
            <View key={i} style={styles.goalItem}>
              <Text style={styles.goalText}>{goal}</Text>
            </View>
          ))}
        </FlatList>
      </View>
    </View>
  );
}

const colors = {
  white: "#ffffff",
  gray: "#cccccc",
  purple: "#5e0acc",
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray,
  },
  textInput: {
    borderWidth: 1,
    borderColor: colors.gray,
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: colors.purple,
  },
  goalText: {
    color: colors.white,
  },
});
