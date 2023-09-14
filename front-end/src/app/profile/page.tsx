"use client"
import useApi from "@/service/useApi"
import IUser from "./interface/user.interface"
import { useEffect, useState } from "react";
import UseUser from "@/context/userContext";
import { useRouter } from "next/navigation";

export default function Profile() {
    const { user } = UseUser();
    const [userData, setUserData] = useState<IUser>();
    const router = useRouter();

    useEffect(() => {
        async function getUserData() {
            setUserData(await useApi.get<IUser>('/users'));
        }

        if (user) getUserData();
        else router.push('/');
    }, [])

    return (
        <div className="max-w-max w-full flex min-h-screen flex-col justify-start px-10 gap-6">
            {
                userData ?
                    <>
                        <p>{`Name: ${userData.name}`}</p>
                        <p>{`Email: ${userData.email}`}</p>
                        <p>{`Telefone: ${userData.phone}`}</p>
                    </> : null
            }

        </div>
    )
}