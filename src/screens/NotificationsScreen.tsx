import { Button, View, StyleSheet, Text } from 'react-native';

function NotificationsScreen({ navigation }: any) {
    return (
        <View style={styles.viewStyle}>
            <Text>This is Notification Screen</Text>
            <Button
                title="Go to Settings"
                onPress={() => navigation.navigate('Settings')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
})

export default NotificationsScreen;
