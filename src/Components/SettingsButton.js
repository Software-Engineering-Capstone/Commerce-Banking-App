import React, { useState } from 'react'
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
            <span className="settings-button">
                <Button variant="secondary" onClick={handleLogout}>
                    <img src="settingscog3.png" alt="settings" width="35" height="35" />
                </Button>
            </span>
        )
}