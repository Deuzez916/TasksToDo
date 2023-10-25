import React, { useState } from "react";
import { Button, Keyboard, Platform, StyleSheet, Text, TextInput, TouchableNativeFeedback, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";

export default function CreateTasks({ navigation, route }) {
    const [date, setDate] = useState(new Date());
    const [dateMode, setDateMode] = useState("date");
    const [timeMode, setTimeMode] = useState("time");
    const [deadline, setDeadline] = useState(null);
    const [estimatedTime, setEstimatedTime] = useState(null);

    const [todoTitle, setTodoTitle] = useState("");

    const [todoNotes, setTodoNotes] = useState("");

    const addTaskToHomeScreen = () => {
        const newTask = {
            Task: todoTitle,
            Deadline: deadline,
            Notes: todoNotes,
        };
        navigation.navigate("HomeScreen", {
            newTask: newTask,
        });
    };

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="enter task name"
                        value={todoTitle}
                        onChangeText={setTodoTitle}
                    />
                </View>

                <View style={styles.inputContainer}>
                  
                    <TextInput
                        style={styles.NotesInput}
                        placeholder="Notes"
                        multiline={true}
                        value={todoNotes}
                        onChangeText={setTodoNotes}
                    />
                </View>

                <View style={{ flexDirection: 'column', marginTop: 10}}>
                    <MaterialIcons
                        style={{ alignSelf: 'center'}}
                        name="playlist-add"
                        size={40}
                        color="black"
                        onPress={() => {
                            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
                            addTaskToHomeScreen();
                        }}
                    />
                    <Text style={{ textAlign: 'center', fontWeight: 'bold'}}>
                        Add Task
                    </Text>
                </View>
            </View>
        </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#10605a",
      alignItems: "center",
      justifyContent: "flex-start",
    },
    card: {
      backgroundColor: "#a98f76",
      width: "85%",
      borderRadius: 15,
      borderWidth: 2,
      borderColor: "#fff",
      padding: 20,
      marginTop: 30,
    },
    inputContainer: {
      width: "100%",
      backgroundColor: "#ffd0a8",
      borderRadius: 15,
      borderWidth: 2,
      borderColor: "#fff",
      padding: 10,
      marginBottom: 10,
    },
    label: {
      fontSize: 20,
      alignSelf: "center",
      fontWeight: "bold",
    },
    input: {
      fontSize: 22,
      textAlign: "center",
      fontWeight: "bold",
    },
    NotesInput: {
      fontSize: 18,
      fontWeight: "bold",
      height: "30%",
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
      padding: 10,
      marginBottom: 10,
    },
    dateTimePicker: {
      backgroundColor: "#ffd0a8",
    },
    addButton: {
      backgroundColor: "#ffd0a8",
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
            <Text style={styles.label}>Deadline:</Text>
            <DateTimePicker
              testID="deadline"
              timeZoneOffsetInMinutes={0}
              value={date}
              mode={dateMode}
              is24Hour={true}
              display="default"
              onDateChange={(selectedDate) => {
                const currentDate = selectedDate || date;
                setDate(currentDate);
                setDeadlineDate(currentDate);
              }}
            />
          </View>
  */
  