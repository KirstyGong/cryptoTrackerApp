import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Header = (props: any) => {
  return (
    <View style={styles.header}>
      <AntDesign
        name="left"
        size={24}
        color="#495162"
        onPress={() => {
          props.navigation.navigate("Tracker");
        }}
        style={styles.button}
      />
      <View style={{ alignItems: "center" }}>
        <View style={styles.alignment}>
          <Image
            source={{ uri: props.icon }}
            style={{
              width: 30,
              height: 30,
              top: 59,
              alignItems: "center",
              flexDirection: "column",
            }}
          />
          <View style={styles.textContainer}>
            <Text>{props.name}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 145,
    backgroundColor: "#FFFFFF",
    // Check if the app is running on androi
  },
  button: {
    height: 30,
    width: 30,
    top: 90,
    left: 17.56,
    display: "flex",
  },
  alignment: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
  },
  textContainer: {
    left: 12,
    top: 62,
    height: 25,
  },
  headerText: {
    fontSize: 18,
    lineHeight: 21,
    color: "#495162",
  },
});
export default Header;
