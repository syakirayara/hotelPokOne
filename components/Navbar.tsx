import Link from "next/link"
import Styles from "../styles/components/Navbar.module.css";
import LoginButton from "./Buttons/LoginButton";
import RegisterButton from "./Buttons/RegisterButton";


export default function Navbar() {
  return (
    <>
        <div className={`${Styles.navbar} bg-white p-5 flex justify-between align-middle z-50`}>
            <div className="logo mt-2">
                <Link href="/"><a className="title font-bold">Hotel Pok One</a></Link>
            </div>

            <ul className={`${Styles.navbarList} flex gap-10 mt-2`}>
                <li className={`${Styles.navbarItem}`}>
                    <Link href="/"><a>Beranda</a></Link>
                </li>
                <li className={`${Styles.navbarItem}`}>
                    <Link href="/kontak"><a>Kontak</a></Link>
                </li>
            </ul>

            <div className="flex gap-5">
                <LoginButton/>
                <RegisterButton/>
            </div>
        </div>
    </>
  )
}
