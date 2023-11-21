import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen'; // Adjust the path as needed
import AboutScreen from './AboutScreen'; // Adjust the path as needed


// Create a stack navigator using createStackNavigator
const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hi there!</Text>
      <StatusBar style="auto" />
      <NavigationContainer>
        {/* Add the following: */} 
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="About" component={AboutScreen} />
        </Stack.Navigator>
        {/**********************/}
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

