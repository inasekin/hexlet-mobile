import {StyleSheet, Text, View} from "react-native";

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Имя: Иван</Text>
            <Text style={styles.text}>Фамилия: Насекин</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
    },
});
