import React, { Component } from 'react'
import { Text, View, StyleSheet, Animated, TouchableWithoutFeedback } from 'react-native'
import AddIcon from "@mui/icons-material/Add"
import Fab from '@mui/material/Fab'
import {Button} from "react-bootstrap"
import { Link, useHistory} from "react-router-dom";

export default class FloatingButton extends Component {

    render() {
        return (
            <View style={[styles.container]}>
                <TouchableWithoutFeedback>
                    <Animated.View style={[styles.button, styles.menu]}>
                        {/* sx is the bootstrap equivalent to react-native style*/}
                        <Fab href="./TransactionForm">
                            <AddIcon sx={[styles.icon]} />
                        </Fab>
                    </Animated.View>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}



// function handleClick() {
//     history.push("/transactionForm")
// }

const styles = StyleSheet.create({
    container: {
        position: "fixed",
        flex: 1,
        right: "100px",
        bottom: "100px"
    },
    button: {
        position: "absolute",
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        alightItems: "right",
        justifyContent: "right",
    },
    menu: {

    },
    icon: {
        justifyContent: "center"
    }
});