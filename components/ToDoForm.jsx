import React from 'react';

import { View, TextInput, Button, StyleSheet} from 'react-native';

function ToDoForm({addTask}) {
  const [task, setTask] = React.useState('');

  const handleChangeText = (text) => {
    setTask(text)
  };

  const handlePress = () => {
    addTask(task);
  };

    return (
      <View style={styles.form}>
        <TextInput style={styles.input}
  placeholder="Add a new task..."
  onChangeText={handleChangeText}
  value={task}/>
        <Button title="Add Task" onPress={handlePress}  />
      </View>
    );
}

const styles = StyleSheet.create({
    form: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: 20,
      marginTop: 20,
    },
    input: {
      flex: 1,
      borderWidth: 1,
      borderColor: '#ccc',
      paddingHorizontal: 10,
      paddingVertical: 5,
      marginRight: 10,
    },
  });

export default ToDoForm;