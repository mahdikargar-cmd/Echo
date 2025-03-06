import Link from "next/link";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import {currentUser} from "@clerk/nextjs/server";
import {syncUser} from "@/actions/user.action";
import logo from '../../public/logo.png'
import Image from "next/image";
import ModeToggle from "@/components/ModeToggle";

async function Navbar() {
    const user = await currentUser();
    if (user) await syncUser(); // POST

    return (
        <nav
            className="  top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
            <div className=" mx-auto px-4 ">
                <div className="flex items-center justify-between h-16 md:grid md:grid-cols-12">
                    <div className="flex items-center md:col-span-3">
                        <Link href="/"
                              className="text-xl flex justify-between font-bold text-primary font-mono tracking-wider">
                            <Image className={'rounded-full'} width={50} height={50} src={logo} alt=""/>
                            <p className={'flex mr-3.5 items-center align-middle'}> پژواک</p>

                        </Link>
                    </div>

                    <div className={'md:col-span-6  flex  md:items-center md:justify-center'}>
                        <DesktopNavbar/>
                        <MobileNavbar/>
                    </div>
                    <div className={'md:col-span-3 flex flex-row-reverse '}>
                        <ModeToggle />
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
