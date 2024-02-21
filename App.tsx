import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import NotificationsScreen from './src/screens/NotificationsScreen';
import SettingsScreen from './src/screens/SettingsScreen';

const Stack = createNativeStackNavigator();

function StackNav() {
    return (
        <Stack.Navigator screenOptions={{
            headerTintColor: "black"
        }}>
            <Stack.Screen name="Home" component={HomeScreen} options={{
                statusBarColor: "cyan",
                title: "Welcome to All!!!",
                headerStyle: {
                    backgroundColor: "orange"
                },
            }} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Notifications" component={NotificationsScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
    );
}

const DrawerNav = () => {
    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Profile" component={ProfileScreen} />
            <Drawer.Screen name="Notifications" component={NotificationsScreen} />
            <Drawer.Screen name="Settings" component={SettingsScreen} />
        </Drawer.Navigator>
    )
}
export default function App() {
    return (
        <NavigationContainer>
            <DrawerNav />
        </NavigationContainer>
    );
}
