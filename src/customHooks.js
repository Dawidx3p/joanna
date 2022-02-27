import { useEffect, useState } from "react"

export function useAlert(text){
    const [alert, setAlert] = useState(text);
    useEffect(() => {
        setTimeout(() => {
            setAlert('')
        }, 3000)
    },[alert])
    return [alert, setAlert]
}