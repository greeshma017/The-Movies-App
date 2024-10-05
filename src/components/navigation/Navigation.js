import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Movies from "../screens/MoviesScreen";
import Search from "../screens/SearchScreen";
import TVShows from "../screens/TVShowsScreen";

const Tab = createMaterialTopTabNavigator();

const Navigation = ({ navigation }) => {

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 15,
          textTransform: "none",
        },
      }}
    >
      <Tab.Screen name="Movies">
        {() => <Movies navigation={navigation} />}
      </Tab.Screen>
      <Tab.Screen name="Search Results">
        {() => <Search navigation={navigation} />}
      </Tab.Screen>
      <Tab.Screen name="TV Shows">
        {() => <TVShows navigation={navigation} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default Navigation;
