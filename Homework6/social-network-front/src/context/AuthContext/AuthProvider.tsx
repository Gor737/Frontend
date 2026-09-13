import { useEffect, useState, type ReactNode } from "react"
import { AuthContext } from "./AuthContext"
import { getUser } from "../../services/auth";
import type { User } from "../../types/account";

type Prop = {
    children: ReactNode;
}
export const AuthProvider = ({children}:Prop) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        if(localStorage.getItem("authorization")){
            getUser().then((data) => {
                setLoading(false);
                setUser(data.user);
            });
        }else setLoading(false);
    }, [])

    const onLogout = () => {
        setUser(null);
        localStorage.removeItem('authorization');
    }

    const updateUser = async () => {
        const token = localStorage.getItem("authorization");
        if(token){
            const newUser = await getUser();
            if(newUser) setUser(newUser.user);
        }
    }

    const value = {
        user,
        loading,
        onLogout,
        updateUser
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}