import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import AllScreen from "../screen/AllScreen";
import MonthScreen from "../screen/MonthScreen";
import DetailScreen from "../screen/DetailScreen";
import YearScreen from "../screen/YearScreen";
import DayScreen from "../screen/DayScreen";
import WeekScreen from "../screen/WeekScreen";
const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

function homeNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Tracker"
          component={TabNavigator}
          options={{
            title: "Tracker",
            headerStyle: {
              height: 108,
              elevation: 0,
              shadowColor: "transparent",
            },
            headerTitleStyle: {
              fontSize: 18,
              textAlign: "center",
            },
          }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: { fontSize: 15 },
        tabStyle: {
          elevation: 0,
          shadowColor: "#FFFFFF",
          shadowOffset: { width: 0, height: -10 },
          shadowOpacity: 0,
          shadowRadius: 0,
        },
      }}
    >
      <Tab.Screen name="All" component={AllScreen} />
      <Tab.Screen name="Year" component={YearScreen} />
      <Tab.Screen name="Month" component={MonthScreen} />
      <Tab.Screen name="Week" component={WeekScreen} />
      <Tab.Screen name="Day" component={DayScreen} />
    </Tab.Navigator>
  );
}

export default homeNavigator;
