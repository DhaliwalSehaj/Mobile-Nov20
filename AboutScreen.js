import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react'; // Import React
import { Button } from 'react-native';
import HomeScreen from './HomeScreen';
import MainLayout from './src/Layouts/Mainlayout';

export default function AboutScreen({ navigation }) {
    // ...

    return (
        <MainLayout>
            {/* ... */}
            <Text>
                About Screen
            </Text>
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate("HomeScreen")}
            />
            {/* ... */}
        </MainLayout>
    );
}
