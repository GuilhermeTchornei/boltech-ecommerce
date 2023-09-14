"use client"
import { Button, TextField, Typography } from "@mui/material";
import { AxiosError } from "axios";
import { useState } from "react";
import { useAuth } from "@/context/authOverlay";
import UseUser from "@/context/userContext";
import useApi from "@/service/useApi";
import IReqSignin from "./interface/reqSignin.interface";
import IResSignin from "./interface/resSignin.interface";
import { useRouter } from "next/navigation";

interface props {
    setHaveAccount: () => void;
}

export default function Signin({ setHaveAccount }: props) {
    const { setShowOverlay } = useAuth();
    const { setUser } = UseUser();
    const [login, setLogin] = useState<IReqSignin>({
        email: '',
        password: '',
    });
    const [errorMessage, setErrorMessage] = useState('');
    const router = useRouter();

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            const response = await useApi.post<IReqSignin, IResSignin>('/signin', login);
            setUser(response);
            setShowOverlay(false);
            localStorage.setItem('token', response.token);
            localStorage.setItem('userName', response.userName);
            router.push('/profile');
        } catch (error: any) {
            if (error instanceof AxiosError) {
                setErrorMessage(error.response?.data.message);
            }
        }
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setLogin(values => ({
            ...values,
            [name]: value,
        }))
    }


    return (
        <form onSubmit={handleSubmit} className="w-auto h-auto flex flex-col gap-y-3">
            <TextField type="email" name='email' label="Email" value={login.email} onChange={handleChange} />
            <TextField type="password" name='password' label="Senha" value={login.password} onChange={handleChange} />
            <label className="text-red-500 text-sm">{errorMessage}</label>
            <Button type="submit" variant="contained" className="bg-red hover:bg-light-red font-bold text-white">Entrar</Button>
            <Typography variant="subtitle1" className="flex items-center justify-center mt-4">
                Não tem conta?
                <Button variant="text" className="font-bold text-red hover:underline" onClick={setHaveAccount}>Cadastre-se</Button>
            </Typography>
        </form>
    );
}