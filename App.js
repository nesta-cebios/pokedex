import React from "react";
import { StyleSheet } from "react-native";

import Navigation from "./Components/Navigation";

export default function App() {
  return (
    <Navigation></Navigation>
  )
}
  const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  baseText: {
    fontSize: 24,
    lineHeight: 50,
    fontWeight: "bold",
    textAlign: "center",
  },
});

