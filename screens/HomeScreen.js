import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Dimensions,
} from "react-native";

import Carousel from "../components/Carousel";
import Reticulas from '../components/Reticulas';
import { dummyData } from "../database/Data"; //data para carrusel
import { Appbar } from 'react-native-paper';



const HomeScreen = ({ navigation }) => {

  return (
    <View>
      <Carousel data={dummyData} />
      <View style={styles.container}>
        <StatusBar/>
        <Reticulas/>
      </View>
      
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  contenidoCard: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height / 3 + 20,
  },
});
