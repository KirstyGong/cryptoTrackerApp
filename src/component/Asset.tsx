import React, { useEffect,useState, } from 'react';
import { LineChart, Grid} from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import { Entypo } from "@expo/vector-icons";
import {StyleSheet,View,Text,TouchableOpacity,Image} from 'react-native';
import axios from 'axios'

type PRICE={
  fiat_id: number,
  fiat_symbol: string,
  source: string,
  rate: number,
  market_cap: number,
  volume_24h: number,
  updated: number,
  history: [
    {
      rate: number,
      market_cap: number,
      volume_24h: number,
      date: number,
      seq_no: number
    }
  ]
}

const Asset =(props:any)=>{

  const [price, setPrice]=useState<PRICE[]>([]);
  const [rate,setRate]=useState<number[]>([]);

  
  
  useEffect(() => {
    axios
      .get(
        "https://assets-api.sylo.io/v2/asset/id/"+
        props.asset.id +
        "/rate?fiat=NZD&period=month&type=historic"
      )
      .then((response) => {
        setPrice(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);





    return (
        <TouchableOpacity onPress={()=>props.navigation.navigate('Sylo',{param:props.asset})} >
         <View style={styles.bg}>
      <View style={styles.base}>
        <View style={styles.leftBase}>
          <Image source={ {uri: props.asset.icon_address}} style={{width:36,height:36,top:10}}/>
    <Text style={styles.name}>{props.asset.name}</Text>
        </View>
        <View style={styles.rightBase}>
          <Text style={styles.fiat}>$0.0218</Text>
          <Text style={styles.crypto}>+4.48% ($0.0097)</Text>
        </View>
      </View>
      <View style={styles.chart}>
        <Text>Graph</Text>
      </View>
    </View>
        </TouchableOpacity>
        
    );
}

const styles = StyleSheet.create({
    base: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      flex: 54,
     
    },
    crypto: {
      display: "flex",
      textAlign: "right",
      paddingRight: 12,
      fontSize: 12,
      lineHeight: 18,
      color: "#33BB5D",
    },
    fiat: {
      display: "flex",
      paddingTop: 8,
      paddingRight: 12,
      fontSize: 12,
      lineHeight: 18,
      textAlign: "right",
      color: "#495162",
    },
    name: {
      display: "flex",
      alignSelf: "flex-start",
      paddingLeft: 12,
      paddingTop: 18,
      fontSize: 15,
      lineHeight: 18,
      color: "#495162",
    },
    icon: {
      display: "flex",
      // alignSelf: "flex-start",
      justifyContent: "center",
      paddingLeft: 14,
      paddingTop: 9,
    },
    bg: {
      display: "flex",
      width: 343,
      height: 140,
      left:16,
      top: 0,
      backgroundColor: "#FFFFFF",
      borderWidth: 2,
      borderColor: "#F6F6F6",
      borderStyle: "solid",
      borderRadius: 15,
    },
    chart: {
      flex: 84,
      backgroundColor: "black",
    },
    leftBase: {
      flex: 1,
      flexDirection: "row",
    },
    rightBase: {
      flex: 1,
    },
  });

export default Asset;