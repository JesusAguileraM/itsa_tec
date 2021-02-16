import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const RegistroScreen1 = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>RegistroScreen1</Text>
        {/* <Button
            title="Go to details screen...again"
            onPress={() => navigation.push("Details")}
        /> */}
          <Button
            title="Go back"
            onPress={() => navigation.goBack()}
        />
        <Button
            title="Parte1"
            onPress={() => navigation.navigate("Parte2Screen")}
        />
      
      </View>
    );
};

export default RegistroScreen1;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
