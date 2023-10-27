import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Todorow from "./Todorow";
import RNCheckboxCard from "react-native-checkbox-card";
import * as Haptics from "expo-haptics";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function HomeScreen({ navigation, route }) {
  const [addToDoItems, setAddToDoItems] = useState("");

  const [toDoItems, setToDoItems] = useState([
    {
      Task: "Press the plus to create your first Task",
      isdone: false,
      Deadline: "3 Nov 2023",
      Notes: "Delete Me",
    },
  ]);

    const saveTasks = async (tasks) => {
        try {
            await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
        } catch (error) {
            console.log('Error saving tasks: ', error);
        }
    };
    
    const loadTasks = async () => {
        try {
            const savedTasks = await AsyncStorage.getItem('tasks');
            if (savedTasks) {
                setToDoItems(JSON.parse(savedTasks));
            }
        } catch (error) {
            console.log('Error loading tasks: ', error);
        }
    };

    useEffect(() => {
      
      if (route.params?.deleteRow) {
          console.log("Lets Delete");
          console.log(route.params.deleteRow);
          
          setAddToDoItems("");
        }
        
        if (route.params?.newTask) {
            console.log("DO create");
            const newToDo = route.params.newTask;
            
            const newTaskList = [...toDoItems].concat(newToDo);
            
            setToDoItems(newTaskList);
            saveTasks(newTaskList);
            setAddToDoItems("");
        }
        
        if (route.params?.renameTask) {
          console.log("DO rename");
            const renameTask = route.params.renameTask;
            const rowNumber = route.params.rowNumber;
    
            const updatedTask = [...toDoItems];
    
            updatedTask[rowNumber] = renameTask
    
          setToDoItems(updatedTask);
          saveTasks(updatedTask);
        }
        
        loadTasks();

  }, [
    route.params?.renameTask,
    route.params?.deleteRow,
    route.params?.newTask,
  ]);

  function toDoChangeDone(rowNumber) {
    const newList = [...toDoItems];

    if (newList[rowNumber].isdone == true) {
      newList[rowNumber].isdone = false;
    } else {
      newList[rowNumber].isdone = true;
    }
    setAddToDoItems(newList);
  }

  function toDoDelete(rowNumber) {
    const newListStart = [...toDoItems].slice(0, rowNumber);
    const newListEnd = [...toDoItems].slice(rowNumber + 1);

    console.log(newListStart);
    console.log(newListEnd);

    const newList = newListStart.concat(newListEnd);

    setToDoItems(newList);
  }

  return (
    <View style={styles.container}>
      {toDoItems.length === 0 ? (
        <Text
          style={{
            fontSize: 20,
            color: "#fff",
            fontWeight: "bold",
            textAlign: "center",
            width: "60%",
            marginTop: "20%",
          }}
        >
          No Tasks Active, Begin By Pressing "+"
        </Text>
      ) : (
        <FlatList
          style={{ width: "90%" }}
          data={toDoItems}
          horizontal={false}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={{ margin: 15 }}
              onPress={() => {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
                navigation.navigate("TaskPage", {
                  toDoItems: item,
                  rowNumber: index,
                  toDoDelete: toDoDelete,
                });
              }}
            >
              <Todorow
                toDoInfo={item}
                toDoChangeDone={() => {
                  toDoChangeDone(index);
                }}
                toDoDelete={() => {
                  toDoDelete(index);
                }}
              />
            </TouchableOpacity>
          )}
        />
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#01605a",
    alignItems: "center",
  },
});
