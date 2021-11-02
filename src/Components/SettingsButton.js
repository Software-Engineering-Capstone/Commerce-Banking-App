import React, { Component } from 'react'
import { Text, View, StyleSheet, Animated, TouchableWithoutFeedback } from 'react-native'
import AddIcon from "@mui/icons-material/Add"
import Fab from '@mui/material/Fab'
import {Button} from "react-bootstrap"
import { Link, useHistory} from "react-router-dom";

export default class SettingsButton extends Component {

    render() {
        return (
            <View style={[styles.container]}>
                <Button href="./Signup">
                    <img src="settingscog3.png"  width="35" height="35" />
                </Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        right: "100px",
        top: "1px"
    }
});