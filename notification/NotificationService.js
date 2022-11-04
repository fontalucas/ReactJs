import {creatcontext} from "react"

const NotificationContext = creatcontext()

const NotificationProvider = ({children}) => {
    return (
        <NotificationContext.Provider>
            <Notification />
            {children}
        </NotificationContext.Provider>
    )
}