import React, { Component } from 'react'
import { Text, View, StyleSheet, Animated, TouchableWithoutFeedback } from 'react-native'
import AddIcon from "@mui/icons-material/Add"
import Fab from '@mui/material/Fab'
import {Button} from "react-bootstrap"

export default class FloatingButton extends Component {
    render() {
        return (
            <View style={[styles.container]}>
                <TouchableWithoutFeedback>
                    <Animated.View style={[styles.button, styles.menu]}>
                        {/* sx is the bootstrap equivalent to react-native style*/}
                        <Fab>
                            <AddIcon sx={[styles.icon]}  />
                        </Fab>
                    </Animated.View>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "right",
        alignItems: "right"
    },
    button: {
        position: "absolute",
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        alightItems: "center",
        justifyContent: "center",
    },
    menu: {

    },
    icon: {
        justifyContent: "center"
    }
});