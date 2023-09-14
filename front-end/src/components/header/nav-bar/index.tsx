import Link from "next/link"

export default function NavBar() {
    return (
        <ul className="w-full flex justify-evenly text-l uppercase">
            <li className="hover:underline">
                <Link href='/'>Home</Link>
            </li>
            <li className="hover:underline">
                <Link href='/'>Acessórios Internos</Link>
            </li>
            <li className="hover:underline">
                <Link href='/'>Acessórios Externos</Link>
            </li>
            <li className="hover:underline">
                <Link href='/'>Som e Mídia</Link>
            </li>
            <li className="hover:underline">
                <Link href='/'>Segurança</Link>
            </li>
        </ul>
    )
}