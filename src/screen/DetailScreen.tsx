import { StyleSheet, View, Text, AsyncStorage, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../component/Header";
import Detail from "../component/Detail";
import { PRICE } from "../type/type";

type buttonType = {
  All: boolean;
  Year: boolean;
  Month: boolean;
  Week: boolean;
  Day: boolean;
};

const DetailScreen = (props: any) => {
  const [price, setPrice] = useState<PRICE>(props.route.params.price);
  const [graph, setGraph] = useState<number[]>(props.route.params.graph);
  const [id, setId] = useState(props.route.params.params.id);
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
      })
      .catch((error) => {
        console.log(error);
      });
  }, [type]);

  return (
    <View style={styles.background}>
      <Header
        name={props.route.params.params.name}
        icon={props.route.params.params.icon_address}
        navigation={props.navigation}
      />
      <View style={styles.buttonContainer}>
        <Pressable onPress={() => setType("all")} style={{ left: 17 }}>
          <Text style={{ ...(type === "all" ? styles.colored : styles.text) }}>
            ALL
          </Text>
        </Pressable>
        <Pressable onPress={() => setType("year")} style={{ left: 44 + 17 }}>
          <Text style={{ ...(type === "year" ? styles.colored : styles.text) }}>
            YEAR
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setType("month")}
          style={{ left: 44 + 44 + 17 }}
        >
          <Text
            style={{ ...(type === "month" ? styles.colored : styles.text) }}
          >
            MONTH
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setType("week")}
          style={{ left: 44 + 44 + 44 + 17 }}
        >
          <Text style={{ ...(type === "week" ? styles.colored : styles.text) }}>
            WEEK
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setType("day")}
          style={{ left: 44 + 44 + 44 + 44 + 17 }}
        >
          <Text style={{ ...(type === "day" ? styles.colored : styles.text) }}>
            DAY
          </Text>
        </Pressable>
      </View>
      <Detail asset={props.route.params} graph={graph} price={price} />
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#FFFFFF",
    flex: 1,
  },
  header: {
    alignContent: "center",
  },
  buttonContainer: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    height: 21,
  },
  text: {
    fontSize: 15,
    color: "#8A96AA",
  },
  colored: {
    fontSize: 15,
    color: "#F15A29",
  },
});
