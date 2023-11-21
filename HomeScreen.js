import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import MainLayout from './src/Layouts/Mainlayout';

export default function HomeScreen({ navigation }) {
  return (
    <MainLayout>
      <View style={styles.container}>
        <Text style={styles.text}>Home Screen</Text>
        <Button
          title="Go to About"
          onPress={() => navigation.navigate('About')}
        />
      </View>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
