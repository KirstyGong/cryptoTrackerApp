import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import Graph from "./Graph";

const detail = (props: any) => {
  return (
    <View>
      <View style={styles.base}>
        <View style={styles.bg}>
          <View style={styles.fiatContainer}>
            <Text style={styles.fiatText}>${props.price.rate}</Text>
          </View>
          <View style={styles.crytoContainer}>
            <Text style={styles.cryptoText}>+4.48% ($0.0097)</Text>
          </View>
          <View style={styles.graphContainer}>
            <Graph graphData={props.graph} style={styles.graph} />
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
        <View style={styles.symbolNameContainer}>
          <Text style={styles.symbolText}>{props.asset.params.symbol}</Text>
          <Text style={styles.symbolText}>{props.price.market_cap}</Text>
          <Text style={styles.symbolText}>{props.price.volume_24h}</Text>
        </View>
      </View>
    </View>
  );
};

export default detail;

const styles = StyleSheet.create({
  base: {
    alignItems: "center",
    width: "100%",
    display: "flex",
    flex: 54,
    backgroundColor: "#FFFFFF",
  },
  bg: {
    display: "flex",
    width: 345,
    height: 184,
    left: 0,
    top: 0,
    backgroundColor: "#FFFFFF",
    borderWidth: 2,
    borderColor: "#C4C4C4",
    borderStyle: "solid",
    borderRadius: 15,
    alignContent: "center",
  },
  fiatContainer: {
    display: "flex",

    height: 25,
    top: 12,
    alignItems: "center",
  },
  fiatText: {
    fontSize: 18,
    lineHeight: 21.09,
    color: "#495162",
    textAlign: "center",
  },
  crytoContainer: {
    display: "flex",
    position: "absolute",
    width: 97,
    height: 18,
    top: 36,
    left: 119,
    alignContent: "center",
  },
  cryptoText: {
    fontSize: 12,
    lineHeight: 18,
    textAlign: "right",
    color: "#33BB5D",
  },
  symbolContainer: {
    display: "flex",
    position: "absolute",
    width: 87,
    height: 21,
    top: 248,
    left: 34,
    right: 254,
  },
  symbolText: {
    fontSize: 15,
    lineHeight: 21,
    textAlign: "left",
    color: "#8A96AA",
  },
  symbolNameContainer: {
    display: "flex",
    position: "absolute",
    width: 200,
    height: 21,
    top: 248,
    left: 136,
  },
  informationContainer: {
    position: "absolute",
    height: 21,
    width: 280.31,
    left: 32.68,
    top: 216,
  },
  InformationText: {
    fontSize: 15,
    lineHeight: 21,
    textAlign: "center",
    color: "#495162",
  },
  graphContainer: {
    display: "flex",
    position: "absolute",
    width: 340,
    height: 117,
    top: 67,
    left: 0,
    alignContent: "center",
  },
  graph: {
    left: 20,
    height: 117,
  },
});
