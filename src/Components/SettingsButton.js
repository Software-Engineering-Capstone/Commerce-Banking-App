import React, { useState } from 'react'
import {Button} from "react-bootstrap"
import { useHistory} from "react-router-dom"
import { useAuth } from '../context/AuthContext'
import { Dimensions } from "react-native"

export default function SettingsButton() {
        const [, setError] = useState('');
        const [, setLoading] = useState(false);
        const { logout } = useAuth();
        const history = useHistory();
        var width = Dimensions.get('window').width;
        var buttonSize;

        console.log(width);

        // Button changes size depending on device
        if (width < 751) {
            buttonSize = "sm"
        } else {
            buttonSize = "lg"
        }

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
            <span className="settings-button">
                <Button variant="secondary" size={buttonSize} onClick={handleLogout}>
                    <img src="settingscog3.png" alt="settings" width="35" height="35" />
                </Button>
            </span>
        )
}