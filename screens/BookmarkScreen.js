import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import Feather from "react-native-vector-icons/Feather";


const BookmarkScreen = ({navigation}) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [foto, setFoto] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const guardarFoto = async () => {
    console.log('Entro al metodo');
    if (this.camera) {
      console.log('Entro al if');
      let fotoTemp = await this.camera.takePictureAsync();
      setFoto(fotoTemp);
    }
  };



  return (
    <View style={styles.container}>
      <Camera
        ref={ref => {this.camera = ref;}}
        style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={
              () => {navigation.goBack()
            }}>
            
            <Feather name="arrow-left" color="#fff" size={35} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={
              () => {guardarFoto();
            }}>
            <Feather name="circle" color="white" size={50} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => { 
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
            }}>
            <Feather name="refresh-cw" color="white" size={35} />
            
          </TouchableOpacity>
        
        </View>
      </Camera>
    </View>
  );
}
<Feather name="check-circle" color="green" size={20} />
export default BookmarkScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
    marginBottom:40,
    justifyContent: "space-between"
  },
  button: {
    flex: 0.4,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});

