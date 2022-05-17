import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import TaskInput from "./components/TaskInput";
import TaskItem from "./components/TaskItem";
import { colors } from "./config/colors";
import { StatusBar } from "expo-status-bar";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [modalIsActive, setModalIsActive] = useState(false);

  const startAddGoalHandler = () => setModalIsActive(true);
  const endAddGoalHandler = () => setModalIsActive(false);

  const addTaskHandler = (input) => {
    setTasks((currentTasks) => [
      ...currentTasks,
      {
        id: "item".concat(tasks.length.toString() || "0"),
        text: input,
      },
    ]);
    endAddGoalHandler();
  };

  const deleteGoalHandler = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add Task"
          color={colors.lightPurple}
          onPress={startAddGoalHandler}
        />

        <TaskInput
          modalIsActive={modalIsActive}
          addTaskHandler={addTaskHandler}
          setModalIsActive={setModalIsActive}
          closeModal={endAddGoalHandler}
        />

        <View style={styles.tasksContainer}>
          <FlatList
            data={tasks}
            renderItem={(itemData) => {
              return (
                <View style={styles.taskItem}>
                  <TaskItem
                    deleteGoalHandler={deleteGoalHandler}
                    id={itemData.item.id}
                    text={itemData.item.text}
                  />
                </View>
              );
            }}
            keyExtractor={(item) => item.id}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  tasksContainer: {
    flex: 5,
  },
  taskItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: colors?.purple,
  },
});

export default App;
