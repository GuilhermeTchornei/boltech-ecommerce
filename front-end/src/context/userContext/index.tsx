"use client"
import { ScriptProps } from "next/script";
import { createContext, useContext, useEffect, useState } from "react";
import { IUser } from "./user.interface";


interface UserContextInterface {
    user: IUser | undefined,
    setUser: (user: IUser | undefined) => void
}

const UserContext = createContext<UserContextInterface | undefined>(undefined);

export function UserProvider({ children }: ScriptProps) {
    const [user, setUser] = useState<IUser>();

        if (!user && typeof window !== 'undefined') {
            const token = localStorage.getItem('token');
            const userName = localStorage.getItem('userName');
            if (token && userName) setUser({ token, userName });
        }

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default function UseUser(): UserContextInterface {
    const userContext = useContext(UserContext);

    if (!userContext) throw new Error('useUser must be used within an UserProvider');

    return userContext;
}