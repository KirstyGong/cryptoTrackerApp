import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ASSET } from "./src/type/type";
import axios from "axios";

import AppNavigator from "./src/navigation/AppNavigator";

export const globalStateContext = React.createContext<ASSET[]>(undefined!);

export default function App() {
  const [assets, setAssets] = useState<ASSET[]>([]);

  useEffect(() => {
    axios
      .get("https://assets-api.sylo.io/v2/all?take=20&has_history_only=true")
      .then((response) => {
        setAssets(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <globalStateContext.Provider value={assets}>
      <AppNavigator />
    </globalStateContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
