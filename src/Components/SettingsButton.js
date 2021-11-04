import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import {Button} from "react-bootstrap"
import { useHistory} from "react-router-dom";
import { useAuth } from '../context/AuthContext'

export default function SettingsButton() {
        const [, setError] = useState('');
        const [, setLoading] = useState(false);
        const { logout } = useAuth();
        const history = useHistory();

        async function handleLogout() {
            setError('') 

            try {
                // 
                setLoading(true)
                await logout()
                history.push("/Login")
    
            } catch (e) {
                setError('Failed to Logout' + e)
            }
    
            setLoading(false)
        }

        return (
            <View style={[styles.container]}>
                <Button onClick={handleLogout}>
                    <img src="settingscog3.png" alt="settings" width="35" height="35" />
                </Button>
            </View>
        )
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        right: "80px",
        top: "0px"
    }
});