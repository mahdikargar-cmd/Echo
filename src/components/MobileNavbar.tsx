"use client";
import {
    BellIcon,
    HomeIcon,
    LogOutIcon,
    MenuIcon,
    UserIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { SignOutButton, useUser} from "@clerk/nextjs";
import Link from "next/link";

function MobileNavbar() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const { isSignedIn } = useUser();

    return (
        <div className="flex md:hidden items-center space-x-2 w-full mr-64 ">
            <Sheet open={showMobileMenu} onOpenChange={setShowMobileMenu}>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <MenuIcon className="h-5 w-5" />
                    </Button>
                </SheetTrigger>
                <SheetContent >
                    <SheetHeader>
                        <SheetTitle>منو</SheetTitle>
                    </SheetHeader>
                    <nav className="flex flex-col space-y-4 mt-6">
                        <Button variant="ghost" className="flex items-center gap-3 justify-start" asChild>
                            <Link href="/">
                                <HomeIcon className="w-4 h-4" />
                                صفحه اصلی
                            </Link>
                        </Button>

                        {isSignedIn ? (
                            <>
                                <Button variant="ghost" className="flex items-center gap-3 justify-start" asChild>
                                    <Link href="/notifications">
                                        <BellIcon className="w-4 h-4" />
                                        اعلانات
                                    </Link>
                                </Button>
                                <Button variant="ghost" className="flex items-center gap-3 justify-start" asChild>
                                    <Link href="/profile">
                                        <UserIcon className="w-4 h-4" />
                                        پروفایل
                                    </Link>
                                </Button>
                                <SignOutButton>
                                    <Button variant="ghost" className="flex items-center gap-3 justify-start w-full">
                                        <LogOutIcon className="w-4 h-4" />
                                        خروج
                                    </Button>
                                </SignOutButton>
                            </>
                        ) : (
                          <div className={'w-full bg-black text-white p-2 rounded-lg hover:bg-gray-400 hover:text-black transition ease-in 2s'}><p>قبل از لاگین کردن حتما از روشن بودن vpn خود مطمئن شوید</p></div>
                        )}
                    </nav>
                </SheetContent>
            </Sheet>
        </div>
    );
}

export default MobileNavbar;