import React from 'react'
import { StyleSheet ,View, Text, ActivityIndicator } from 'react-native'

export default function Loading() {
    return (
        <View style={styles.container}>
            <Text >Loading....</Text>
             <ActivityIndicator size="large"></ActivityIndicator>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});
