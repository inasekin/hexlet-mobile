import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

type ProgrammingLanguageCardProps = {
    name: string;
    experience: string;
    logo: string;
};

const ProgrammingLanguageCard: React.FC<ProgrammingLanguageCardProps> = ({ name, experience, logo }) => {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.experience}>{experience}</Text>
            <Image source={{ uri: logo }} style={styles.logo} />
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        padding: 16,
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
        marginVertical: 8,
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    experience: {
        fontSize: 14,
        color: '#555',
        marginVertical: 4,
    },
    logo: {
        width: 50,
        height: 50,
        marginTop: 8,
    },
});

export default ProgrammingLanguageCard;
