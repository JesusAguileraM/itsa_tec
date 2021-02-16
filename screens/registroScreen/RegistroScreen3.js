import React,{useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Paragraph, Dialog, Portal } from 'react-native-paper';

const RegistroScreen3 = ({navigation}) => {

  const [visible, setVisible] = useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => {
        setVisible(false);
        navigation.navigate("IniciarSecionScreen");
      }
    return (
      <View style={styles.container}>
        <Text>RegistroScreen3</Text>
        {/* <Button
            title="Go to details screen...again"
            onPress={() => navigation.push("Details")}
        /> */}

        <Button
            title="Go back"
            onPress={() => navigation.goBack()}
        > Regresar</Button>
        <Button
            mode="contained"
            color="#2096BA"
            onPress={() => showDialog()}
        >Completado</Button>
        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title>! Has completado el registro ¡</Dialog.Title>
            <Dialog.Content>
              <Paragraph>Revisa tú correo, dentro de las siguiente 24 horas te enviaremos una cuenta institucional para que puedas iniciar sesión.</Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button mode="text"
            color="#2096BA" onPress={hideDialog}>Aceptar</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
        
      </View>
    );
};

export default RegistroScreen3;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
