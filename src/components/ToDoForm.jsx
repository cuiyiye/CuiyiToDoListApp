import React from 'react';
import { View, TextInput, Button, StyleSheet, Alert} from 'react-native';
import { useEffect, useState } from 'react';


function ToDoForm({addTask}) {
  const [task, setTask] = React.useState('');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Asynchronously fetch tasks from the local JSON file
    const fetchTasks = async () => {
      try {
        const response = await require('../data/tasks.json'); // Adjust path as necessary
        setTasks(response.tasks);
      } catch (error) {
        Alert.alert('Error', 'Failed to fetch tasks');
      }
    };

    fetchTasks();
  }, []);


  const handlePress = () => {
    addTask(task);
    setTask('');
  };

  const handleGenerateRandomTask = () => {
    if (tasks.length > 0) {
      const randomIndex = Math.floor(Math.random() * tasks.length);
      const selectedTask = tasks[randomIndex]; // Directly using the string
      setTask(selectedTask);
    } else {
      Alert.alert('Info', 'No tasks available');
    }
  };

    return (
      <View style={styles.form}>
        <TextInput style={styles.input}
  placeholder="Select or add a new task..."
  onChangeText={setTask}
  value={task}/>
        <Button title="Add Task" onPress={handlePress}  />
        <Button title="Random Task" onPress={handleGenerateRandomTask} />
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