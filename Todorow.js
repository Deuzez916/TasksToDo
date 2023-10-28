import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import RNCheckboxCard from "react-native-checkbox-card";
import { AntDesign } from "@expo/vector-icons";


export default function Todorow(props, route) {
  return (
    <View style={rowstyles.todorow}>
      <TouchableOpacity onPress={() => props.toDoChangeDone()}>
        <View
          style={[
            rowstyles.checkbox,
            props.toDoInfo.isdone && rowstyles.checked,
          ]}
        >
          {props.toDoInfo.isdone && (
            <AntDesign name="checkcircleo" size={35} color="#000"/>
          )}
        </View>
      </TouchableOpacity>

      <Text
        style={[
          rowstyles.taskText,
          props.toDoInfo.isdone && rowstyles.overline,
        ]}
      >
        {props.toDoInfo.Task}
      </Text>

      <StatusBar style="auto" />
    </View>
  );
}

const rowstyles = StyleSheet.create({
  todorow: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#000",
  },
  checkbox: {
    backgroundColor: "#fff",
    width: 35,
    height: 35,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 15,
    marginRight: 15,
  },
  taskText: {
    marginTop: '3%',
    marginBottom: '3%',
    fontSize: 22,
    color: "#000",
    fontWeight: "bold",
    width: "60%",
  },
  overline: {
    textDecorationLine: "line-through",
  },
  checked: {
    backgroundColor: "#aef359",
    borderWidth: 0,
  },
  estimatedDeadline: {
    flexDirection: "column",
    marginLeft: 15,
    marginRight: 15,
  },
});

/* 
<View style={rowstyles.estimatedDeadline}>
        <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 10, marginBottom: 10}}>
          3-11-2023
        </Text>
        <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10, marginTop: 10 }}>2:30 hr:min</Text>
      </View>


      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10, marginTop: 10 }}>2:30 hr:min</Text>

      <View style={rowstyles.estimatedDeadline}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            marginTop: 10,
            marginBottom: 10,
            marginRight: 10,
            width: "50%",
            textAlign: "center",
          }}
        >
          {props.toDoInfo.Deadline}
        </Text>
      </View>
      */
