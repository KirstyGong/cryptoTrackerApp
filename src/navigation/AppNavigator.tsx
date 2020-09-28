import React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import AllScreen from '../screen/AllScreen';
import MonthScreen from '../screen/MonthScreen';
import DetailScreen from '../screen/DetailScreen';
import YearScreen from '../screen/YearScreen';
import DayScreen from '../screen/DayScreen'

const Stack =createStackNavigator();
const Tab=createMaterialTopTabNavigator();

function homeNavigator(){
    return (
    <NavigationContainer>
       <Stack.Navigator>
            <Stack.Screen 
                name="Tracker" 
                component={TabNavigator} 
            />
             <Stack.Screen 
                name="Sylo" 
                component={SyloNavigator} 
            />
        </Stack.Navigator>
    </NavigationContainer>
    );

}

function SyloNavigator(){
    return(
        <Stack.Navigator>

        <Stack.Screen name="Tab" component={TabSyloNavigation}/>
        <Stack.Screen 
                name="Detail" 
                component={DetailScreen} 
            />
        </Stack.Navigator>
    ) 
}

function TabSyloNavigation(){
    return(
    <Tab.Navigator>
        <Tab.Screen name="All" component={DetailScreen}/>
        <Tab.Screen name="Year" component={DetailScreen}/>
        <Tab.Screen name="Month" component={DetailScreen}/>
        <Tab.Screen name="Day" component={DetailScreen}/>
    </Tab.Navigator>
    )

}

function TabNavigator(){
    return(
             <Tab.Navigator>
                <Tab.Screen name="All" component={AllScreen} />
                <Tab.Screen name="Year" component={YearScreen} />
                <Tab.Screen name="Month" component={MonthScreen} />
                <Tab.Screen name="Day" component={DayScreen} />
            </Tab.Navigator>
   
      
    )
}

export default homeNavigator