import { useSelector } from 'react-redux'

const Alert = () => {
    const alertText = useSelector((state) => state.alertText);
    const alertType = useSelector((state) => state.alertType);
    console.log(alertText,alertType)
    return <div className="alert">{alertText}</div>
}

export default Alert
