"use client"
import { Button, TextField, Typography } from "@mui/material";
import { AxiosError } from "axios";
import React, { useState } from "react";
import IReqSignup from "./interface/reqSignup.interface";
import useApi from "@/service/useApi";

interface props {
    setHaveAccount: () => void;
}

export default function Signup({ setHaveAccount }: props) {
    const [newUser, setNewUser] = useState<IReqSignup>({
        name: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [errorMessage, setErrorMessage] = useState('');


    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await useApi.post<IReqSignup, null>('/signup', newUser);
            setHaveAccount();
        } catch (error: any) {
            if (error instanceof AxiosError) {
                setErrorMessage(error.response?.data.message);
            }
        }
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setNewUser(values => ({
            ...values,
            [name]: value,
        }))
    }

    return (
        <form onSubmit={handleSubmit} className="w-auto h-auto flex flex-col gap-y-3">
            <TextField type="text" label="Nome" name='name' value={newUser.name} onChange={handleChange} />
            <TextField type="tel" label="Telefone" name='phone' placeholder="(00)90000-0000" value={newUser.phone} onChange={handleChange} />
            <TextField type="email" label="Email" name='email' value={newUser.email} onChange={handleChange} />
            <TextField type="password" label="Senha" name='password' value={newUser.password} onChange={handleChange} />
            <TextField type="password" label="Confirmar senha" name='confirmPassword' value={newUser.confirmPassword} onChange={handleChange} />
            <label className="text-red-500 text-sm">{errorMessage}</label>
            <Button type="submit" variant="contained" className="bg-red hover:bg-light-red font-bold text-white">Entrar</Button>
            <Typography variant="subtitle1" className="flex items-center justify-center mt-4">
                Já possui conta?
                <Button variant="text" className="font-bold text-red hover:underline" onClick={setHaveAccount}>Entrar</Button>
            </Typography>
        </form>
    );
}