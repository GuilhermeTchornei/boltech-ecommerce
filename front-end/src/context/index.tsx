"use client"
import { ThemeProvider } from "@emotion/react"
import { theme } from "./MUIThemeProvider"
import { ScriptProps } from "next/script"
import AuthProvider from "./authOverlay"
import { UserProvider } from "./userContext"

export default function Providers({ children }: ScriptProps) {
    return (
        <ThemeProvider theme={theme}>
            <UserProvider>
                <AuthProvider>
                    {children}
                </AuthProvider>
            </UserProvider>
        </ThemeProvider>
    )
}