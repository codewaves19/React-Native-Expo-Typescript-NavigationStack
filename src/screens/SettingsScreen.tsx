import { Button, View, StyleSheet, Text } from 'react-native';

function SettingsScreen({ navigation }: any) {
    return (
        <View style={styles.viewStyle}>
            <Text>This is Settings Screen</Text>
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

export default SettingsScreen;
