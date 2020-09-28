import React from 'react'
import { LineChart} from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import { Entypo } from "@expo/vector-icons";
import {StyleSheet,View,Text,TouchableOpacity,Image} from 'react-native';

const Graph=(props:any)=>{
    return(
        <LineChart
        style={{ width: "100%", height: 66 }}
        data={props.graphData}
        svg={{ stroke: "#F15A29", strokeWidth: 3, strokeOpacity: 0.6 }}
        curve={shape.curveBasis}
        contentInset={{ top: 5, bottom: 5, left: 0, right: 0 }}
      ></LineChart>
    )
} 

export default Graph

const style=StyleSheet.create({
    chart:{
        width:'100%',
        height:66
    }
})