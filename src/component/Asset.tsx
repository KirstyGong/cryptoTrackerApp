import React, { useEffect, useState } from "react";
import { LineChart, Grid } from "react-native-svg-charts";
import * as shape from "d3-shape";
import { Entypo } from "@expo/vector-icons";
import Graph from "./Graph";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import axios from "axios";
import { PRICE } from "../type/type";

const Asset = (props: any) => {
  const [price, setPrice] = useState<PRICE>(undefined!);
  const [graph, setGraph] = useState<number[]>([]);
  const [loading, setLoading] = useState<Boolean>(true);
  const [id, setId] = useState(props.asset.id);
  const [type, setType] = useState(props.type);

  useEffect(() => {
    axios
      .get(
        "https://assets-api.sylo.io/v2/asset/id/" +
          id +
          "/rate?fiat=NZD&period=" +
          type +
          "&type=historic"
      )
      .then((response) => {
        let data = response.data.history.map((v: any, i: any) => v.rate);
        setGraph(data);
        setPrice(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [type]);

  if (loading) {
    return <Text>Loading...</Text>;
  } else {
    return (
      <TouchableOpacity
        onPress={() =>
          props.navigation.navigate("Detail", {
            params: props.asset,
            price: price,
            graph: graph,
            type: type,
          })
        }
      >
        <View style={styles.bg}>
          <View style={styles.base}>
            <View style={styles.leftBase}>
              <Image
                source={{ uri: props.asset.icon_address }}
                style={{ width: 36, height: 36, top: 10 }}
              />
              <Text style={styles.name}>{props.asset.name}</Text>
            </View>
            <View style={styles.rightBase}>
              <Text style={styles.fiat}>${price.rate}</Text>
              <Text style={styles.crypto}>+4.48% ($0.0097)</Text>
            </View>
          </View>
          <Graph graphData={graph} />
        </View>
      </TouchableOpacity>
    );
  }
};

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
  graph: {
    width: 353,
    height: 66,
    top: 56,
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
    left: 25,
    top: 0,
    padding: 16,
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
