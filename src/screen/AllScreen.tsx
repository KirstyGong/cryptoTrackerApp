import React, { useEffect,useState,useContext } from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import Asset from '../component/Asset'
import {globalStateContext} from '../../App'


 const AllScreen =(props:any)=>{

    const assets=useContext(globalStateContext);
    return(

          <ScrollView >
            {assets.map((item)=>{
                return <Asset navigation={props.navigation} key={item.name} asset={item} style={styles.graph} type='all'/>
            })}
            </ScrollView>

    );
}

const styles=StyleSheet.create({
    graph:{
        display:'flex',
        alignItems:'center'
            }
})

export default AllScreen;
