import { Button, View, StyleSheet, Text } from 'react-native';

function ProfileScreen({ navigation }: any) {
    return (
        <View style={styles.viewStyle}>
            <Text>This is Profile Screen</Text>
            <Button
                title="Go to Notifications"
                onPress={() => navigation.navigate('Notifications')}
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

export default ProfileScreen;
