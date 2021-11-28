import React, { useState } from 'react'
// import {Button} from "react-bootstrap"
import { useHistory} from "react-router-dom"
import { useAuth } from '../context/AuthContext'
// import { Dimensions } from "react-native"

export default function SettingsButton() {
        const [, setError] = useState('');
        const [, setLoading] = useState(false);
        const { logout } = useAuth();
        const history = useHistory();
      //  var width = Dimensions.get('window').width;
       //  var buttonSize;

      /*  // Button changes size depending on device
        if (width < 751) {
            buttonSize = "sm"
        } else {
            buttonSize = ""
        }
        */

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
                
                <button className="logout-button" onClick={handleLogout}>
                    Logout <img src="logout.png" alt=""height="20px" width="auto"/>
                </button>
        )
}
