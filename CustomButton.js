import { Pressable, StyleSheet, View, Text } from "react-native"; 
import React from "react";

const CustomButton = ({ press, title = 'Sample Text' }) => {
    return (
        <View style={styles.body}>
            <Pressable style={styles.button} onPress={press}>
                <Text style={styles.text}>
                    {title}
                </Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        width: '75%',
        height: '20%',
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 5,
        marginBottom: '5%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '7.5%'
    },
    text: {
        color: '#f5f5f5',
        textAlign: 'center',
        fontSize: 20,
    }
});

export default CustomButton;    