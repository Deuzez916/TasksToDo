import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Alert,
  Button,
  FlatList,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { MaterialIcons } from "@expo/vector-icons";
import HomeScreen from "./HomeScreen";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function TaskPage({ navigation, route, props }) {
  const [taskTitle, setTaskTitle] = useState(route.params.toDoItems.Task);
  const [todoNotes, setTodoNotes] = useState(route.params.toDoItems.Notes);
  const [date, setDate] = useState(new Date());
  const [dateMode, setDateMode] = useState("date");
  const [timeMode, setTimeMode] = useState("time");

  const deleteTask = () => {
    const rowNumber = route.params.rowNumber;
    route.params.toDoDelete(rowNumber);
    navigation.navigate("HomeScreen");
  };

  const saveTask = () => {
    if (taskTitle != "") {
      const renamedTask = {
        Task: taskTitle,
        Notes: todoNotes,
      };
      navigation.navigate({
        name: "HomeScreen",
        params: {
          renameTask: renamedTask,
          rowNumber: route.params.rowNumber,
        },
        merge: true,
      });
    } else (Alert.alert("Title Required"))
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Title"
              placeholderTextColor={'#608da2'}
              value={taskTitle}
              onChangeText={setTaskTitle}
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.NotesInput}
              placeholder="Notes"
              placeholderTextColor={'#608da2'}
              multiline={true}
              value={todoNotes}
              onChangeText={setTodoNotes}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginTop: "5%",
            }}
          >
            <View style={{ flexDirection: "column" }}>
              <MaterialCommunityIcons
                name="delete-circle"
                size={40}
                color="#d9381d"
                onPress={() => {
                  Alert.alert("Delete", "Do you want to delete this Task?", [
                    {
                      text: "Cancel",
                      Haptics: Haptics.notificationAsync(
                        Haptics.NotificationFeedbackType.Success
                      ),
                      style: "cancel",
                    },
                    {
                      text: "Delete",
                      onPress: () => deleteTask(),
                      style: "default",
                    },
                  ]);
                }}
              />
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "#000",
                }}
              >
                Delete
              </Text>
            </View>
            <View style={{ flexDirection: "column" }}>
              <Ionicons
                name="ios-checkmark-circle"
                size={40}
                color="#aef359"
                onPress={() => {
                  Haptics.notificationAsync(
                    Haptics.NotificationFeedbackType.Success
                  );
                  saveTask();
                }}
              />
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "#000",
                }}
              >
                Save
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2c7da0",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#fff",
    width: "85%",
    maxHeight: "80%",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#000",
    padding: 20,
    marginTop: 60,
  },
  inputContainer: {
    maxHeight: "65%",
    width: "100%",
    backgroundColor: "#98cff0",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#000",
    padding: "4%",
    marginBottom: "5%",
    textAlign: "center",
  },
  input: {
    fontSize: 22,
    marginLeft: 10,
    textAlign: "center",
    fontWeight: "bold",
    textAlignVertical: "bottom",
  },
  NotesInput: {
    fontSize: 18,
    maxHeight: "100%",
    fontWeight: "bold",
    width: "100%",
    textAlignVertical: "bottom",
  },
  dateTimeContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    backgroundColor: "#ffd0a8",
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#fff",
    padding: "4%",
    marginBottom: "5%",
  },
  label: {
    fontSize: 20,
    alignSelf: "center",
    fontWeight: "bold",
  },
});

/* 
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 30, fontWeight: 'bold', marginBottom: 10}}>Task:</Text>
            <MaterialIcons 
              name="playlist-add" 
              size={40} 
              color="black" 
              onPress={() => {
    
              }}
            />
            </View>
    
    
            <DateTimePicker
                testID="DeadlineTime"
                timeZoneOffsetInMinutes={0}
                value={date}
                mode={timeMode}
                is24Hour={true}
                display="default"
                onChange={(event, selectedDate) => {
                  const currentDate = selectedDate || date;
                  setDate(currentDate);
                  setEstimatedTime(currentDate);
                }}
              />
    
    
              <View style={styles.dateTimeContainer}>
              <Text style={styles.label}>Estimated Time:</Text>
              <DateTimePicker
                style={styles.dateTimePicker}
                testID="dateTimePicker"
                timeZoneOffsetInMinutes={0}
                value={date}
                mode={timeMode}
                is24Hour={true}
                display="default"
              />
              <Text style={styles.label}> hr : min</Text>
            </View>
    
            <View style={styles.dateTimeContainer}>
              <Text style={styles.label}>Deadline:</Text>
              <DateTimePicker
                testID="DeadlineDate"
                timeZoneOffsetInMinutes={0}
                value={date}
                mode={dateMode}
                is24Hour={true}
                display="default"
                onChange={(event, selectedDate) => {
                  const currentDate = selectedDate || date;
                  setDate(currentDate);
                  setDeadlineDate(currentDate);
                }}
              />
            </View>
            */
