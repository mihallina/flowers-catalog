import React, { useEffect, useState } from 'react'
import './Notification.css'

const Notification = ({message, isVisible, onClose}) => {
    const [show, setShow] = useState(isVisible);

    useEffect(() => {
        if(isVisible){
            setShow(true);
            const timer = setTimeout(() => {
                setShow(false);
                setTimeout(onClose, 300);
            }, 1000);
            return () => clearTimeout(timer)
        }
    }, [isVisible]);

    if(!show && !isVisible){
        return null
    }

  return (
    <div className={`notification ${show ? 'notification-visible' : 'notification-hide'}`}>
        {message}
    </div>
  )
}

export default Notification