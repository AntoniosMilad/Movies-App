import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native'

export const MoreScreen = () => {
    return (
        <View style={styles.container}>
            {/* <View style={styles.navigation}>
                 <Text>Navigation</Text>
                </View> */}
            <View style={styles.body}>
                <Text>More screen  </Text>
            </View>
            {/* <View style={styles.footer}>
                    <Text>footer</Text>
                </View> */}

        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center'
    },
    navigation: {
        flex: 2,
        backgroundColor: 'red'
    },
    body: {
        flex: 1,
        justifyContent: 'center',
        // backgroundColor: 'yellow'
    },
    footer: {
        flex: 1,
        backgroundColor: 'cyan'
    }
})