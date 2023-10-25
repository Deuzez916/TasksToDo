import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Butto, Image, StyleSheet, Text, View } from "react-native";
import HomeScreen from "./HomeScreen";
import CreateTasks from "./CreateTasks";
import TaskPage from "./TaskPage";
import * as Haptics from "expo-haptics";
import { MaterialIcons } from "@expo/vector-icons";

export default function App() {
  const Stack = createNativeStackNavigator();

  const onPressPlusButton = (navigation) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    navigation.navigate("CreateTasks");
  };

  const onPressAddTask = (navigation) => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    navigation.navigate("HomeScreen");
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={({ navigation }) => ({
            headerRight: () => (
              //<MaterialIcons
              //  name="playlist-add"
              //  size={35}
              // color="black"
              // onPress={() => onPressPlusButton(navigation)}
              ///>
              <Text
                style={{ fontSize: 40, fontWeight: "300", color: "#3478f6" }}
                onPress={() => onPressPlusButton(navigation)}
              >
                +
              </Text>
            ),
          })}
        />
        <Stack.Screen
          name="CreateTasks"
          component={CreateTasks}
          //options={({navigation}) => ({
          //headerRight: () => (
          //  <Text
          //    style={{fontSize: 18, color: '#3478f6', fontWeight: '400'}}
          //    onPress={() => onPressAddTask(navigation)}
          //  >
          //    Add Task
          //  </Text>
          //)
          //})}
        />
        <Stack.Screen name="TaskPage" component={TaskPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "fff",
  },
  logo: {
    width: 200,
    height: 200,
  },
});
