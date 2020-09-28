import React, { useEffect,useState, } from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import Asset from '../component/Asset'
import axios from 'axios'

 type ASSET={
    id:number,
    name:string,
    symbol: string,
    blockchain: {
      code: string,
      nam: string
    },
    contract_address: string,
    decimals: number,
    icon_address: string,
    icon_address_dark: string,
    has_history: boolean,
    network: {
      code: string,
      name: string
    }

}



 const MonthScreen =(props:any)=>{

    const [assets, setAssets] = useState<ASSET[]>([]);


    useEffect(() => {
        axios
          .get(
            "https://assets-api.sylo.io/v2/all?take=20&has_history_only=true"
          )
          .then((response) => {
            setAssets(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);






    return(
        <View>
          <ScrollView>
            {assets.map((item)=>{
                console.log(item.name);
                return <Asset navigation={props.navigation} key={item.name} asset={item}/>
            })}
            </ScrollView>
        </View>
        // <Graph navigation={props.navigation}/>

    );
}

const styles=StyleSheet.create({
    graph:{
        position: 'absolute',
        margin: 'auto',
        padding: '16px'
    }
})

export default MonthScreen;
