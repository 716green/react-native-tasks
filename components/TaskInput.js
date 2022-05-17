import { useState } from "react";
import {
  StyleSheet,
  TextInput,
  Button,
  Modal,
  View,
  Image,
} from "react-native";
import { colors } from "../config/colors";

const TaskInput = ({ addTaskHandler, modalIsActive, closeModal }) => {
  const [input, setInput] = useState("");

  const taskInputHandler = (value) => setInput(value);

  const onAddTask = () => {
    if (!input) return;
    addTaskHandler(input);
    setInput("");
  };

  return (
    <Modal visible={modalIsActive} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          value={input}
          style={styles.textInput}
          placeholder="New Task"
          onChangeText={taskInputHandler}
        />

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={closeModal} color={colors.pink} />
          </View>
          <View style={styles.button}>
            <Button
              title="Add Task"
              onPress={onAddTask}
              color={colors.lightPurple}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "space-between",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: colors?.darkPurple,
  },
  textInput: {
    borderWidth: 1,
    borderColor: colors?.lightestPurple,
    backgroundColor: colors?.lightestPurple,
    color: colors?.darkestPurple,
    borderRadius: 6,
    width: "100%",
    padding: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});

export default TaskInput;
