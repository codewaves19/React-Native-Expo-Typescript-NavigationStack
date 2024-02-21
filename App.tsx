import 'react-native-gesture-handler';
import { NavigationContainer, useNavigation, DrawerActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Entypo';
import DrawerNavigator from './DrawerNavigator';

import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import NotificationsScreen from './src/screens/NotificationsScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import DrawerContent from './src/screens/DrawerContent';

function StackNav() {
    const navigation = useNavigation();
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions={{
            statusBarColor: '#0163d2',
            headerStyle: {
                backgroundColor: '#0163d2'
            },
            headerTintColor: "#fff",
            headerTitleAlign: 'center',
            headerLeft: () => {
                return(
                    <Icon
                        name="menu"
                        onPress={()=>navigation.dispatch(DrawerActions.openDrawer)}
                        size={30}
                        color="#fff"
                    />
                );
            },
        }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Notifications" component={NotificationsScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
    );
}

const DrawerNav = () => {
    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator
            drawerContent={props => <DrawerContent {...props} />}
            screenOptions={{
                headerShown: false,
            }}>
            <Drawer.Screen name="Welcome" component={StackNav} />
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
