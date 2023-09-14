import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useState } from "react";
import { useRouter } from "next/router";
import ProfileMenu from "./profileMenu";

export default function IconsBar() {
    const [openProfile, setOpenProfile] = useState(false);

    return (
        <ul className="h-full flex gap-x-4 justify-center items-center">
            <li className='relative'>
                <button className="h-7 w-7" onMouseOver={() => setOpenProfile(true)} onMouseOut={() => setOpenProfile(false)}>
                    <AccountCircleIcon className="h-auto w-auto" />
                </button>
                {
                    openProfile && <ProfileMenu setOpenProfile={(bool: boolean) => setOpenProfile(bool) } />
                }
            </li>
            <li className='relative'>
                <button className="h-7 w-7">
                    <ShoppingCartIcon className="h-auto w-auto" />
                </button>
            </li>
        </ul>
    )
}