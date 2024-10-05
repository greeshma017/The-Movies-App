import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IndexScreen from "../screens/IndexScreen";
import ShowMovieDetailsScreen from "../screens/ShowMovieDetailsScreen";

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Index"
        component={IndexScreen}
        options={{
          title: "Movies App",
          headerStyle: {
            backgroundColor: "#2c3e50",
          },
          headerTitleStyle: {
            color: "#fff",
          },
        }}
      />
      <Stack.Screen
        name="ShowMovieDetailsScreen"
        component={ShowMovieDetailsScreen}
        options={({ route }) => ({
          title: route.params.title,
          headerBackTitle: "Back to List",
        })}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
