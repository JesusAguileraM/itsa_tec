import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { dummyData } from '../database/Data';
import Carousel from '../components/Carousel';
const HomeScreen = ({navigation}) => {

  const { colors } = useTheme();

  const theme = useTheme();
  
    return (
      <>  
          <Carousel data = {dummyData}/>
          <View style={styles.container}>
            <StatusBar barStyle= { theme.dark ? "light-content" : "dark-content" }/>
            
          <Button
            title="Go to details screen"
            onPress={() => navigation.navigate("Notifications")}
          />
          </View>
      </>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'flex-start'
  }
});
