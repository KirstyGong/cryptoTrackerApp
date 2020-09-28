import React, { useEffect, useContext } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Asset from "../component/Asset";
import axios from "axios";
import { ASSET } from "../type/type";
import { globalStateContext } from "../../App";

const MonthScreen = (props: any) => {
  const assets = useContext(globalStateContext);
  return (
    <ScrollView>
      {assets.map((item) => {
        return (
          <Asset
            navigation={props.navigation}
            key={item.name}
            asset={item}
            style={styles.graph}
            type="month"
          />
        );
      })}
    </ScrollView>
    // <Graph navigation={props.navigation}/>
  );
};

const styles = StyleSheet.create({
  graph: {
    display:'flex',
    alignItems:'center'
  },
});

export default MonthScreen;
