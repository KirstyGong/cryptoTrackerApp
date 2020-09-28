import React from 'react'
import { StyleSheet, Text, View, BackHandler, Platform } from 'react-native';

const Header =()=>{
    return(
        <View style={styles.header}>
            <Text style={styles.headerText}>
                <Text>Tracker</Text>
            </Text>
        </View>
    );
}

const styles=StyleSheet.create({
    header:{
        padding:4.3,
        backgroundColor:  '#FFFFFF',
        // Check if the app is running on android

        
    },
    headerText:{
        marginTop: 40,
        textAlign: 'center',
        fontSize: 20,
        color: '#495162'
    }

})
export default Header;