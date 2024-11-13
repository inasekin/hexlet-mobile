import {useState} from "react";
import {SafeAreaView, FlatList, StyleSheet, RefreshControl} from "react-native";
import {programmingLanguages} from "@/components/data/data";
import ProgrammingLanguageCard from "@/components/ProgrammingLanguageCard";

export default function HomeScreen() {
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => setRefreshing(false), 2000);
    };

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={programmingLanguages}
                keyExtractor={(item) => item.name}
                renderItem={({ item }) => (
                    <ProgrammingLanguageCard name={item.name} experience={item.experience} logo={item.logo} />
                )}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 16,
    },
});
