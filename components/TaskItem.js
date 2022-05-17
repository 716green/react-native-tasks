import { StyleSheet, Text, Pressable } from "react-native";
import { colors } from "../config/colors";

const TaskItem = ({ id, text, deleteGoalHandler }) => {
  return (
    <>
      <Pressable
        android_ripple={colors.darkGray}
        onPress={() => deleteGoalHandler(id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.taskText}>{text}</Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  taskText: {
    color: colors?.white,
    padding: 8,
  },
  pressedItem: {
    opacity: 0.5,
  },
});

export default TaskItem;
