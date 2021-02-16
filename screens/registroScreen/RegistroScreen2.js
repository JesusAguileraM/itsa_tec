import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const RegistroScreen2 = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>RegistroScreen2</Text>
        {/* <Button
            title="Go to details screen...again"
            onPress={() => navigation.push("Details")}
        /> */}

        <Button
            title="Go back"
            onPress={() => navigation.goBack()}
        />
        <Button
            title="Go to home"
            onPress={() => navigation.navigate("Parte3Screen")}
        />
        
      </View>
    );
};

export default RegistroScreen2;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
