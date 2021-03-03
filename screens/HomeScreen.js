import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Dimensions,
} from "react-native";

import Carousel from "../components/Carousel";
import Reticulas from '../components/Reticulas';
import { useTheme } from "@react-navigation/native"; //este se importa para la paret de dark mode
import { dummyData } from "../database/Data"; //data para carrusel
import * as global from "../database/variablesGlobales"; // para indicar una variable global que esta logueado


const HomeScreen = ({ navigation }) => {

  const [isLogueado, setIsLogueado] = useState(false);
  const { colors } = useTheme();
  const theme = useTheme();
  
  useEffect(() => {
    setIsLogueado(global.usuarioLogueado);

  }, []);

  return (
    <View>
      <Carousel data={dummyData} />
      <View style={styles.container}>
        <StatusBar barStyle={theme.dark ? "light-content" : "dark-content"} />
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
