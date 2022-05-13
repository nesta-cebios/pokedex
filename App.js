import React from "react";
import { StyleSheet } from "react-native";
import {useState} from 'react'

import Navigation from "./Components/Navigation";
import 'react-native-gesture-handler';
import * as ScreenOrientation from 'expo-screen-orientation'



export default function App() {
  const [orientationIsLandscape,setOrientation]=useState(true)

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

