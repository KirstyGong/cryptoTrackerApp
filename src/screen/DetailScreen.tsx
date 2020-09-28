import React, { useState } from 'react';
import {StyleSheet, View,Text,AsyncStorage} from 'react-native';
import Graph from '../component/Asset'
import Header from '../component/Header'
import Detail from '../component/Detail'
import current from '../component/Asset'

const DetailScreen =(props:any)=>{
    console.log(props)

    return(
        <View >
            <Detail />
        </View>

    );
}

export default DetailScreen;