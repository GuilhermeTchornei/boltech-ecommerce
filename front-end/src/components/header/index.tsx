"use client"
import Image from "next/image";
import NewsHeader from "./news-header";
import logo from "@/logo-bolpar.png"
import NavBar from "./nav-bar";
import IconsBar from "./IconsBar";
import { useAuth } from "@/context/authOverlay";
import AuthForm from "../auth";

export default function Header() {
    const { showOverlay } = useAuth();

    return (
        <header className='h-auto flex flex-col z-10'>
            <NewsHeader />
            <div className="h-16 w-full max-w-max flex self-center items-center px-10 gap-x-16 ">
                <Image src={logo} className="h-2/3 w-auto" alt="" />
                <NavBar />
                <IconsBar />
            </div>
            {
                showOverlay && <AuthForm />
            }
        </header>
    )
}