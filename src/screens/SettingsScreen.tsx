import { Button, View, StyleSheet, Text } from 'react-native';

function SettingsScreen({ navigation }: any) {
    return (
        <View style={styles.viewStyle}>
      <Button title="Go back" onPress={() => navigation.goBack()} />
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
