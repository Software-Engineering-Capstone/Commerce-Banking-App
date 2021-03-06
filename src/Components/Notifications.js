// Can be used for testing out Firebase Cloud Messages (FCM)
import React, {useState, useEffect } from "react"
import { getToken } from "../config/firebase"

const Notifications = (props) => {
    const [isTokenFound, setTokenFound] = useState(false)
    console.log("Token found", isTokenFound)

    // to load once
    useEffect(() => {
        let data

        async function tokenFunc() {
            data = await getToken(setTokenFound)
            if (data) {
                console.log("Token is", data)
            }
            return data
        }

        tokenFunc()
    }, [setTokenFound])

    return <></>
}

Notifications.propTypes = {}

export default Notifications