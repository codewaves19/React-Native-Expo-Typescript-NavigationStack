import { Button, View, StyleSheet, Text } from 'react-native';

function HomeScreen({ navigation }: any) {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.headingStyle}>React Navigation</Text>
            <Text style={styles.textStyle}>This is Home Screen</Text>
            <Button
                title="Go to Profile"
                onPress={() => navigation.navigate('Profile')}
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
    textStyle: {
        fontSize: 28,
        color: 'black',
    },
    headingStyle: {
        fontSize: 28,
        color: 'black',
        textAlign: 'center',
    }
})

export default HomeScreen;
