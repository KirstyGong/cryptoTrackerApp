import React from 'react'
import {StyleSheet,View,Text,TouchableOpacity,Image} from 'react-native';
import { } from './Asset'

const detail = (props:any)=>{

    return(
        <View >
            <View style={styles.base}>
            <View style={styles.bg}>
                <View style={styles.fiatContainer}>
                    <Text style={styles.fiatText}>$0.0218</Text>
                </View>
                <View style={styles.crytoContainer}>
                    <Text style={styles.cryptoText}>+4.48% ($0.0097)</Text>
                </View>
                <View style={styles.graphContainer}>
                    <Text>Graph</Text>
                </View>

            </View>
            </View>
            <View>
                <View style={styles.informationContainer}>
                    <Text style={styles.InformationText}>Information</Text>
                </View>
                <View style={styles.symbolContainer}>
                    <Text style={styles.symbolText}>Symbol:</Text>
                    <Text style={styles.symbolText}>Market Cap:</Text>
                    <Text style={styles.symbolText}>24h Volume:</Text>
                </View>
                <View  style={styles.symbolNameContainer}>
                    <Text style={styles.symbolText}>Sylo</Text>
                    <Text style={styles.symbolText}>$25,471,051.38 NZD</Text>
                    <Text style={styles.symbolText}>$58,905.49 NZD</Text>
                </View>
            </View>

        </View>
    )
}

export default detail;

const styles= StyleSheet.create({
    base:{
        alignItems:'center',
        width: "100%",
        display: "flex",
        flex: 54,
    },
    bg:{
        display: "flex",
        width: 335,
        height: 184,
        left: 0,
        top: 0,
        backgroundColor: "#FFFFFF",
        borderWidth: 2,
        borderColor: "#C4C4C4",
        borderStyle: "solid",
        borderRadius: 15,
    },
    fiatContainer:{
        display:'flex',
        position:'absolute',
        left:132,
        width:71,
        height:25,
        top:12,
    },
    fiatText:{
        fontSize:18,
        lineHeight:21.09,
        textAlign:'right',
        color:'#495162'

    },
    crytoContainer:{
        display:'flex',
        position:'absolute',
        width:97,
        height:18,
        top:36,
        left: 119
    },
    cryptoText:{
        fontSize:12,
        lineHeight:18,
        textAlign:'right',
        color:'#33BB5D'
    },
    symbolContainer:{
        display:'flex',
        position:'absolute',
        width:87,
        height:21,
        top:248,
        left: 34,
        right:254
    },
    symbolText:{
        fontSize:15,
        lineHeight:21,
        textAlign:'left',
        color:'#8A96AA'
    },
    symbolNameContainer:{
        display:'flex',
        position:'absolute',
        width:200,
        height:21,
        top:248,
        left: 136,

    },
    informationContainer:{
        position:'absolute',
        height:21,
        width:280.31,
        left:32.68,
        top:216
    },
    InformationText:{
        fontSize:15,
        lineHeight:21,
        textAlign:'center',
        color:'#495162'
    },
    graphContainer:{
        display:'flex',
        position:'absolute',
        width:345,
        height:117,
        top:67,
        left: 15,

    }
    


})