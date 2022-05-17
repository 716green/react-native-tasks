# Task Management React Native App

### Notes

- Styles aren't CSS, but they look similar
- Buttons can't be styled

```js
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
```

- Set statusbar to 'light' using expo's status bar functionality which takes a string as an argument

```jsx
import { StatusBar } from "expo-status-bar";
  ...
<StatusBar style="light" />
```

- FlatBar is used to render items as needed instead of all at once

```jsx
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
```
