import React from 'react';

import { StyleSheet, Pressable, View, Text, ScrollView} from 'react-native';

function ToDoList({items}) {

    const renderedItems =[];
    for (const item of items ) {
        const rendered = (<Pressable>
            <View style={[styles.task]}>
                <Text style={styles.taskText}>{item}</Text>
            </View>
        </Pressable>);

        renderedItems.push(rendered);
    }
    
    return (
        
        <ScrollView>
            {renderedItems}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    task: {
      padding: 10,
      borderBottomWidth: 1,
      borderColor: '#ccc',
    },
    completed: {
      backgroundColor: '#e0e0e0',
    },
    taskText: {
      fontSize: 16,
    },
});

export default ToDoList;
  