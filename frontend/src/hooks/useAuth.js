import { useEffect, useState } from "react";
import axios from "axios";

const useAuth =  () => {
    const [ auth, setAuth ] = useState();

    const verifyAuth = async () => {
        try {
            const res = await axios.get('/api/auth/is_logged_in')
            return res?.data
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    useEffect(() => {
        (
            async () => {
                const data = await verifyAuth()
                setAuth(data);
            }
        )()
    })

    return { auth };
}

export default useAuth;