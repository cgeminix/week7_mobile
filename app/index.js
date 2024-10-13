import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Screen1 from './Screen1'
import Screen2 from './Screen2'
import Screen3 from './Screen3';
const Stack = createNativeStackNavigator();

export default function App(){
    return(
        <NavigationContainer independent={true}>
            <Stack.Navigator>
                <Stack.Screen name="Screen1" component={Screen1} options={{headerShown:false}}/>
                <Stack.Screen name="Screen2" component={Screen2} options={{headerShown:false}}/>
                <Stack.Screen name="Screen3" component={Screen3} options={{headerShown:false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}