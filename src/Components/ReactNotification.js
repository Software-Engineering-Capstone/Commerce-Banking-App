import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import PropTypes from 'prop-types'

const ReactNoficationComponent = ({ title, body }) => {
    toast.info(<Display />)

    function Display () {
        return ( 
            <div>
                <h4>{title}</h4>
                <p>{body}</p>
            </div>
        )
    }

    return <ToastContainer />
}

ReactNoficationComponent.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string
}

export default ReactNoficationComponent