import { useEffect, useState } from "react"

export function useAlert(text){
    const [alert, setAlert] = useState(text);
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setAlert('')
        }, 3000);
        return () => clearTimeout(timeoutId);
    },[alert])
    return [alert, setAlert]
}