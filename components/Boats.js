import { Text, View, Image, StyleSheet} from 'react-native';
import { FontAwesome6 } from "@expo/vector-icons";
import React from "react";



const Boats = ({ title, Description, icon_name, icon_color, poster }) => {
    return (
        <View>
            <Image source={poster} style={styles.image} />

            <View style={styles.body}>
                <View style={styles.headerRow}>
                    <View style={styles.iconBadge}>
                        <FontAwesome6 name={icon_name} size={20} color={icon_color} />
                    </View>
                    <Text style={styles.title}>{title}</Text>
                </View>

                <Text style={styles.description}>{Description}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        width: '80%',            // fits any screen width
        height: 220,
        alignSelf: 'center',
        borderRadius: 25
    },
    body: {
        padding: 16,
    },
    headerRow: {
        flexDirection: 'row',     // icon and title side by side
        alignItems: 'center',     // vertically centred
        marginBottom:8
    },
    iconBadge: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#e0f2fe',
        justifyContent: 'center', // centres icon inside the circle
        alignItems: 'center',
        marginRight: 12,
    },
    title: {
        flex: 1,                  // takes the remaining space, wraps long names
        fontSize: 16,
        fontWeight: 'bold',
        color: '#0b3d5c',
    },
    description: {
        fontSize: 14,
        lineHeight: 30,
        color: '#4a5b6a',
    },
});
export default Boats;