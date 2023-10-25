import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
    Button, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View, 
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
                        <AntDesign name="checkcircleo" size={24} color="#000"/>
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

            <StatusBar style="auto"/>
        </View>
    );
}

const rowstyles = StyleSheet.create({
    todorow: {
        flex: 1,
        width: '90%',
        backgroundColor: '#ffd0a8',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderRadius: 15,
        borderWidth: 2,
        borderColor: '#fff',
    },
    checkbox: {
        backgroundColor: '#fff',
        width: 25,
        height: 25,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "Black",
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15,
        marginRight: 15,
    },
    taskText: {
        fontSize: 22,
        color: '#000',
        fontWeight: 'bold',
        width: '60%',
    },
    overline: {
        textDecorationLine: 'line-through',
    },
    checked: {
        backgroundColor: '#01505a',
    },
    estimatedDeadline: {
        flexDirection: 'column',
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
