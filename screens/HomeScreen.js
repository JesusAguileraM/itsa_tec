import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  Linking,
  Dimensions,
} from "react-native";
import {
  Button,
  Card,
  Title,
} from "react-native-paper";
import Carousel from "../components/Carousel";

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
    <>
      <Carousel data={dummyData} />
      <View style={styles.container}>
        <StatusBar barStyle={theme.dark ? "light-content" : "dark-content"} />
        
        <View style={styles.contenidoCard}>
          <ScrollView>
            <Card
              onPress={() => {
                Linking.openURL(
                  "https://www.itsa.edu.mx/wp-content/uploads/2014/11/Reti%CC%81cula-ISIC-2010-224-May161.pdf"
                );
              }}
            >
              <Card.Content>
                <Title>Ing.Sistemas en Computacionales</Title>
              </Card.Content>
              <Card.Cover
                source={{
                  uri:
                    "https://moodle.itq.edu.mx/pluginfile.php/42340/course/overviewfiles/Ingenieria-en-Sistemas-Computacionales.jpg",
                }}
              />
              <Card.Actions>
                <Button>Ver Reticula</Button>
              </Card.Actions>
            </Card>

            <Card
              onPress={() => {
                Linking.openURL(
                  "https://www.itsa.edu.mx/wp-content/uploads/2014/11/Reti%CC%81cula-ISIC-2010-224-May161.pdf"
                );
              }}
            >
              <Card.Content>
                <Title>Ing. en adiministración de Empresas</Title>
              </Card.Content>
              <Card.Cover
                source={{
                  uri:
                    "https://edec.mx/wp-content/uploads/2017/08/Licenciatura-en-Administracion-de-Empresas.jpg",
                }}
              />
              <Card.Actions>
                <Button>Ver Reticula</Button>
              </Card.Actions>
            </Card>

            <Card
              onPress={() => {
                Linking.openURL(
                  "https://www.itsa.edu.mx/wp-content/uploads/2014/11/Reti%CC%81cula-ISIC-2010-224-May161.pdf"
                );
              }}
            >
              <Card.Content>
                <Title>Ing. Informática</Title>
              </Card.Content>
              <Card.Cover
                source={{
                  uri:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT38B0x3dvMrR9GwtzvwDQDi2XFMRDIsbFyA&usqp=CAU",
                }}
              />
              <Card.Actions>
                <Button>Ver Reticula</Button>
              </Card.Actions>
            </Card>
          </ScrollView>
        </View>
      </View>
    </>
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
