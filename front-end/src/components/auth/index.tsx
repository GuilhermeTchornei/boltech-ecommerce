"use client"
import { useEffect, useRef, useState } from "react";
import { Typography } from "@mui/material";
import Signin from "./signin";
import Signup from "./signup";
import { useAuth } from "@/context/authOverlay";

export default function AuthForm() {
    const { setShowOverlay } = useAuth();
    const [haveAccount, setHaveAccount] = useState(true);

    const overlayRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (overlayRef.current && !overlayRef.current.contains(event.target as Node)) {
                setShowOverlay(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [setShowOverlay]);



    return (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 z-50 flex flex-col justify-center items-center">
            <div ref={overlayRef} className="flex flex-col bg-white rounded-xl px-10 py-9 gap-4">
                <Typography variant="h3">Bem-vindo!</Typography>
                {
                    haveAccount ?
                        <Signin setHaveAccount={() => setHaveAccount(false)} /> :
                        <Signup setHaveAccount={() => setHaveAccount(true)} />
                }


            </div>
        </div>

    )
}